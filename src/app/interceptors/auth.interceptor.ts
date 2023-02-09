import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {
    
    intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       
        let userInfo = localStorage.getItem("user");
        
        if (userInfo){
            
            let userInfoObj = JSON.parse(userInfo);
           
            let reqClone = httpRequest.clone({
                setHeaders: { Authorization: `Bearer ${userInfoObj.token}` }
            });
            
            return next.handle(reqClone);
            
        }

        return next.handle(httpRequest);
        
    }

}