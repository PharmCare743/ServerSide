/// <reference types="mongoose-aggregate-paginate-v2" />
import mongoose from 'mongoose';
export declare class orderInterface {
    _id: string;
    contact_name: string;
    contact_email: string;
    contact_phone: string;
    contact_address: string;
    order_detail: Array<object>;
    creation_time: number;
    creation_date: string;
    status: string;
    total_price: number;
}
export declare const Order: mongoose.AggregatePaginateModel<any>;
