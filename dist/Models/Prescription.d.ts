/// <reference types="mongoose-aggregate-paginate-v2" />
import mongoose from 'mongoose';
export declare class prescriptionInterface {
    _id: string;
    contact_name: string;
    contact_email: string;
    contact_phone: string;
    image: string;
    file_name: string;
    creation_time: number;
    creation_date: string;
    status: string;
}
export declare const Prescription: mongoose.AggregatePaginateModel<any>;
