const Home = require("../models/homes")
exports.addHomeController = (req,res,next)=>{
    res.render('host/edit-home',{house:[],pageTitle:"Add Home",editing:false,currentPage:"addHome",isLoggedIn : req.isLoggedIn,user:req.session.user})
}

exports.addedHomeController = (req,res,next)=>{
    const userid = req.session.user._id;
    const {HouseName,Location,Price,photoUrl,Description} = req.body
    const house = new Home({HouseName,Location,Price,photoUrl,Description,host:userid});
    house.save().then(()=>{
        res.redirect("/host/host-home-list")
    })
    .catch(err=>{
        console.log(err)
    })
}
exports.editHostHomeListController = (req,res,next)=>{
    const houseid = req.params.homeid;
    const editing = req.query.editing==="true"; 
    Home.findById(houseid).then(house=>{
        console.log("i'm id of house : ",house)
        res.render("host/edit-home.ejs",{house:house,editing:editing,pageTitle:"edit host-home-list",currentPage:"host-homes",isLoggedIn : req.isLoggedIn,user:req.session.user})
    })
}
exports.postEditHomeListController = (req,res,next)=>{
    const {HouseName,Location,Price,photoUrl,Description,id} = req.body;
    Home.findById(id).then((house)=>{
        house.HouseName = HouseName;
        house.Location = Location;
        house.Price = Price;
        house.photoUrl = photoUrl;
        house.Description = Description;
        house.save()
        .then((result)=>{
            console.log("house updated ",result)
            res.redirect("/host/host-home-list")
        })
    })
    .catch(err=>{
        console.log("house for update not found",err)
    })
}
exports.hostHomeListController = (req,res,next)=>{
    const userid = req.session.user._id;
     Home.find({host:userid}).then(houseData=>{
        console.log('host specifc house',houseData)
        res.render("host/host-home-list",{houseData : houseData,pageTitle:"host-home-list",currentPage:"host-homes",isLoggedIn : req.isLoggedIn,user:req.session.user})
     })
} 
exports.hostHomeDelController = (req,res,next)=>{
    const houseid = req.params.homeid;
    Home.findByIdAndDelete(houseid).then(()=>{
        res.redirect("/host/host-home-list")
    })
}