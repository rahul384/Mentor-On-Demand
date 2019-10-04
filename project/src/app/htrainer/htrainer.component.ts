import  {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
	selector: 'my-employee4',
    templateUrl: './htrainer.component.html',
    styleUrls: ['./htrainer.component.css']
})
export class HtrainerComponent
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