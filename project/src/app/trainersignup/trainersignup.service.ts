import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Signupt } from './trainersignup.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TrainersignupService {

  constructor(private http:HttpClient) {}

  private userUrl = 'http://localhost:8882/mentors';
  //private userUrl = '/api';

  public getUsers() {
    return this.http.get<Signupt[]>(this.userUrl);
  }

  public deleteUser(signupt) {
    return this.http.delete(this.userUrl + "/"+ signupt.id);
  }

  public createUser(signupt) {
    return this.http.post<Signupt>(this.userUrl, signupt);
  }

}
