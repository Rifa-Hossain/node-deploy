const mongoose = require('mongoose');
const { Schema } = mongoose;

//Schema
const productSchema = new Schema({
    title: {type:String, required: true, unique: true} ,
    description: String,
    price:{type: Number, min:[0,'Invalid price'],required: true},
    discountPercentage:{type: Number, min:[0,'Invalid min discount'],max:[100,'Too much disccount']},
    rating:{type: Number, min:[0,'Invalid min rating'],max:[5,'Invalid max rating'],default:0},
    brand:{type: String,required: true},
    category:{type: String, required: true},
    thumbnail:{type: String, required: true},
    images:[ String ] 
  });

 exports.Product = mongoose.model('Product',productSchema);