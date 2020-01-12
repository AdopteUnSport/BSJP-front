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
  this.shoppingList = this.userService.getUser().shoppingList.filter(x=>x.archived!==true);
 this.shoppingList= this.shoppingList.map(shoppingList =>{
   const add = {
     name: "Ajouté à votre liste"
   }as Ingredient

   if(shoppingList.shoppingList){
      shoppingList.shoppingList.push(add)
    }
    return {...shoppingList,'saved':true}
  })
 
  if(this.shoppingList.length===0){
    const newShoppingList = {
      "name":"",
      "reNew":false,
      "periode":"",
      "saved":false,
      "shoppingList":[{'name': "Ajouté à votre liste"}]
    }
    this.shoppingList.push(newShoppingList)
  }
  this.dataSource = new MatTableDataSource(this.shoppingList)
  }
  public changeIcone(element : ShoppingList){
  
    this.shoppingList.find(x=> x._id===element._id).saved=false
  
    this.dataSource = new MatTableDataSource(this.shoppingList)

  }
  public archived(shoppingList : ShoppingList) {
    const index = this.shoppingList.indexOf(shoppingList)
    this.shoppingList[index].archived=true;
    const user = this.userService.getUser();
    this.shoppingList=this.shoppingList.map(shoppingList=>{
      const index = shoppingList.shoppingList.findIndex(x=>x.name==="Ajouté à votre liste")
      if(index!==-1){
        shoppingList.shoppingList.splice(index,1)
      }
      return shoppingList
    })
    user.shoppingList=this.shoppingList;
    this.userService.update(user).subscribe(res=>{
      const user = this.userService.getUser();
      this.shoppingList =  user.shoppingList
    })
    this.shoppingList.splice( index,1)
    this.dataSource = new MatTableDataSource(this.shoppingList)
  }
  public onClick() {
    const newShoppingList = {
      "name":"",
      "reNew":false,
      "periode":"",
      "archived":false,
      "saved":false,
      "shoppingList":[{'name': "Ajouté à votre liste"}]
    } as ShoppingList
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
    if(this.shoppingList[index].shoppingList){
      this.shoppingList[index].shoppingList.unshift(newShoppingList)
    }else{
      this.shoppingList[index].shoppingList=[];
      this.shoppingList[index].shoppingList.unshift(newShoppingList)
    }
   
    this.dataSourceByShoppingList = new MatTableDataSource(this.shoppingList[index].shoppingList);
  }
  public removeLineItems(ingredient :Ingredient){
  
    const index = this.shoppingList[this.selectedLineIndex].shoppingList.findIndex(x=>x._id===ingredient._id)
    this.shoppingList[this.selectedLineIndex].shoppingList.splice(index,1)
    const indexToRemove =   this.shoppingList[this.selectedLineIndex].shoppingList.findIndex(x=>x.name==="Ajouté à votre liste")
    if(indexToRemove!==-1){
      this.shoppingList[this.selectedLineIndex].shoppingList.splice(indexToRemove,1);
    }
      const user = this.userService.getUser();
      user.shoppingList=this.shoppingList;
      this.userService.update(user).subscribe(res =>{
        console.log(JSON.stringify(this.shoppingList[this.selectedLineIndex].shoppingList))
        this.shoppingList[this.selectedLineIndex].shoppingList[this.shoppingList[this.selectedLineIndex].shoppingList.length]={'name': "Ajouté à votre liste"}
        this.dataSourceByShoppingList=new MatTableDataSource(this.shoppingList[this.selectedLineIndex].shoppingList)
      })
  
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
    this.shoppingList=this.shoppingList.map(shoppingList=>{
      const index = shoppingList.shoppingList.findIndex(x=>x.name==="Ajouté à votre liste")
      if(index!==-1){
        shoppingList.shoppingList.splice(index,1)
      }
      return shoppingList
    })
    user.shoppingList=this.shoppingList;
    this.userService.update(user).subscribe(res=>{
      this.shoppingList[index].saved=true;
    })
    this.dataSource = new MatTableDataSource(this.shoppingList)
  }
  public showList(shoppingList : ShoppingList) {
    this.displayList=true;
    this.selectedLineIndex = this.shoppingList.findIndex(x=> x===shoppingList)
    this.dataSourceByShoppingList = new MatTableDataSource(shoppingList.shoppingList)
  }
  public saveItemInShoppingList(ingredient : Ingredient) {
    if(ingredient.name){
      this.shoppingList[this.selectedLineIndex].saved=true
      const user = this.userService.getUser();
      this.shoppingList=this.shoppingList.map(shoppingList=>{
        const index = shoppingList.shoppingList.findIndex(x=>x.name==="Ajouté à votre liste")
        if(index!==-1){
          shoppingList.shoppingList.splice(index,1)
        }
        return shoppingList
      })
      user.shoppingList=this.shoppingList;
      this.userService.update(user).subscribe(res =>{
        this.shoppingList[this.selectedLineIndex].shoppingList[this.shoppingList[this.selectedLineIndex].shoppingList.length]={'name': "Ajouté à votre liste"}
   
        this.dataSourceByShoppingList=new MatTableDataSource(this.shoppingList[this.selectedLineIndex].shoppingList)
      })
    
    }

    
  }
 
}
