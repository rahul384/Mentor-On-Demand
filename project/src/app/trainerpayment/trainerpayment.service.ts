import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Payment } from './trainerpayment.model';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TrainerpaymentService {
  
  constructor(private http:HttpClient) {}

  
  private userUrl = 'http://localhost:8882/payments/';
  
  //private userUrl = '/api';

  public getPayments() {
    return this.http.get<Payment[]>(this.userUrl);
  }

    
  public Withdraw(payid,amount)
  {
    return this.http.get<Payment>(this.userUrl+"withdraw/"+payid+"/"+amount)
  }
}
