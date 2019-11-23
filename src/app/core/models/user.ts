import { Ingredient } from './ingredient';
import { ShoppingList } from './shopping-list';

export class User {
    _id : string;
    userName: string;
    email: string;
    fridge: Ingredient[];
    shoppingList: ShoppingList[];
}