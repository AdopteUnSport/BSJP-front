import { Injectable, HostListener } from '@angular/core';
import { Component, OnInit,  } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Recipe } from 'src/app/core/models/recipe';
import { ResponsiveService } from 'src/app/services/responsive.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  recipes : Array<Recipe>;

  cols: number;

  private load() {
    this.http.get<Array<Recipe>>("/api/recipe/").subscribe(response => {
      console.log(response);
      this.recipes = response;
    })

  }

  constructor(
    private http : HttpClient,
    private responsive : ResponsiveService,
  ) { }

  ngOnInit() {
    this.cols = this.responsive.getNbCols();
    this.recipes = new Array<Recipe>();
    this.load();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.cols = this.responsive.getNbCols();
  }

}
