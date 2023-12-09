

import {
    IsNotEmpty,
    IsEmail,
    Matches,
    IsString,
    IsOptional,
    IsLowercase,
    IsBoolean,
    IsArray,
    IsNumber
  } from 'class-validator';

export class AddOrderDTO{
    @IsNotEmpty()
    @IsEmail()
    contact_email:string


    @IsNotEmpty()
    @IsString()
    contact_name:string

    @IsNotEmpty()
    @IsString()
    contact_phone:string

    @IsNotEmpty()
    @IsString()
    contact_address:string

    @IsNotEmpty()
    @IsArray()
    order_detail:Array<object>


    @IsNotEmpty()
    @IsNumber()
    total_price:number
}

export class GetOrderDTO{
  @IsOptional()
  @IsString()
  status:string

  @IsOptional()
  @IsString()
  page_number:string


  @IsOptional()
  @IsString()
  page_size:string

}

export class UpdateStatus{
  @IsNotEmpty()
  @IsString()
  _id:string


  @IsNotEmpty()
  @IsString()
  status:string


}