import mongoose from 'mongoose';
import { model, Schema, Model, Document } from 'mongoose';
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");

export class orderInterface {
  _id:string='';
  contact_name:string='';
  contact_email:string='';
  contact_phone:string='';
  contact_address:string='';
  order_detail:Array<object>=[];
  creation_time:number=0;
  creation_date:string='';
  status:string ='';
  total_price:number = 0;
}
const orderSchema = new mongoose.Schema({
  _id: {
    type: String
  },
  creation_time: {
    type: Number
  },

  contact_name: {
    type: String,
    required: true,
    
  },

  contact_email: {
    type: String
  },

  creation_date: {
    type: String
  },

  contact_phone: {
    type: String
  },

  contact_address: {
    type: String
  },
  order_detail: {
    type: Array
  },
  status:{
   type:String 
  },
  total_price:{
    type:Number
  }
});

orderSchema.plugin(aggregatePaginate);
export const Order = model('order', orderSchema);

module.exports = { Order, orderInterface };
