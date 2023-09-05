import {
  Injectable,
  forwardRef,
  Inject,
  Scope,
  UseGuards,
} from '@nestjs/common';
import { REQUEST } from '@nestjs/core';

import { Product, productInterface } from '../../Models/Products';
import {
  AddProductDTO,
  GetProductDTO,
  GetProductPaginateDTO,
  UpdateProductDTO,
  updateStatus,
} from './product.dto';
import { paginationOptions } from 'src/helperfunction/PaginationOption';

@Injectable({ scope: Scope.REQUEST })
export class ProductService {
  async addProduct(obj: AddProductDTO) {
    try {
      let ProductToAdd: productInterface = {
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

      let response = await Product.create(ProductToAdd);

      if (response) {
        console.log(
          'Product add success  ',
          ProductToAdd.item_name,
          ' ',
          new Date().toString().slice(0, 24),
        );

        return {
          status: 200,
          message: 'Product added successfully',
        };
      } else {
        return {
          status: 400,
          message: response['message'],
        };
      }
    } catch (err) {
      console.log('Error While Adding Product ' + err.message);
      return { status: 500, message: err.message };
    }
  }

  async getAll() {
    let allItems = await Product.find({});

    return { status: 200, totalRecords: allItems.length, data: allItems };
  }

  async getAllByType(obj: GetProductDTO) {
    let allItems = await Product.find({ type: obj.type });

    return { status: 200, totalRecords: allItems.length, data: allItems };
  }

  async getAllByTypePaginate(obj: GetProductPaginateDTO) {
    let query = Product.aggregate();

    let options = paginationOptions(
      obj.page_number,
      obj.page_size,
      'creation_time',
      'desc',
    );

    if (obj.start_with && obj.start_with?.trim() != '') {
      query = Product.aggregate([
        {
          $match: {
            item_name: { $regex: new RegExp('^' + obj.start_with, 'i') },
            type: obj.type,
            status: 'active',
          },
        },
      ]);
    } else {
      query = Product.aggregate([
        { $match: { type: obj.type, status: 'active' } },
      ]);
    }

    let allItems = await Product.aggregatePaginate(query, options.options);

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

  async getAllByPaginate(obj: GetProductPaginateDTO) {
    let query = Product.aggregate();

    let options = paginationOptions(
      obj.page_number,
      obj.page_size,
      'creation_time',
      'desc',
    );

    if (obj.status != 'all' && obj.type != 'all') {
      query = Product.aggregate([
        {
          $match: {
            status: obj.status,
            type: obj.type,
          },
        },
      ]);
    } else if (obj.status != 'all') {
      query = Product.aggregate([
        {
          $match: {
            status: obj.status,
          },
        },
      ]);
    } else if (obj.type != 'all') {
      query = Product.aggregate([
        {
          $match: {
            type: obj.type,
          },
        },
      ]);
    } else {
      query = Product.aggregate([{ $match: {} }]);
    }

    let allItems = await Product.aggregatePaginate(query, options.options);

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

  async updateStatus(obj: updateStatus) {
    try {
      const update = await Product.findOneAndUpdate(
        { _id: obj.id },
        { status: obj.status },
      );

      return { status: 200, message: 'Product Status Successfully Updated' };
    } catch (err) {
      return { status: 500, message: err.message };
    }
  }

  async updateProduct(obj: UpdateProductDTO) {
    try {
      await Product.findOneAndUpdate(
        { _id: obj._id },
        {
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
        },
      );

      return {
        status: 200,
        message: 'Product Update successfully',
      };
    } catch (err) {
      console.log('Error While Adding Product ' + err.message);
      return { status: 500, message: err.message };
    }
  }
}
