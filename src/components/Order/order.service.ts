import {
    Injectable,
    forwardRef,
    Inject,
    Scope,
    UseGuards
  } from '@nestjs/common';
  import { REQUEST } from '@nestjs/core';
import { paginationOptions } from 'src/helperfunction/PaginationOption';
import { AddOrderDTO } from './order.dto';
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
    



}

