import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Recipe } from 'src/app/core/recipe';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  recipes : Array<Recipe>;

  private load() {
<<<<<<< HEAD
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin':  '*',
        'Content-Type': 'application/json'
      })
    };


    /*const httpOptions = {
      headers: new HttpHeaders()
      .set('Access-Control-Allow-Origin', '*')
      .set('Content-Type', 'application/json')
    };*/

=======
    const httpOptions ={
      headers : new HttpHeaders({
        "Content-type":"application/json"
     
    }) 
    };

    console.log(JSON.stringify(httpOptions));
>>>>>>> 896d1fbdf9cbc8b8c27ec90305b3a0981aa71824
    this.http.get<Array<Recipe>>("http://51.83.70.42:3000/recipe/", httpOptions).subscribe(response => {
      this.recipes = response;
      console.log(this.recipes);
    })

  }

  constructor(
    private http : HttpClient,
  ) { }

  ngOnInit() {
    this.recipes = new Array<Recipe>();
    this.load();
  }

}
