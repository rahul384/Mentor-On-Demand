import  {Component} from '@angular/core';

import {Router} from '@angular/router';
import {AdminloginService} from './adminlogin.service';

@Component({
	selector: 'adminlogin',
    templateUrl: './adminlogin.component.html',
    styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent
{ 
	username=''
	password=''

	constructor(private router: Router, private adminloginService: AdminloginService)
	{

	}


	authenticate(): void{
		if(this.adminloginService.authenticate(this.username,this.password))
			{ this.router.navigate(['hadmin']);
			 sessionStorage.setItem('username',"Admin");
	}
			 else
			alert("Incorrect credentials!");
	}
}