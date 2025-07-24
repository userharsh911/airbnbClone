const express = require("express");

const {indexController} = require("../controllers/store");
const {homeController} = require("../controllers/store");
const {favouritesController} = require("../controllers/store");
const {bookingsController} = require("../controllers/store");
const {homeDetailsController} = require("../controllers/store");
const {favouritesPostController} =   require("../controllers/store");
const {removeFavouritesPostController} =   require("../controllers/store");

const userRouter = express.Router();

userRouter.get("/",indexController);
userRouter.get("/home",homeController);
userRouter.get("/favourites",favouritesController);
userRouter.post("/favourites/home-details/:homeid",favouritesPostController);
userRouter.post("/favourites/remove-fav/:homeid",removeFavouritesPostController);
userRouter.get("/bookings",bookingsController);
userRouter.get("/home/:homeid",homeDetailsController);

module.exports = userRouter;