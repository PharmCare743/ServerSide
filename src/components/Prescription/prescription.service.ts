import {
  Injectable,
  forwardRef,
  Inject,
  Scope,
  UseGuards,
} from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { paginationOptions } from 'src/helperfunction/PaginationOption';
import * as moment from 'moment';
import {
  AddPrescriptionDTO,
  GetPrescriptionDTO,
  UpdateStatus,
} from './prescription.dto';
import { Prescription, prescriptionInterface } from 'src/Models/Prescription';

@Injectable({ scope: Scope.REQUEST })
export class PrescriptionService {
  async addPrescription(obj: AddPrescriptionDTO) {
    try {
      let PrescriptionToAdd: prescriptionInterface = {
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

      let response = await Prescription.create(PrescriptionToAdd);

      if (response) {
        console.log(
          'Prescription add success  ',
          PrescriptionToAdd._id,
          ' ',
          new Date().toString().slice(0, 24),
        );

        return {
          status: 200,
          message: 'Prescription has been Uploaded.',
        };
      } else {
        return {
          status: 400,
          message: response['message'],
        };
      }
    } catch (err) {
      console.log('Error While Adding Prescription ' + err.message);
      return { status: 500, message: err.message };
    }
  }

  async getAllByPaginate(obj: GetPrescriptionDTO) {
    let query = Prescription.aggregate();

    let options = paginationOptions(
      obj.page_number,
      obj.page_size,
      'creation_time',
      'desc',
    );
    if (obj.status == 'all') {
      query = Prescription.aggregate([{ $match: {} }]);
    } else {
      query = Prescription.aggregate([{ $match: { status: obj.status } }]);
    }

    let allItems = await Prescription.aggregatePaginate(query, options.options);

    if (allItems.docs.length > 0) {
      return {
        status: 200,
        totalRecords: allItems.totalDocs,
        data: allItems.docs,
        totalPages: allItems.totalPages,
      };
    } else {
      return {
        status: 404,
        totalRecords: 0,
        data: [],
        totalPages: 0,
        message: 'Record Not Found',
      };
    }
  }

  async updateStatus(obj: UpdateStatus) {
    try {
      const update = await Prescription.findOneAndUpdate(
        { _id: obj._id },
        { status: obj.status },
      );

      return {
        status: 200,
        message: 'Prescription Status Successfully Updated',
      };
    } catch (err) {
      return { status: 500, message: err.message };
    }
  }
}
