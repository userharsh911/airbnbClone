const express = require("express");
const authRouter = express.Router()
const {getLogin} = require("../controllers/auth")
const {postLogin} = require("../controllers/auth")
const {postLogout} = require("../controllers/auth")
const {getSignup} = require("../controllers/auth")
const {postSignup} = require("../controllers/auth")
authRouter.get('/login',getLogin)
authRouter.post('/login',postLogin)
authRouter.post('/logout',postLogout)
authRouter.get('/signup',getSignup)
authRouter.post('/signup',postSignup)
module.exports = authRouter