import { FoodService } from './../../service/food.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent implements OnInit {

  foodItems: any[] = [];
  constructor(private foodService:FoodService) {}
  ngOnInit(): void {
    this.loadAllFoodCategory();
  }

  loadAllFoodCategory () {
    this.foodService.getAllFoods().subscribe((res:any)=>{
    this.foodItems = res.data;
    })
  }
}
