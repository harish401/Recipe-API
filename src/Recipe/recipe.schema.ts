import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Recipe extends Document {
    @Prop({ type: Schema, ref: 'User' }) // Reference to User entity
  userId: string;
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  directions: string[];

  @Prop({ required: true })
  ingredients: string[];

  @Prop({ required: true })
  language: string;

  @Prop({ required: true })
  source: string;

  @Prop({ default: [] })
  tags: string[];

  @Prop({ required: true })
  url: string;

}

export const RecipeSchema = SchemaFactory.createForClass(Recipe);
