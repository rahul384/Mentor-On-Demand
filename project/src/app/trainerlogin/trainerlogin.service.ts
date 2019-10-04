import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Signupt } from './trainerlogin.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TrainerloginService {

  constructor(private http:HttpClient) {}

  private userUrl = 'http://localhost:8882/mentors';
  //private userUrl = '/api';

  public authenticate(username,password)
  {
    return this.http.get<Signupt>(this.userUrl+"/"+username+"/"+password);
  }
}
