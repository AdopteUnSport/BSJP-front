import { Ingredient } from './ingredient';

export class Recipe {
    _id: string;
    title: string;
    ingredients: Array<Ingredient>;
}