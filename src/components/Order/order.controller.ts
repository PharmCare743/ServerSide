import {
    Body,
    Controller,
    Post,
    Response,
    Request,
    HttpStatus,
    Get,
    UseGuards,
    Query,
    Param,
    Put
  } from '@nestjs/common';

  import { OrderService } from './order.service';
import { AddOrderDTO, GetOrderDTO, UpdateStatus } from './order.dto';
  @Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}


  @Post('/')
  async add(@Body() obj: AddOrderDTO, @Response() res, @Request() req) {
    
      const response = await this.orderService.addOrder(obj);
      return res.status(HttpStatus.OK).json({
        ...response
      });
    
  }
  @Put('/update-status')
  async updateStatus(@Body() obj:UpdateStatus, @Response() res, @Request() req) {
   
      const response = await this.orderService.updateStatus(obj);
      return res.status(HttpStatus.OK).json({
        ...response
      });
    
  }

  @Get('/by-paginate')
  async getAllPrescriptionByPaginate(@Query() obj:GetOrderDTO, @Response() res, @Request() req) {
   
      const response = await this.orderService.getAllByPaginate(obj);
      return res.status(HttpStatus.OK).json({
        ...response
      });
    
  }

}