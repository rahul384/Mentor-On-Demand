import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from './userlogin.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserloginService {

  constructor(private http:HttpClient) {}

  private userUrl = 'http://localhost:8882/users';
  //private userUrl = '/api';

  public authenticate(username,password)
  {
    return this.http.get<User>(this.userUrl+"/"+username+"/"+password);
  }
}
