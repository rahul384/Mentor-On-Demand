import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Profile } from './userprofile.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserprofileService {

  id=sessionStorage.getItem('id');
  constructor(private http:HttpClient) {}

  private userUrl = 'http://localhost:8882/users';
  //private userUrl = '/api';

  public getUsers() {
    return this.http.get<Profile>(this.userUrl+ "/"+ this.id);
  }

}
