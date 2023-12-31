import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  apiEndpoint: string = "https://freeapi.miniprojectideas.com/api/zomato/";

  constructor(private http: HttpClient) { }
  getAllFoods(): Observable<any> {
    return this.http.get (this.apiEndpoint + "GetAllFoodCategory")
  }

  GetRestaurantServingByCategoryId(foodCategoryId: number): Observable<any>{
    return this.http.get(this.apiEndpoint +'GetRestaurantServingByCategoryId?categoryId=' + foodCategoryId )
  }
  GetFoodItemOfRestaurantByCategory(restaurantId: number, categoryId: number):Observable<any> {
    return this.http.get(this.apiEndpoint + 'GetFoodItemOfRestaurantByCategory?restaurantId='+ restaurantId +'&categoryId='+categoryId)
  }

  onRegister (obj: any) : Observable<any>{
    return this.http.post(this.apiEndpoint +"AddNewUser",obj)
  }
}
