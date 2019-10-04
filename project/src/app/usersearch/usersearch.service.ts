import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Tech } from './usersearch.model';
import { Training } from './usersearch.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UsersearchService {

  id=sessionStorage.getItem('id');
  constructor(private http:HttpClient) {}

  private userUrl = 'http://localhost:8882/tech';
  private userUrl1 = 'http://localhost:8882/trainer';
  //private userUrl = '/api';

  public getUsers() {
    return this.http.get<Tech[]>(this.userUrl);
  }

  public getEnroll(trainid)
  {
    return this.http.get<Training>(this.userUrl1+'/'+this.id+'/'+trainid);
  }

  public deleteUser(user) {
    return this.http.delete(this.userUrl + "/"+ user.id);
  }

  public createUser(user) {
    return this.http.post<Tech>(this.userUrl, user);
  }

}
