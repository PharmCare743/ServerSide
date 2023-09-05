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
  Put,
} from '@nestjs/common';
import { PrescriptionService } from './prescription.service';
import { AddPrescriptionDTO, GetPrescriptionDTO, UpdateStatus } from './prescription.dto';

@Controller('prescription')
export class PrescriptionController {
  constructor(private readonly prescriptionService: PrescriptionService) {}

  @Post('/')
  async add(@Body() obj: AddPrescriptionDTO, @Response() res, @Request() req) {
    const response = await this.prescriptionService.addPrescription(obj);
    return res.status(HttpStatus.OK).json({
      ...response,
    });
  }

  @Put('/update-status')
  async updateStatus(@Body() obj:UpdateStatus, @Response() res, @Request() req) {
   
      const response = await this.prescriptionService.updateStatus(obj);
      return res.status(HttpStatus.OK).json({
        ...response
      });
    
  }

  @Get('/by-paginate')
  async getAllPrescriptionByPaginate(@Query() obj:GetPrescriptionDTO, @Response() res, @Request() req) {
   
      const response = await this.prescriptionService.getAllByPaginate(obj);
      return res.status(HttpStatus.OK).json({
        ...response
      });
    
  }

}
