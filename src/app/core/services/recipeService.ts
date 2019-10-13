import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable, Subject } from 'rxjs';
import { User } from 'src/app/core/models/user';
import { Router} from '@angular/router';
import { Recipe } from '../models/recipe';
import { Ingredient } from '../models/ingredient';

export interface RecipeServiceInterface {

  getRecipeByIngredient(id:string): Observable<[Recipe]>
}


@Injectable({
  providedIn: 'root'
})
export class RecipeService implements RecipeServiceInterface{
    public getRecipeByIngredient(id:string): Observable<[Recipe]> {
        const result = new Subject<[Recipe]>();
        this.http.get<[Recipe]>('/api/user/'+id).subscribe(response => {
            result.next(response);
          }, error => {
            result.error(error);
          });
        return result.asObservable()
    }




  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }
}
