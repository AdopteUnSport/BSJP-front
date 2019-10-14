import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/services/user.service';
import { ImageService } from '../core/services/image.service';
import { Ingredient } from '../core/models/ingredient';

@Component({
  selector: 'app-fridge',
  templateUrl: './fridge.component.html',
  styleUrls: ['./fridge.component.scss']
})
export class FridgeComponent implements OnInit {
  public activeTab;
  public fridge : Ingredient[];
  constructor(public userService: UserService,public imageService:ImageService) { }

  ngOnInit() {
    console.log("activeTab")
    this.fridge = this.userService.getUser().fridge;
    this.fridge.forEach( async ingredient =>{
      ingredient.image ='https://c7.uihere.com/icons/710/1020/1010/bacon-food-meat-icon-91accb04fad4f54e4b1ab2db985a23d8.png' // await this.imageService.getImageByTags(ingredient.tags);
    })
  }
  public tabChanged($event) {
    switch($event){
      case 0: {
        this.fridge = this.userService.getUser().fridge;
        this.fridge.forEach( async ingredient =>{
          ingredient.image ='https://c7.uihere.com/icons/710/1020/1010/bacon-food-meat-icon-91accb04fad4f54e4b1ab2db985a23d8.png'  //await this.imageService.getImageByTags(ingredient.tags);
        })
     
        break;
      }
      case 1: {
        this.fridge = this.userService.getUser().fridge;
        this.fridge.forEach( async ingredient =>{
          ingredient.image ='https://c7.uihere.com/icons/710/1020/1010/bacon-food-meat-icon-91accb04fad4f54e4b1ab2db985a23d8.png'  //await this.imageService.getImageByTags(ingredient.tags);
        })
        this.fridge=this.fridge.filter(ingredient => ingredient.category.name==='fruits');
        
        break;
      }
      case 2: {
        this.fridge = this.userService.getUser().fridge;
        this.fridge.forEach( async ingredient =>{
          ingredient.image ='https://c7.uihere.com/icons/710/1020/1010/bacon-food-meat-icon-91accb04fad4f54e4b1ab2db985a23d8.png'  // await this.imageService.getImageByTags(ingredient.tags);
        })
        this.fridge=this.fridge.filter(ingredient => ingredient.category.name==='légumes');
        
        break;
      }
      case 3: {
        this.fridge = this.userService.getUser().fridge;
        this.fridge.forEach( async ingredient =>{
          ingredient.image = 'https://c7.uihere.com/icons/710/1020/1010/bacon-food-meat-icon-91accb04fad4f54e4b1ab2db985a23d8.png' //await this.imageService.getImageByTags(ingredient.tags);
        })
        this.fridge=this.fridge.filter(ingredient => ingredient.category.name==='viandes')
        break;
      }
      case 4: {
        this.fridge = this.userService.getUser().fridge;
        this.fridge.forEach( async ingredient =>{
          ingredient.image = 'https://c7.uihere.com/icons/710/1020/1010/bacon-food-meat-icon-91accb04fad4f54e4b1ab2db985a23d8.png' //await this.imageService.getImageByTags(ingredient.tags);
        })
        this.fridge=this.fridge.filter(ingredient => ingredient.category.name==='poissons')
        break;
      }
    }
  }
}
