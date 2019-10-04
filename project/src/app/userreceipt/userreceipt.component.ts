import  {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import { Curr } from './userreceipt.model';
import { Payment } from './userreceipt.model';
import { UserreceiptService } from './userreceipt.service';

@Component({
	selector: 'my-employee18',
    templateUrl: './userreceipt.component.html',
    styleUrls: ['./userreceipt.component.css']
})
export class UserreceiptComponent implements OnInit
{   
   
    payments: Payment[];
	trainings: Curr=new Curr();
    showId=false;
    users=sessionStorage.getItem('fname');
	Payid;
	amt;
    constructor(private router: Router, private userreceiptService: UserreceiptService)
	{

	}
    ngOnInit(){
	
		this.userreceiptService.getPayment()
		.subscribe(data1=>{
			this.payments=data1;
		});


	}


	getTrainings(Pid,amount,payid)
	{
		this.Payid=payid;
		this.amt=amount;
		
		this.userreceiptService.getTrainings(Pid)
		.subscribe(data=>{
			this.trainings=data;
		});
		this.showId=!this.showId;
		
	}

	Payfees(amount){

		if(this.amt==0)
		{
			this.userreceiptService.Payfees(this.Payid,amount)
		.subscribe(data=>{
			alert("Fees Paid Successfully!");
		});
		
		}
		else{
			alert("Fees Already Paid");
		}
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