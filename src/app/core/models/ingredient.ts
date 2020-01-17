import { ICategory } from './category';

export class Ingredient {
    _id?: string;
    category?: ICategory;
    name: string;
    quantity?: number;
    unity?:string;
    tags?: Array<string>;
    image?:string;
    saved?: boolean;
}