"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prescription = exports.prescriptionInterface = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = require("mongoose");
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");
class prescriptionInterface {
    constructor() {
        this._id = '';
        this.contact_name = '';
        this.contact_email = '';
        this.contact_phone = '';
        this.image = '';
        this.file_name = '';
        this.creation_time = 0;
        this.creation_date = '';
        this.status = '';
    }
}
exports.prescriptionInterface = prescriptionInterface;
const prescriptionSchema = new mongoose_1.default.Schema({
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
    image: {
        type: String
    },
    file_name: {
        type: String
    },
    status: {
        type: String
    }
});
prescriptionSchema.plugin(aggregatePaginate);
exports.Prescription = (0, mongoose_2.model)('prescription', prescriptionSchema);
module.exports = { Prescription: exports.Prescription, prescriptionInterface };
//# sourceMappingURL=Prescription.js.map