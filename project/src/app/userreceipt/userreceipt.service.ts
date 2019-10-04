import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Payment } from './userreceipt.model';
import { Curr } from './userreceipt.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserreceiptService {
  id=sessionStorage.getItem('id');
  constructor(private http:HttpClient) {}

  
  private userUrl = 'http://localhost:8882/payments';
  private userUrl1 = 'http://localhost:8882/trainer';
  //private userUrl = '/api';

  
  public getPayment()
  {
    return this.http.get<Payment[]>(this.userUrl+"/findPaymentByUserId/"+this.id);
  }

  public getTrainings(Pid)
  {
    return this.http.get<Curr>(this.userUrl1+"/"+Pid);
  }
  
  public Payfees(payid,amount)
  {
    return this.http.get<Payment>(this.userUrl+"/payfees/"+payid+"/"+amount)
  }


}
