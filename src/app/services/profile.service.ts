import { Injectable } from '@angular/core';
import { HttpClient }from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username:string
  private clientid:""
  private clientsecret:""
  constructor(private http:HttpClient ) { 
    console.log("service is now ready")
    this.username ="luckyoula";
  }

getprofileInfo(){
 return this.http.get ()
}

}
