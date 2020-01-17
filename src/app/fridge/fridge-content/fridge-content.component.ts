import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from 'src/app/core/models/ingredient';

import { UserService } from 'src/app/core/services/user.service';
import { MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-fridge-content',
  templateUrl: './fridge-content.component.html',
  styleUrls: ['./fridge-content.component.scss']
})
export class FridgeContentComponent implements OnInit{
  @Input() fridge : Ingredient[]
  public datasource;
  displayedColumns: string[] = ['Image', 'Name', 'Quantity','Unity', 'Plat réalisable','Delete'];
  public typeOfQuantity : String[] = ["","Kilogrammes","Grammes","Litre"];
  constructor(private userService:UserService) { }
  ngOnInit(){
    console.log("test"+JSON.stringify(this.fridge))
    this.datasource = new MatTableDataSource(this.fridge)
  }
  public removeLineItems(ingredient :Ingredient){
    const index = this.fridge.findIndex(x=>x._id===ingredient._id)
    this.fridge.splice(index,1)

      const indexToRemoveAlways = this.fridge.findIndex(x=>x.name==="Ajouté à votre liste")
      if(indexToRemoveAlways!==-1){
        this.fridge.splice(indexToRemoveAlways,1)
      }
    const user = this.userService.getUser();
    user.fridge=this.fridge;
    this.userService.update(user).subscribe(res =>{
      const add = {
        name: "Ajouté à votre liste"
      }as Ingredient
      this.fridge.push(add)
      this.datasource = new MatTableDataSource(user.fridge)
    })
  }
  public onClickItems() {
    const newShoppingList = {
      "name":"new",
      "quantity":0,
      "unity":""
    } as Ingredient
    if(this.fridge){
      const indexToRemoveAlways = this.fridge.findIndex(x=>x.name==="Ajouté à votre liste")
      if(indexToRemoveAlways!==-1){
        this.fridge.splice(indexToRemoveAlways,1)
      }
      this.fridge.push(newShoppingList)
   
     
    }else{
      this.fridge=[];
      this.fridge.push(newShoppingList)
    }
    const add = {
      name: "Ajouté à votre liste"
    }as Ingredient
    this.fridge.push(add)
    this.datasource = new MatTableDataSource(this.fridge);
  }
}
