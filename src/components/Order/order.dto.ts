

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