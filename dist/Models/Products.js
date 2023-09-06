"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = exports.productInterface = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = require("mongoose");
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");
class productInterface {
    constructor() {
        this._id = '';
        this.item_name = '';
        this.description = '';
        this.pack_size = '';
        this.item_price = '';
        this.discount_price = '';
        this.discount_percentage = '';
        this.quantity = '';
        this.status = '';
        this.type = '';
        this.image = '';
        this.creation_time = 0;
    }
}
exports.productInterface = productInterface;
const productSchema = new mongoose_1.default.Schema({
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
    pack_size: {
        type: String
    }
});
productSchema.plugin(aggregatePaginate);
exports.Product = (0, mongoose_2.model)('product', productSchema);
module.exports = { Product: exports.Product, productInterface };
//# sourceMappingURL=Products.js.map