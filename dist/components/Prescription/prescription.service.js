"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrescriptionService = void 0;
const common_1 = require("@nestjs/common");
const PaginationOption_1 = require("../../helperfunction/PaginationOption");
const moment = require("moment");
const Prescription_1 = require("../../Models/Prescription");
let PrescriptionService = exports.PrescriptionService = class PrescriptionService {
    async addPrescription(obj) {
        try {
            let PrescriptionToAdd = {
                _id: obj.contact_email + `_${new Date().getTime()}`,
                contact_name: obj.contact_name ? obj.contact_name?.trim() : '',
                contact_email: obj.contact_email ? obj.contact_email?.trim() : '',
                contact_phone: obj.contact_phone ? obj.contact_phone?.trim() : '',
                image: obj.image ? obj.image?.trim() : '',
                file_name: obj.file_name ? obj.file_name?.trim() : '',
                creation_time: new Date().getTime(),
                creation_date: moment().format('DD-MM-YYYY'),
                status: 'pending',
            };
            let response = await Prescription_1.Prescription.create(PrescriptionToAdd);
            if (response) {
                console.log('Prescription add success  ', PrescriptionToAdd._id, ' ', new Date().toString().slice(0, 24));
                return {
                    status: 200,
                    message: 'Prescription has been Uploaded.',
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
            console.log('Error While Adding Prescription ' + err.message);
            return { status: 500, message: err.message };
        }
    }
    async getAllByPaginate(obj) {
        let query = Prescription_1.Prescription.aggregate();
        let options = (0, PaginationOption_1.paginationOptions)(obj.page_number, obj.page_size, 'creation_time', 'desc');
        if (obj.status == 'all') {
            query = Prescription_1.Prescription.aggregate([{ $match: {} }]);
        }
        else {
            query = Prescription_1.Prescription.aggregate([{ $match: { status: obj.status } }]);
        }
        let allItems = await Prescription_1.Prescription.aggregatePaginate(query, options.options);
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
            const update = await Prescription_1.Prescription.findOneAndUpdate({ _id: obj._id }, { status: obj.status });
            return {
                status: 200,
                message: 'Prescription Status Successfully Updated',
            };
        }
        catch (err) {
            return { status: 500, message: err.message };
        }
    }
};
exports.PrescriptionService = PrescriptionService = __decorate([
    (0, common_1.Injectable)({ scope: common_1.Scope.REQUEST })
], PrescriptionService);
//# sourceMappingURL=prescription.service.js.map