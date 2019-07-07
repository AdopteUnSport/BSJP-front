import { Ingredient } from './ingredient';

export class ShoppingListItem {
    id: number;
    ingredient: Ingredient;
    quantity: number;
    added: boolean;
    idList : number;
}