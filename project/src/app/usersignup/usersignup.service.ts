import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Signup } from './usersignup.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UsersignupService {

  constructor(private http:HttpClient) {}

  private userUrl = 'http://localhost:8882/users';
  //private userUrl = '/api';

  public getUsers() {
    return this.http.get<Signup[]>(this.userUrl);
  }

  public deleteUser(signup) {
    return this.http.delete(this.userUrl + "/"+ signup.id);
  }

  public createUser(signup) {
    return this.http.post<Signup>(this.userUrl, signup);
  }

}
