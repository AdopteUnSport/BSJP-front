import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { Ingredient } from 'src/app/core/models/ingredient';
import { ImageService } from 'src/app/core/services/image.service';

@Component({
  selector: 'app-fridge-content',
  templateUrl: './fridge-content.component.html',
  styleUrls: ['./fridge-content.component.scss']
})
export class FridgeContentComponent implements OnInit {
  public fridge : [Ingredient];
  displayedColumns: string[] = ['Image', 'Name', 'Quantity', 'Plat réalisable'];
  constructor(public userService: UserService,public imageService:ImageService) { }
  
  ngOnInit() {
    this.fridge = this.userService.getUser().fridge;
    this.fridge.forEach( async ingredient =>{
      ingredient.image = await this.imageService.getImageByTags(ingredient.tags);
    })
  }

}
