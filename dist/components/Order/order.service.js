"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const PaginationOption_1 = require("../../helperfunction/PaginationOption");
const Orders_1 = require("../../Models/Orders");
const moment = require("moment");
let OrderService = exports.OrderService = class OrderService {
    async addOrder(obj) {
        try {
            let OrderToAdd = {
                _id: `${obj.contact_email}_${new Date().getTime()}`,
                contact_name: obj.contact_name ? obj.contact_name?.trim() : '',
                contact_email: obj.contact_email ? obj.contact_email?.trim() : '',
                contact_phone: obj.contact_phone ? obj.contact_phone?.trim() : '',
                contact_address: obj.contact_address ? obj.contact_address?.trim() : '',
                order_detail: obj.order_detail ? obj.order_detail : [],
                creation_time: new Date().getTime(),
                creation_date: moment().format('DD-MM-YYYY'),
                status: 'pending',
                total_price: obj.total_price ? obj.total_price : 0
            };
            let response = await Orders_1.Order.create(OrderToAdd);
            if (response) {
                console.log('Order add success  ', OrderToAdd._id, ' ', new Date().toString().slice(0, 24));
                return {
                    status: 200,
                    message: 'Order has been placed successfully',
                };
            }
            else {
                return {
                    status: 400,
                    message: response['message']
                };
            }
        }
        catch (err) {
            console.log("Error While Adding Order " + err.message);
            return { status: 500, message: err.message };
        }
    }
    async getAllByPaginate(obj) {
        let query = Orders_1.Order.aggregate();
        let options = (0, PaginationOption_1.paginationOptions)(obj.page_number, obj.page_size, 'creation_time', 'desc');
        if (obj.status == 'all') {
            query = Orders_1.Order.aggregate([{ $match: {} }]);
        }
        else {
            query = Orders_1.Order.aggregate([{ $match: { status: obj.status } }]);
        }
        let allItems = await Orders_1.Order.aggregatePaginate(query, options.options);
        if (allItems.docs.length > 0) {
            return {
                status: 200,
                totalRecords: allItems.totalDocs,
                data: allItems.docs,
                totalPages: allItems.totalPages,
            };
        }
        else {
            return {
                status: 404,
                totalRecords: 0,
                data: [],
                totalPages: 0,
                message: 'Record Not Found',
            };
        }
    }
    async updateStatus(obj) {
        try {
            const update = await Orders_1.Order.findOneAndUpdate({ _id: obj._id }, { status: obj.status });
            return {
                status: 200,
                message: 'Order Status Successfully Updated',
            };
        }
        catch (err) {
            return { status: 500, message: err.message };
        }
    }
};
exports.OrderService = OrderService = __decorate([
    (0, common_1.Injectable)({ scope: common_1.Scope.REQUEST })
], OrderService);
//# sourceMappingURL=order.service.js.map