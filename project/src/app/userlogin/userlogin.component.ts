import  {Component} from '@angular/core';

import {User} from './userlogin.model';
import {Router} from '@angular/router';
import {UserloginService} from './userlogin.service';

@Component({
	selector: 'userlogin',
    templateUrl: './userlogin.component.html',
    styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent
{ 
    users: User[];
	user: User=new User();

	constructor(private router: Router, private userloginService: UserloginService)
	{

	}


	authenticate(username,password): void{


		this.userloginService.authenticate(username,password).subscribe(data=> {
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
				this.router.navigate(['huser']);
			}
		})


	};
}