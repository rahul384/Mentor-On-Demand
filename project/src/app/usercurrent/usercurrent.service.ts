import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Curr } from './usercurrent.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UsercurrentService {
  id=sessionStorage.getItem('id');

  constructor(private http:HttpClient) {}

  private userUrl = 'http://localhost:8882/trainer';
  //private userUrl = '/api';

  public getTrainings() {
    return this.http.get<Curr[]>(this.userUrl+"/findTrainingByUserId/"+this.id);
  }

  public deleteUser(user) {
    return this.http.delete(this.userUrl + "/"+ user.id);
  }

  public createUser(user) {
    return this.http.post<Curr>(this.userUrl, user);
  }

}


