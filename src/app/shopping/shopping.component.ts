import { Component, OnInit } from '@angular/core';
import { ShoppingList } from '../core/models/shopping-list';
import {  UserService } from '../core/services/user.service';
import { MatTableDataSource } from '@angular/material';
import { ThrowStmt } from '@angular/compiler';
import { Ingredient } from '../core/models/ingredient';
@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit {

  constructor(private userService: UserService) { }
  public shoppingList : ShoppingList[] = [];
  public periodList : String[] = ["Journalier","Hebdomadaire","mensuel"];
  public typeOfQuantity : String[] = ["","Kilogrammes","Grammes","Litre"];
  public displayedColumns: string[] = ['nameOfTheList', 'reNew', 'periode', 'archive','action'];
  public displayedColumnsByShoppingList: string[] = ['name', 'quantity', 'unités de mesure','action'];
  public dataSource;
  public displayList :Boolean =false;
  public dataSourceByShoppingList;
  public selectedLineIndex=0;
  ngOnInit() {
  this.shoppingList = this.userService.getUser().shoppingList;
 this.shoppingList= this.shoppingList.map(shoppingList =>{
   const add = {
     name: "Ajouté à votre liste"
   }as Ingredient

   if(shoppingList.items){
      shoppingList.items.push(add)
    }else{
      shoppingList.items=[];
      shoppingList.items.push(add)
    }
    return {...shoppingList,'saved':true}
  })
 
  if(this.shoppingList.length===0){
    const newShoppingList = {
      "name":"",
      "reNew":false,
      "periode":"",
      "saved":false
    }
    this.shoppingList.push(newShoppingList)
  }
  this.dataSource = new MatTableDataSource(this.shoppingList)
  }
  public changeIcone(element : ShoppingList){
  
    this.shoppingList.find(x=> x._id===element._id).saved=false
  
    this.dataSource = new MatTableDataSource(this.shoppingList)

  }
  public onClick() {
    const newShoppingList = {
      "name":"",
      "reNew":false,
      "periode":"",
      "archived":false,
      "saved":false,
      "items":[{'name': "Ajouté à votre liste"}]
    }
    console.log("add element")
    this.shoppingList.push(newShoppingList);
    this.dataSource = new MatTableDataSource(this.shoppingList);
  }
  public onClickItems(index : number) {
    const newShoppingList = {
      "name":"",
      "quantity":0,
      "unity":"",
      "saved":false
    } as Ingredient
    if(this.shoppingList[index].items){
      this.shoppingList[index].items.unshift(newShoppingList)
    }else{
      this.shoppingList[index].items=[];
      this.shoppingList[index].items.unshift(newShoppingList)
    }
   
    this.dataSourceByShoppingList = new MatTableDataSource(this.shoppingList[index].items);
  }
  public removeLineItems(ingredient :Ingredient){
    const index = this.shoppingList[this.selectedLineIndex].items.findIndex(x=>x===ingredient)
    this.shoppingList[this.selectedLineIndex].items.splice(index,1)
    this.dataSourceByShoppingList = new MatTableDataSource(this.shoppingList[this.selectedLineIndex].items)
  }
  public delete(shoppingList : ShoppingList) {
    this.shoppingList.splice( this.shoppingList.indexOf(shoppingList),1)
    const user = this.userService.getUser();
    user.shoppingList=this.shoppingList;
    this.userService.update(user).subscribe(res=>{
      const user = this.userService.getUser();
      this.shoppingList =  user.shoppingList
    })
    this.dataSource = new MatTableDataSource(this.shoppingList)
  }
  public save(shoppingList : ShoppingList) {
    const index = this.shoppingList.indexOf(shoppingList)
    this.shoppingList[index].saved=true;
    const user = this.userService.getUser();
    user.shoppingList=this.shoppingList;
    this.userService.update(user).subscribe(res=>{
      this.shoppingList[index].saved=true;
    })
    this.dataSource = new MatTableDataSource(this.shoppingList)
  }
  public showList(shoppingList : ShoppingList) {
    this.displayList=true;
    this.selectedLineIndex = this.shoppingList.findIndex(x=> x===shoppingList)
    this.dataSourceByShoppingList = new MatTableDataSource(shoppingList.items)
  }
}
