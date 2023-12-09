import {
    Injectable,
    forwardRef,
    Inject,
    Scope,
    UseGuards
  } from '@nestjs/common';
  import { REQUEST } from '@nestjs/core';
import { paginationOptions } from 'src/helperfunction/PaginationOption';
import { AddOrderDTO, GetOrderDTO,UpdateStatus  } from './order.dto';
import { Order, orderInterface } from 'src/Models/Orders';
import * as moment from 'moment';

@Injectable({ scope: Scope.REQUEST })
export class OrderService {

    async addOrder(obj: AddOrderDTO) {
        try {
          
            let OrderToAdd:orderInterface = {
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
    
           
            let response = await Order.create(OrderToAdd);
    
            if(response){
              console.log(
                'Order add success  ',
                OrderToAdd._id,
                ' ',
                new Date().toString().slice(0, 24),
                
              );
             
              return {
                status: 200,
                message: 'Order has been placed successfully',
                
              };
            }
            else{
             return{
              status:400,
              message: response['message']
             }
            }
            
          }
         catch (err) {
         console.log("Error While Adding Order "+ err.message)
          return{status:500, message:err.message}
        }
      }


      async getAllByPaginate(obj: GetOrderDTO) {
        let query = Order.aggregate();
    
        let options = paginationOptions(
          obj.page_number,
          obj.page_size,
          'creation_time',
          'desc',
        );
        if (obj.status == 'all') {
          query = Order.aggregate([{ $match: {} }]);
        } else {
          query = Order.aggregate([{ $match: { status: obj.status } }]);
        }
    
        let allItems = await Order.aggregatePaginate(query, options.options);
    
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
          const update = await Order.findOneAndUpdate(
            { _id: obj._id },
            { status: obj.status },
          );
    
          return {
            status: 200,
            message: 'Order Status Successfully Updated',
          };
        } catch (err) {
          return { status: 500, message: err.message };
        }
      }
    



}

