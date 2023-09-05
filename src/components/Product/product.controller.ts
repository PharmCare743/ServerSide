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
  import { ProductService } from './product.service';
import { AddProductDTO, GetProductDTO, GetProductPaginateDTO, UpdateProductDTO, updateStatus } from './product.dto';

  @Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('/')
  async add(@Body() obj: AddProductDTO, @Response() res, @Request() req) {
    
      const response = await this.productService.addProduct(obj);
      return res.status(HttpStatus.OK).json({
        ...response
      });
    
  }


 @Get('/')
  async getAllProduct(@Query() obj, @Response() res, @Request() req) {
   
      const response = await this.productService.getAll();
      return res.status(HttpStatus.OK).json({
        ...response
      });
    
  }


  @Get('/by-type')
  async getAllProductByType(@Query() obj:GetProductDTO, @Response() res, @Request() req) {
   
      const response = await this.productService.getAllByType(obj);
      return res.status(HttpStatus.OK).json({
        ...response
      });
    
  }


  @Get('/by-type-paginate')
  async getAllProductByTypePaginate(@Query() obj:GetProductPaginateDTO, @Response() res, @Request() req) {
   
      const response = await this.productService.getAllByTypePaginate(obj);
      return res.status(HttpStatus.OK).json({
        ...response
      });
    
  }

  @Get('/by-paginate')
  async getAllProductByPaginate(@Query() obj:GetProductPaginateDTO, @Response() res, @Request() req) {
   
      const response = await this.productService.getAllByPaginate(obj);
      return res.status(HttpStatus.OK).json({
        ...response
      });
    
  }

  @Put('/update-status')
  async updateStatus(@Body() obj:updateStatus, @Response() res, @Request() req) {
   
      const response = await this.productService.updateStatus(obj);
      return res.status(HttpStatus.OK).json({
        ...response
      });
    
  }

  @Put('/update')
  async updateProduct(@Body() obj:UpdateProductDTO, @Response() res, @Request() req) {
   
      const response = await this.productService.updateProduct(obj);
      return res.status(HttpStatus.OK).json({
        ...response
      });
    
  }


}


