const express = require("express");

const {addHomeController} = require("../controllers/host");
const {addedHomeController} = require("../controllers/host");
const {hostHomeListController} = require("../controllers/host");
const {editHostHomeListController} = require("../controllers/host");
const {postEditHomeListController} = require("../controllers/host");
const {hostHomeDelController} = require("../controllers/host");

const hostRouter = express.Router();

hostRouter.get("/add-home",addHomeController);
hostRouter.post("/add-home",addedHomeController);
hostRouter.get("/host-home-list",hostHomeListController);
hostRouter.get("/host-home-list/:homeid",editHostHomeListController);
hostRouter.post("/host-home-list",postEditHomeListController);
hostRouter.post("/del/:homeid",hostHomeDelController);

exports.hostRouter = hostRouter;