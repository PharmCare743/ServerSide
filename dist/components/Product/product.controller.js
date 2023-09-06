"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const product_service_1 = require("./product.service");
const product_dto_1 = require("./product.dto");
let ProductController = exports.ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    async add(obj, res, req) {
        const response = await this.productService.addProduct(obj);
        return res.status(common_1.HttpStatus.OK).json({
            ...response
        });
    }
    async getAllProduct(obj, res, req) {
        const response = await this.productService.getAll();
        return res.status(common_1.HttpStatus.OK).json({
            ...response
        });
    }
    async getAllProductByType(obj, res, req) {
        const response = await this.productService.getAllByType(obj);
        return res.status(common_1.HttpStatus.OK).json({
            ...response
        });
    }
    async getAllProductByTypePaginate(obj, res, req) {
        const response = await this.productService.getAllByTypePaginate(obj);
        return res.status(common_1.HttpStatus.OK).json({
            ...response
        });
    }
    async getAllProductByPaginate(obj, res, req) {
        const response = await this.productService.getAllByPaginate(obj);
        return res.status(common_1.HttpStatus.OK).json({
            ...response
        });
    }
    async updateStatus(obj, res, req) {
        const response = await this.productService.updateStatus(obj);
        return res.status(common_1.HttpStatus.OK).json({
            ...response
        });
    }
    async updateProduct(obj, res, req) {
        const response = await this.productService.updateProduct(obj);
        return res.status(common_1.HttpStatus.OK).json({
            ...response
        });
    }
};
__decorate([
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Response)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_dto_1.AddProductDTO, Object, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "add", null);
__decorate([
    (0, common_1.Get)('/'),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Response)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getAllProduct", null);
__decorate([
    (0, common_1.Get)('/by-type'),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Response)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_dto_1.GetProductDTO, Object, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getAllProductByType", null);
__decorate([
    (0, common_1.Get)('/by-type-paginate'),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Response)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_dto_1.GetProductPaginateDTO, Object, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getAllProductByTypePaginate", null);
__decorate([
    (0, common_1.Get)('/by-paginate'),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Response)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_dto_1.GetProductPaginateDTO, Object, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getAllProductByPaginate", null);
__decorate([
    (0, common_1.Put)('/update-status'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Response)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_dto_1.updateStatus, Object, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "updateStatus", null);
__decorate([
    (0, common_1.Put)('/update'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Response)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_dto_1.UpdateProductDTO, Object, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "updateProduct", null);
exports.ProductController = ProductController = __decorate([
    (0, common_1.Controller)('product'),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductController);
//# sourceMappingURL=product.controller.js.map