"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const recipe_schema_1 = require("./recipe.schema");
let RecipeService = class RecipeService {
    constructor(recipeModel) {
        this.recipeModel = recipeModel;
    }
    async create(recipeDto) {
        const createdRecipe = new this.recipeModel({
            ...recipeDto,
            userId: recipeDto.userId,
        });
        return createdRecipe.save();
    }
    async search(keyword) {
        const regex = new RegExp(keyword, 'i');
        return this.recipeModel.find({
            $or: [
                { title: { $regex: regex } },
                { directions: { $regex: regex } },
                { ingredients: { $regex: regex } },
            ],
        }).exec();
    }
    async findAll() {
        return this.recipeModel.find().exec();
    }
    async findById(id) {
        return this.recipeModel.findById(id).exec();
    }
    async update(id, recipeDto) {
        return this.recipeModel.findByIdAndUpdate(id, recipeDto, { new: true });
    }
    async delete(id) {
        return this.recipeModel.findByIdAndDelete(id);
    }
};
exports.RecipeService = RecipeService;
exports.RecipeService = RecipeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(recipe_schema_1.Recipe.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], RecipeService);
//# sourceMappingURL=recipe.service.js.map