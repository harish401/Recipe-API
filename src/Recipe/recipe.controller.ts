import { Controller, Get, Post, Put, Delete, Param, Body, Query } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { RecipeDto } from './recipe.dto';
import { Recipe } from './recipe.schema';

@Controller('recipes')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}

  @Post()
  create(@Body() recipeDto: RecipeDto): Promise<Recipe> {
    return this.recipeService.create(recipeDto);
  }
  
  @Get('search')
  search(@Query('keyword') keyword: string): Promise<Recipe[]> {
    return this.recipeService.search(keyword);
  }
  @Get()
  findAll(): Promise<Recipe[]> {
    return this.recipeService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string): Promise<Recipe> {
    return this.recipeService.findById(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() recipeDto: RecipeDto): Promise<Recipe> {
    return this.recipeService.update(id, recipeDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<Recipe> {
    return this.recipeService.delete(id);
  }
}
