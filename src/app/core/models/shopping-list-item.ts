import { Ingredient } from './ingredient';

export class ShoppingListItem {
    _id: number;
    ingredient: Ingredient;
    quantity: number;
    added: boolean;
    idList : number;
}