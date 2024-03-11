import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private loggedIn =  false;

  constructor() { }

  login(username:string, password:string):boolean{
    // bu orqali foydalanuvchi avtorizatisiyadan o'tkaziladi

    if(username =="admin" && password =='admin123'){
      this.loggedIn = true;
      return true;
    }

    return false;


  }

  logout():void {
    // foydalanuvchini chiqishi
    this.loggedIn=false;

  }

  isLoggedIn():boolean{
    // Foydalanuvchi kirganmi?
    return this.loggedIn;

  }


  isAdmin():boolean {

    // Foydalanuvchi adminmi ?
    return this.loggedIn;
    

  }



}
