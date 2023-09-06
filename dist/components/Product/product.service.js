"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const Products_1 = require("../../Models/Products");
const PaginationOption_1 = require("../../helperfunction/PaginationOption");
let ProductService = exports.ProductService = class ProductService {
    async addProduct(obj) {
        try {
            let ProductToAdd = {
                item_name: obj.item_name ? obj.item_name?.trim() : '',
                description: obj.description ? obj.description?.trim() : '',
                pack_size: obj.pack_size ? obj.pack_size?.trim() : '',
                item_price: obj.item_price ? obj.item_price?.trim() : '',
                discount_price: obj.discount_price ? obj.discount_price?.trim() : '',
                discount_percentage: obj.discount_percentage
                    ? obj.discount_percentage?.trim()
                    : '',
                quantity: obj.quantity ? obj.quantity?.trim() : '',
                status: obj.status ? obj.status : 'active',
                type: obj.type ? obj.type?.trim() : '',
                image: obj.image ? obj.image : '',
                creation_time: new Date().getTime(),
                _id: `${obj.type}_${new Date().getTime()}`,
            };
            let response = await Products_1.Product.create(ProductToAdd);
            if (response) {
                console.log('Product add success  ', ProductToAdd.item_name, ' ', new Date().toString().slice(0, 24));
                return {
                    status: 200,
                    message: 'Product added successfully',
                };
            }
            else {
                return {
                    status: 400,
                    message: response['message'],
                };
            }
        }
        catch (err) {
            console.log('Error While Adding Product ' + err.message);
            return { status: 500, message: err.message };
        }
    }
    async getAll() {
        let allItems = await Products_1.Product.find({});
        return { status: 200, totalRecords: allItems.length, data: allItems };
    }
    async getAllByType(obj) {
        let allItems = await Products_1.Product.find({ type: obj.type });
        return { status: 200, totalRecords: allItems.length, data: allItems };
    }
    async getAllByTypePaginate(obj) {
        let query = Products_1.Product.aggregate();
        let options = (0, PaginationOption_1.paginationOptions)(obj.page_number, obj.page_size, 'creation_time', 'desc');
        if (obj.start_with && obj.start_with?.trim() != '') {
            query = Products_1.Product.aggregate([
                {
                    $match: {
                        item_name: { $regex: new RegExp('^' + obj.start_with, 'i') },
                        type: obj.type,
                        status: 'active',
                    },
                },
            ]);
        }
        else {
            query = Products_1.Product.aggregate([
                { $match: { type: obj.type, status: 'active' } },
            ]);
        }
        let allItems = await Products_1.Product.aggregatePaginate(query, options.options);
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
    async getAllByPaginate(obj) {
        let query = Products_1.Product.aggregate();
        let options = (0, PaginationOption_1.paginationOptions)(obj.page_number, obj.page_size, 'creation_time', 'desc');
        if (obj.status != 'all' && obj.type != 'all') {
            query = Products_1.Product.aggregate([
                {
                    $match: {
                        status: obj.status,
                        type: obj.type,
                    },
                },
            ]);
        }
        else if (obj.status != 'all') {
            query = Products_1.Product.aggregate([
                {
                    $match: {
                        status: obj.status,
                    },
                },
            ]);
        }
        else if (obj.type != 'all') {
            query = Products_1.Product.aggregate([
                {
                    $match: {
                        type: obj.type,
                    },
                },
            ]);
        }
        else {
            query = Products_1.Product.aggregate([{ $match: {} }]);
        }
        let allItems = await Products_1.Product.aggregatePaginate(query, options.options);
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
            const update = await Products_1.Product.findOneAndUpdate({ _id: obj.id }, { status: obj.status });
            return { status: 200, message: 'Product Status Successfully Updated' };
        }
        catch (err) {
            return { status: 500, message: err.message };
        }
    }
    async updateProduct(obj) {
        try {
            await Products_1.Product.findOneAndUpdate({ _id: obj._id }, {
                item_name: obj.item_name ? obj.item_name?.trim() : '',
                description: obj.description ? obj.description?.trim() : '',
                pack_size: obj.pack_size ? obj.pack_size?.trim() : '',
                item_price: obj.item_price ? obj.item_price?.trim() : '',
                discount_price: obj.discount_price ? obj.discount_price?.trim() : '',
                discount_percentage: obj.discount_percentage
                    ? obj.discount_percentage?.trim()
                    : '',
                quantity: obj.quantity ? obj.quantity?.trim() : '',
                status: obj.status ? obj.status : '',
                type: obj.type ? obj.type?.trim() : '',
                image: obj.image ? obj.image : '',
            });
            return {
                status: 200,
                message: 'Product Update successfully',
            };
        }
        catch (err) {
            console.log('Error While Adding Product ' + err.message);
            return { status: 500, message: err.message };
        }
    }
};
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)({ scope: common_1.Scope.REQUEST })
], ProductService);
//# sourceMappingURL=product.service.js.map