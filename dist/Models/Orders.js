"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = exports.orderInterface = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = require("mongoose");
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");
class orderInterface {
    constructor() {
        this._id = '';
        this.contact_name = '';
        this.contact_email = '';
        this.contact_phone = '';
        this.contact_address = '';
        this.order_detail = [];
        this.creation_time = 0;
        this.creation_date = '';
        this.status = '';
        this.total_price = 0;
    }
}
exports.orderInterface = orderInterface;
const orderSchema = new mongoose_1.default.Schema({
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
    status: {
        type: String
    },
    total_price: {
        type: Number
    }
});
orderSchema.plugin(aggregatePaginate);
exports.Order = (0, mongoose_2.model)('order', orderSchema);
module.exports = { Order: exports.Order, orderInterface };
//# sourceMappingURL=Orders.js.map