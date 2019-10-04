import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AdminloginService {

  constructor(private http:HttpClient) {}


  public authenticate(username,password)
  {
    if(username=="admin" && password=="ADMIN")
    {
      sessionStorage.setItem('username',username)
      return true;
    }
    else
     return false;
  }
}
