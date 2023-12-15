import { FoodService } from './../../service/food.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-serving-food',
  templateUrl: './restaurant-serving-food.component.html',
  styleUrls: ['./restaurant-serving-food.component.css']
})
export class RestaurantServingFoodComponent {
  currentCategoryId: number = 0;
  restaurantList : any[] =[];
   constructor(private activatedRoute: ActivatedRoute, private router: Router, private foodService: FoodService) {
    this.activatedRoute.params.subscribe((res: any)=>{
      this.currentCategoryId = res.id;
      this.GetRestaurantServingByCategoryId();
    })
  }
  GetRestaurantServingByCategoryId(){
    this.foodService.GetRestaurantServingByCategoryId(this.currentCategoryId).subscribe((res: any) =>{
      this.restaurantList = res.data;
    })
  }
  navigate(restaurantID: number) {
    this.router.navigate(['/restaurant-food-item',restaurantID, this.currentCategoryId])
  }
}
