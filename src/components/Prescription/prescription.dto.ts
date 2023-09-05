import {
    IsNotEmpty,
    IsEmail,
    Matches,
    IsString,
    IsOptional,
    IsLowercase,
    IsBoolean,
    IsArray
  } from 'class-validator';

  export class AddPrescriptionDTO{
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
    image:string

    @IsNotEmpty()
    @IsString()
    file_name:string
}

export class GetPrescriptionDTO{
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