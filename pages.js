const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/pagestesting");

const pageSchema = mongoose.Schema({
    pagename : String,
    username : String,
    description:String,
    content:{
        type: Array,
        default:[]
    },
    datecreated:{
        type:Date,
        default: Date.now()
    }

})

module.exports = mongoose.model("page",pageSchema);