import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserEntitySchema } from './models/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  // eslint-disable-next-line prettier/prettier
  imports: [MongooseModule.forFeature([{ name: 'user', schema: UserEntitySchema }])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
