import  {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { Payment } from './trainerpayment.model';
import { TrainerpaymentService } from './trainerpayment.service';

@Component({
	selector: 'my-employee12',
    templateUrl: './trainerpayment.component.html',
    styleUrls: ['./trainerpayment.component.css']
})
export class TrainerpaymentComponent implements OnInit
{   
    payment: Payment[];
    displayId=false;
	withdrawAmount;
	amount;
	pid;
    users=sessionStorage.getItem('fname');
    constructor(private router: Router, private trainerpaymentService: TrainerpaymentService)
	{

	}

    ngOnInit() {
        this.trainerpaymentService.getPayments()
          .subscribe( data => {
            this.payment = data;
          });
      };

      
  Withdraw(amt){
    if(amt>this.amount)
    {
        alert("Insufficient Balance");
    }
    else
    {
        this.trainerpaymentService.Withdraw(this.pid,amt)
        .subscribe(data=>{
        alert("Withdraw Successfull !");
        });
    
    }


}

      toggleId(amount,pid)
      {
        this.amount=amount;
		this.pid=pid;
          this.displayId=!this.displayId;
      }
  

    logout()
    {
        sessionStorage.removeItem('role');
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('fname');
        sessionStorage.removeItem('id');
        this.router.navigate(['home']);
        
    }
}