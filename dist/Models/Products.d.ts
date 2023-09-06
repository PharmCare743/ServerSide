/// <reference types="mongoose-aggregate-paginate-v2" />
import mongoose from 'mongoose';
export declare class productInterface {
    _id: string;
    item_name: string;
    description: string;
    pack_size: string;
    item_price: string;
    discount_price: string;
    discount_percentage: string;
    quantity: string;
    status: string;
    type: string;
    image: string;
    creation_time: number;
}
export declare const Product: mongoose.AggregatePaginateModel<any>;
