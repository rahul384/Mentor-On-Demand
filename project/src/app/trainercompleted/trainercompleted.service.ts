import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Comt } from './trainercompleted.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TrainercompletedService {
  id=sessionStorage.getItem("id");

  constructor(private http:HttpClient) {}

  private userUrl = 'http://localhost:8882/trainer';
  //private userUrl = '/api';

  public getTrainings() {
    return this.http.get<Comt[]>(this.userUrl+"/findTrainingCompletes/"+this.id);
  }

  public deleteUser(user) {
    return this.http.delete(this.userUrl + "/"+ user.id);
  }

  public createUser(user) {
    return this.http.post<Comt>(this.userUrl, user);
  }

}
