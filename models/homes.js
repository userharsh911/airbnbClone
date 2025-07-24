const mongoose = require("mongoose");
const User = require("./user");
const homeSchema = mongoose.Schema({
    HouseName : {type:String,required : true},
    Location : {type:String,required : true},
    Price : {type:Number,required : true},
    photoUrl : {type:String,required : true},
    Description :String,
    host : {type: mongoose.Schema.Types.ObjectId}
})

homeSchema.pre('findOneAndDelete',async function(next){
    console.log("i'm removing also from favourites ")
    const homeid = this.getQuery()._id;
    const users = await User.find()
    users.forEach(async(user)=>{
        user.favourites = user.favourites.filter(fav => fav!=homeid)
        await user.save()
    })
    next();
})

module.exports = mongoose.model("Home",homeSchema)
