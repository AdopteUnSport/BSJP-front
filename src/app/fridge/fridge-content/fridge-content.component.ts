import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from 'src/app/core/models/ingredient';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-fridge-content',
  templateUrl: './fridge-content.component.html',
  styleUrls: ['./fridge-content.component.scss']
})
export class FridgeContentComponent  {
  @Input() fridge : Observable<Ingredient[]>;
  displayedColumns: string[] = ['Image', 'Name', 'Quantity', 'Plat réalisable','Delete'];
  constructor() { }

}
