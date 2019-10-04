import  {Component} from '@angular/core';
import {Router} from '@angular/router';
import { Profile } from './userprofile.model';
import { UserprofileService } from './userprofile.service';

@Component({
	selector: 'my-employee17',
    templateUrl: './userprofile.component.html',
    styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent
{   user: Profile = new Profile();
    users=sessionStorage.getItem('fname');
    constructor(private router: Router, private userprofileService: UserprofileService)
	{

    }
    
    ngOnInit() {
        this.userprofileService.getUsers()
          .subscribe( data => {
            this.user = data;
          });
      };
    
     

    logout()
    {
        sessionStorage.removeItem('role');
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('fname');
        sessionStorage.removeItem('id');
        this.router.navigate(['home']);
        
    }
}