import mongoose from 'mongoose';
import { model, Schema, Model, Document } from 'mongoose';
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");

export class prescriptionInterface {
  _id:string='';
  contact_name:string='';
  contact_email:string='';
  contact_phone:string='';
  image:string='';
  file_name:string='';
  creation_time:number=0;
  creation_date:string='';
  status:string =''
}
const prescriptionSchema = new mongoose.Schema({
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

  image:{
    type:String
  },
  file_name:{
    type:String
  },

  status:{
   type:String 
  }
});

prescriptionSchema.plugin(aggregatePaginate);
export const Prescription = model('prescription', prescriptionSchema);

module.exports = { Prescription, prescriptionInterface };
