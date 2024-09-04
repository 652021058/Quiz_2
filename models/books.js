const mongoose = require("mongoose");
const BooksSchema = new mongoose.Schema({

    title : {type : String, required : true}, 
    author : {type : String, required : true},
    published_year : {type : Number, required : true},
    genre : {type : String, required : true},
    available : {type : Boolean , required : true},
    
    },{ timestamp :true, versionKey : false}
);

module.exports = mongoose.model('Books', BooksSchema);