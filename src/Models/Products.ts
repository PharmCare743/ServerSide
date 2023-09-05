import mongoose from 'mongoose';
import { model, Schema, Model, Document } from 'mongoose';
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");

export class productInterface {
  _id:string='';
  item_name: string = '';
  description: string = '';
  pack_size: string = '';
  item_price: string = '';
  discount_price : string = '';
  discount_percentage : string = '';
  quantity : string = '';
  status: string = '';
  type:string='';
  image:string='';
  creation_time:number=0;
  
}
const productSchema = new mongoose.Schema({
  _id: {
    type: String
  },
  creation_time: {
    type: Number
  },

  item_name: {
    type: String,
    required: true,
    
  },

  description: {
    type: String
  },

  creation_date: {
    type: String
  },

  type: {
    type: String
  },

  status: {
    type: String
  },
  item_price: {
    type: String
  },
  discount_price: {
    type: String
  },
  discount_percentage: {
    type: String
  },
  quantity: {
    type: String
  },
  image: {
    type: String
  },
  pack_size :{
    type: String
  }
   
  

});

productSchema.plugin(aggregatePaginate);
export const Product = model('product', productSchema);

module.exports = { Product, productInterface };
