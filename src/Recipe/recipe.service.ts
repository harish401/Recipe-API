import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Recipe } from './recipe.schema';
import { RecipeDto } from './recipe.dto';

@Injectable()
export class RecipeService {
    constructor(@InjectModel(Recipe.name) private recipeModel: Model<Recipe>) {}

//   async create(recipeDto: RecipeDto): Promise<Recipe> {
//     const createdRecipe = new this.recipeModel(recipeDto);
//     return createdRecipe.save();
//   }
async create(recipeDto: RecipeDto): Promise<Recipe> {
    const createdRecipe = new this.recipeModel({
      ...recipeDto,
      userId: recipeDto.userId, // Set the userId when creating the recipe
    });
    return createdRecipe.save();
  }
  async search(keyword: string): Promise<Recipe[]> {
    const regex = new RegExp(keyword, 'i'); // Case-insensitive regex pattern
    return this.recipeModel.find({
      $or: [
        { title: { $regex: regex } },
        { directions: { $regex: regex } },
        { ingredients: { $regex: regex } },
      ],
    }).exec();
  }
  
  async findAll(): Promise<Recipe[]> {
    return this.recipeModel.find().exec();
  }

  async findById(id: string): Promise<Recipe> {
    return this.recipeModel.findById(id).exec();
  }

  async update(id: string, recipeDto: RecipeDto): Promise<Recipe> {
    return this.recipeModel.findByIdAndUpdate(id, recipeDto, { new: true });
  }

  async delete(id: string): Promise<Recipe> {
    return this.recipeModel.findByIdAndDelete(id);
  }
}
