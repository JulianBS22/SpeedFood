import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/service/food.service'

@Component({
  selector: 'app-restaurant-food-item',
  templateUrl: './restaurant-food-item.component.html',
  styleUrls: ['./restaurant-food-item.component.css']
})
export class RestaurantFoodItemComponent {
  restaurantId: number = 0;
  categoryId: number = 0;
  foodItemList:any[]=[];

  constructor(private ActivateRoute:ActivatedRoute, private foodservice:FoodService){
    this.ActivateRoute.params.subscribe((res:any)=>{
      this.categoryId=res.categoryId;
      this.restaurantId=res.restaurantId;
      this.GetFoodItemOfRestaurantByCategory()
    })
  }
GetFoodItemOfRestaurantByCategory(){
  this.foodservice.GetFoodItemOfRestaurantByCategory(this.restaurantId, this.categoryId).subscribe((res:any)=>{
    console.log(res)
    this.foodItemList=res.data
  })
}
}
