
import {
    IsNotEmpty,
    IsEmail,
    Matches,
    IsString,
    IsOptional,
    IsLowercase,
    IsBoolean,
    
  } from 'class-validator';
  
export class AddProductDTO{
    @IsOptional()
    @IsString()
    item_name:string;

    @IsOptional()
    @IsString()
    description:string;

    @IsOptional()
    @IsString()
    pack_size:string;

    @IsOptional()
    @IsString()
    item_price:string;

    @IsOptional()
    @IsString()
    discount_price:string;

    @IsOptional()
    @IsString()
    discount_percentage:string;

    @IsOptional()
    @IsString()
    quantity:string;

    @IsOptional()
    @IsString()
    status:string;

    @IsOptional()
    @IsString()
    type:string;

    @IsOptional()
    @IsString()
    image:string;


}
export class UpdateProductDTO{
    @IsOptional()
    @IsString()
    item_name:string;

    @IsOptional()
    @IsString()
    _id:string;

    @IsOptional()
    @IsString()
    description:string;

    @IsOptional()
    @IsString()
    pack_size:string;

    @IsOptional()
    @IsString()
    item_price:string;

    @IsOptional()
    @IsString()
    discount_price:string;

    @IsOptional()
    @IsString()
    discount_percentage:string;

    @IsOptional()
    @IsString()
    quantity:string;

    @IsOptional()
    @IsString()
    status:string;

    @IsOptional()
    @IsString()
    type:string;

    @IsOptional()
    @IsString()
    image:string;


}


export class GetProductDTO{
    @IsNotEmpty()
    @IsString()
    type:string
}

export class GetProductPaginateDTO{
    @IsOptional()
    @IsString()
    type:string


    @IsOptional()
    @IsString()
    page_number:string


    @IsOptional()
    @IsString()
    page_size:string


    @IsOptional()
    @IsString()
    start_with:string

    @IsOptional()
    @IsString()
    status:string
}
export class updateStatus{
    @IsNotEmpty()
    @IsString()
    id:string


    @IsNotEmpty()
    @IsString()
    status:string

}