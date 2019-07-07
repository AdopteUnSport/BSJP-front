import { Ingredient } from './ingredient';

export class Recipe {
    id: number;
    title: string;
    ingredients: Array<Ingredient>;
}