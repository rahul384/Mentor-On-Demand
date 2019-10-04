import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Signup } from './adminblock.model';
import { Signupt } from './adminblock.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AdminblockService {

  constructor(private http:HttpClient) {}

  private userUrl = 'http://localhost:8882/users';
  private userUrl1 = 'http://localhost:8882/mentors';
  //private userUrl = '/api';

  public getUsers() {
    return this.http.get<Signup[]>(this.userUrl);
  }

  public deleteUser(user) {
    return this.http.delete(this.userUrl + "/"+ user.id);
  }




  public getUsers1() {
    return this.http.get<Signupt[]>(this.userUrl1);
  }

  public deleteUser1(user1) {
    return this.http.delete(this.userUrl1 + "/"+ user1.id);
  }

  

}
