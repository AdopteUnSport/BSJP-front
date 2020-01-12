
import { Ingredient } from './ingredient';

export class ShoppingList {
    _id?: string;
    name? : string;
    archived? : Boolean
    shoppingList? : Array<Ingredient>;
    reNew?:Boolean;
    periode? : string; 
    saved? : Boolean
}