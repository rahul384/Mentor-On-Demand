import  {Component} from '@angular/core';

import {Signupt} from './trainerlogin.model';
import {Router} from '@angular/router';
import {TrainerloginService} from './trainerlogin.service';

@Component({
	selector: 'trainerlogin',
    templateUrl: './trainerlogin.component.html',
    styleUrls: ['./trainerlogin.component.css']
})
export class TrainerloginComponent
{ 
    users: Signupt[];
	user: Signupt=new Signupt();

	constructor(private router: Router, private trainerloginService: TrainerloginService)
	{

	}


	authenticate(username,password): void{


		this.trainerloginService.authenticate(username,password).subscribe(data=> {
			if(data==null)
			{
				alert("Incorrect Credentials!");
			}
			else if(data!=null)
			{
				sessionStorage.setItem('role',data.role)
				sessionStorage.setItem('id',data.id)
				sessionStorage.setItem('username',data.userName)
				sessionStorage.setItem('fname',data.firstName)
				this.router.navigate(['htrainer']);
			}
		})


	};
}