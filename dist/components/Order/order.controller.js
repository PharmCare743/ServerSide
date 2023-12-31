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
exports.OrderController = void 0;
const common_1 = require("@nestjs/common");
const order_service_1 = require("./order.service");
const order_dto_1 = require("./order.dto");
let OrderController = exports.OrderController = class OrderController {
    constructor(orderService) {
        this.orderService = orderService;
    }
    async add(obj, res, req) {
        const response = await this.orderService.addOrder(obj);
        return res.status(common_1.HttpStatus.OK).json({
            ...response
        });
    }
    async updateStatus(obj, res, req) {
        const response = await this.orderService.updateStatus(obj);
        return res.status(common_1.HttpStatus.OK).json({
            ...response
        });
    }
    async getAllPrescriptionByPaginate(obj, res, req) {
        const response = await this.orderService.getAllByPaginate(obj);
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
    __metadata("design:paramtypes", [order_dto_1.AddOrderDTO, Object, Object]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "add", null);
__decorate([
    (0, common_1.Put)('/update-status'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Response)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [order_dto_1.UpdateStatus, Object, Object]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "updateStatus", null);
__decorate([
    (0, common_1.Get)('/by-paginate'),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Response)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [order_dto_1.GetOrderDTO, Object, Object]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "getAllPrescriptionByPaginate", null);
exports.OrderController = OrderController = __decorate([
    (0, common_1.Controller)('order'),
    __metadata("design:paramtypes", [order_service_1.OrderService])
], OrderController);
//# sourceMappingURL=order.controller.js.map