import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Tech } from './about.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AboutService {

  constructor(private http:HttpClient) {}

  private userUrl = 'http://localhost:8882/tech';
  //private userUrl = '/api';

  public getUsers() {
    return this.http.get<Tech[]>(this.userUrl);
  }



}
