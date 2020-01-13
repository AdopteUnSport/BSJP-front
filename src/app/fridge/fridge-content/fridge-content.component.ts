import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from 'src/app/core/models/ingredient';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/core/services/user.service';


@Component({
  selector: 'app-fridge-content',
  templateUrl: './fridge-content.component.html',
  styleUrls: ['./fridge-content.component.scss']
})
export class FridgeContentComponent  {
  @Input() fridge : Ingredient[];
  displayedColumns: string[] = ['Image', 'Name', 'Quantity', 'Plat réalisable','Delete'];
  constructor(private userService:UserService) { }
  public removeLineItems(ingredient :Ingredient){
  
    const index = this.fridge.findIndex(x=>x._id===ingredient._id)
    this.fridge.splice(index,1)
    const user = this.userService.getUser();
    user.fridge=this.fridge;
    this.userService.update(user).subscribe(res =>{
        
    })
  
  }
}
