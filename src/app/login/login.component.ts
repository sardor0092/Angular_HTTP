import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  constructor(public authService:AuthService) {}

  login():void {

    //  Foydalanuvchini kirishi
    const username = prompt('Foydalanuvchi nomini kiritiung ');
    const password = prompt('parolni kiritning');

    if(username && password) {
      if(this.authService.login(username ,password)){
        // Foydalanuvchi kirdi !
        console.log("Foydanaluvchi kirdi !");
        
      }

      else {
        console.log("xatolik");
        
      }

    }

  }


  logout():void{
    // Foydalanuvchini chiqishi
    this.authService.logout();
    console.log("User chiqib ketti !");
    

  }


}
