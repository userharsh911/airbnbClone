const { check, validationResult } = require("express-validator");
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const session = require("express-session");
exports.getLogin = (req,res,next)=>{
    // console.log(req.session.user,req.isloggedIn)
    res.render("auth/login",{pageTitle:"Login",currentPage:"Login",isLoggedIn :req.isloggedIn,errorMsg:false,oldmail:false})
}
exports.postLogin = async (req,res,next)=>{
    // res.cookie("isLoggedIn",true)
    const {email,password}=req.body
    const user = await User.findOne({email});
    if(!user){
        console.log("Email not found");
        return res.render("auth/login",{
                    pageTitle:"Login",
                    currentPage:"Login",
                    isLoggedIn : req.isLoggedIn,
                    errorMsg : "email not found",
                    oldmail : email,
                })
    }else{
        const isMatch = await bcrypt.compare(password,user.password)
        if(isMatch){
            req.session.isLoggedIn = true;
            req.session.user = user;
        }
        else{
            return res.render("auth/login",{
                pageTitle:"Login",
                currentPage:"Login",
                isLoggedIn : req.isLoggedIn,
                errorMsg : "password doesn't match",
                oldmail : email,
            })
        }
        res.redirect("/");
    }

}
exports.postLogout = async (req,res,next)=>{
    // res.cookie("isLoggedIn",false)
    await req.session.destroy(()=>{
        console.log("session destroyed")
        res.redirect("/auth/login")
    })
}
exports.getSignup = (req,res,next)=>{
    res.render("auth/signup",{pageTitle:"signup",currentPage:"signup",isLoggedIn : req.isLoggedIn,errors:[],oldVal:false})
}
exports.postSignup = [
    check('firstName')
    .notEmpty()
    .withMessage("first name should not be empty")
    .trim()
    .isLength({min:3})
    .withMessage("first name should be greater than 2 letters")
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage("first name only can be in letters"),

    check('lastName')
    .trim()
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage("last name only can be in letters")
    .optional(),

    check('email')
    .isEmail()
    .withMessage("Enter a valid mail")
    .normalizeEmail(),

    check('password')
    .notEmpty()
    .withMessage("password can not be empty")
    .matches(/[a-z]/)
    .withMessage("small letter must be in password")
    .matches(/[A-Z]/)
    .withMessage("capital letter must be in password")
    .matches(/[!@#$%^&*()]/)
    .withMessage('special character must be in passwords'),

    check('confirmPassword')
    .trim()
    .custom((val,{req})=>{
        if(val != req.body.password){
            throw new Error("password not matched")
        }
        return true
    }),

    check('userType')
    .notEmpty()
    .withMessage("user type should not be empty")
    .isIn(['guest','host'])
    .withMessage("invalid user type"),

    check('termNcondition')
    .notEmpty()
    .withMessage("please check on terms and conditions")
    .custom((val)=>{
        if(val!="on"){
            throw new Error("please check on terms and conditions")
        }
        return true
    }),
    
    ,(req,res,next)=>{
        const {firstName,lastName,email,password,userType} = req.body
        const errors = validationResult(req);
        console.log(errors,userType)
        if(!errors.isEmpty()){
            return res.status(422).render('auth/signup',{
                pageTitle:"signup",
                currentPage:"signup",
                isLoggedIn : req.isLoggedIn,
                errors : errors.array().map(err => err.msg),
                oldVal : {firstName,lastName,email,userType}
            })
        }
        bcrypt.hash(password,12)
        .then(encryptedPass=>{
            const user = new User({firstName,lastName,email,password:encryptedPass,userType})
            return user.save()
        })
        .then(()=>{
            res.redirect("/auth/login")
        })
        .catch(err=>{
            console.log("error while saving user ",err)
                res.status(422).render('auth/signup',{
                pageTitle:"signup",
                currentPage:"signup",
                isLoggedIn : req.isLoggedIn,
                errors : errors.array().map(err => err.msg),
                oldVal : {firstName,lastName,email,userType}
            })
        })
        
    }
]

