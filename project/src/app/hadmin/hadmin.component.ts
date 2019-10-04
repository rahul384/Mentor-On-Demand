import  {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
	selector: 'my-employee5',
    templateUrl: './hadmin.component.html',
    styleUrls: ['./hadmin.component.css']
})
export class HadminComponent
{ 
    users=sessionStorage.getItem('username');
    constructor(private router: Router)
	{

	}

   
    logout()
    {
        sessionStorage.removeItem('role');
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('id');
        this.router.navigate(['home']);
        
    }
}