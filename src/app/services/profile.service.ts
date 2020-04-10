import { Injectable } from '@angular/core';
import { HttpClient }from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username:string
  private clientid:"dc165c6672c7ae1dd588"
  
  private clientsecret:"d064903db4595492eb84017863a35614e140e7b0"
  constructor(private http:HttpClient ) { 
    console.log("service is now ready")
    this.username ="luckyoula";
  }

getprofileInfo(){
 return this.http.get ("https://api.github.com/users/users/" + this.username + "?client_id=" + this.clientid + "&client_secrete=" + this.clientsecret)
}

}
