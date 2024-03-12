import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'users-collection' })
export class User {
  @Prop() id?: number;
  @Prop({ required: true }) firstName: string;
  @Prop({ required: true }) lastName: string;
  @Prop({ unique: true, required: true }) email: string;
  @Prop({ required: true }) password: string;
  @Prop() avatar: string; // New property to store avatar filename
}

export const UserEntitySchema = SchemaFactory.createForClass(User);
