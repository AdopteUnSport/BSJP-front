import { ICategory } from './category';

export class Ingredient {
    _id?: string;
    category?: ICategory;
    name: string;
    quantity?: number;
    tags?: Array<string>;
    image?:string;
    saved?: boolean;
}