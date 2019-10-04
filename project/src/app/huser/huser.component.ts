import  {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
	selector: 'my-employee3',
    templateUrl: './huser.component.html',
    styleUrls: ['./huser.component.css']
})
export class HuserComponent
{ 
    users=sessionStorage.getItem('fname');
    constructor(private router: Router)
	{

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