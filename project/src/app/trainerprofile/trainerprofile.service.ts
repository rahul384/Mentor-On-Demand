import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Profilet } from './trainerprofile.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TrainerprofileService {

  id=sessionStorage.getItem('id');
  constructor(private http:HttpClient) {}

  private userUrl = 'http://localhost:8882/mentors';
  //private userUrl = '/api';

  public getUsers() {
    return this.http.get<Profilet>(this.userUrl+ "/"+ this.id);
  }

}
