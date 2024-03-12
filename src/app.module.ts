import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RecipeModule } from './recipe/recipe.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { AvatarModule } from './avatar/avatar.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/recipe'),
    RecipeModule,
UserModule,
AuthModule,
AvatarModule
  ],
})
export class AppModule {}
