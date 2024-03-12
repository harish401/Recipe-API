/* eslint-disable prettier/prettier */

import { IsEmail, IsNotEmpty } from "class-validator";

//for validation dto is used here
export class RegisterDto {
@IsNotEmpty({ message: 'firstName must not be null' })
  firstName: string;
  @IsNotEmpty({ message: 'lastName must not be null' })
  lastName: string;
  @IsNotEmpty({ message: 'email must not be null' })
  @IsEmail()
  email: string;
  @IsNotEmpty({ message: 'password must not be null' })
  password: string;
  @IsNotEmpty({ message: 'passwordConfirm must not be null' })
  passwordConfirm: string;
}
