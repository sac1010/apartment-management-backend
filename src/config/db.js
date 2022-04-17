const mongoose = require("mongoose")

db = "mongodb+srv://sac101:sac123@cluster0.g2o0e.mongodb.net/apartment?retryWrites=true&w=majority"

module.exports  = ()=>{
    mongoose.connect(db)
}