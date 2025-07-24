const Home = require("../models/homes");
const User = require("../models/user");
exports.indexController = (req, res, next) => {
    Home.find().then(houseData => {
        res.render("index", { houseData: houseData, pageTitle: "airbnb", currentPage: "index",isLoggedIn : req.isLoggedIn,user:req.session.user })
    });

}
exports.homeController = (req, res, next) => {
    Home.find().then(houseData => {
        res.render("store/home", { houseData: houseData, pageTitle: "home", currentPage: "Home",isLoggedIn : req.isLoggedIn,user:req.session.user })
    });

}
exports.favouritesController = async(req, res, next) => {
    const userId = req.session.user._id
    const user = await User.findById(userId).populate('favourites');
    res.render("store/favourites", { favList: user.favourites, pageTitle: "favourites", currentPage: "Favourites",isLoggedIn : req.isLoggedIn,user:req.session.user })
}
exports.favouritesPostController = async (req, res, next) => {
    const houseid = req.params.homeid;
    const userId = req.session.user._id;
    const user = await User.findById(userId);
    if(!user.favourites.includes(houseid)){
        user.favourites.push(houseid)
        await user.save();
        res.redirect("/favourites")
    }else{
        console.log("already added to favourites")
        res.redirect("/favourites")
    }

}
exports.removeFavouritesPostController = async(req,res,next)=>{
    const userId = req.session.user._id
    const user = await User.findById(userId)
    const houseid = req.params.homeid;
    user.favourites = user.favourites.filter(fav => fav!=houseid)
    await user.save()
    res.redirect('/favourites')
}
exports.bookingsController = (req, res, next) => {
    res.render("store/bookings", { pageTitle: "bookings", currentPage: "bookings",isLoggedIn : req.isLoggedIn,user:req.session.user })

}
exports.homeDetailsController = (req, res, next) => {
    const houseId = req.params.homeid;
    Home.findById(houseId).then(houseData => {
        res.render("store/home-details", { pageData: houseData, pageTitle: "home-details", currentPage: "Home",isLoggedIn : req.isLoggedIn,user:req.session.user });
    })

}