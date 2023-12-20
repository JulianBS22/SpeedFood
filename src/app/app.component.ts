import { Component } from '@angular/core';
import { FoodService } from './service/food.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  registerObj: any = {
    
      "userId": 0,
      "userName": "",
      "role": "Cliente",
      "password": "",
      "mobileNo": "",
      "emailId": "",
      "restaurantId": 0
    }
  constructor (private foodService:FoodService) {}
  OnLogin(){
    const modal = document.getElementById('loginModal')
    if (modal != null) {
      modal.style.display = 'block';
    }
  }

  OnRegister(){
    const modal = document.getElementById('registerModal')
    if (modal != null) {
      modal.style.display = 'block';
    }
  }
  CloseLogin(){
    const modal = document.getElementById('loginModal')
    if (modal != null) {
      modal.style.display = 'none';
    }
  }

  CloseRegister(){
    const modal = document.getElementById('registerModal')
    if (modal != null) {
      modal.style.display = 'none';
    }
  }
  OnSave(){
    this.foodService.onRegister(this.registerObj).subscribe((res:any)=>{
      if(res.result) {
        this.CloseRegister()
          alert('Se ha registrado exitosamente');
      } else{
          alert(res.message);
      }
    })
  }
}
