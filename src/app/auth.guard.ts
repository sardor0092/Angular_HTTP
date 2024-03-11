import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn: 'root'

})

export class AuthGuard implements CanActivate {


constructor(private autSerive:AuthService , private router:Router) {}



    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        throw new Error("Method not implemented.");

        if(this.autSerive.isLoggedIn()){
            return true;
             console.log('user is logged in');
             // Foydalanuvchi tizimga kirgan bo'lsa ,kirishga ruxsat bermaydi
        }

        else {

            // Foydalanuvchi tizimga kirmagan bo'lsa, 
            // Foydalanuvchi login komponentiga yo'naltiriladi

            this.router.navigate(['login']) ;
            return false;

        }



    }





    
    
}