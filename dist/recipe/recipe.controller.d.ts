import { RecipeService } from './recipe.service';
import { RecipeDto } from './recipe.dto';
import { Recipe } from './recipe.schema';
export declare class RecipeController {
    private readonly recipeService;
    constructor(recipeService: RecipeService);
    create(recipeDto: RecipeDto): Promise<Recipe>;
    search(keyword: string): Promise<Recipe[]>;
    findAll(): Promise<Recipe[]>;
    findById(id: string): Promise<Recipe>;
    update(id: string, recipeDto: RecipeDto): Promise<Recipe>;
    delete(id: string): Promise<Recipe>;
}
