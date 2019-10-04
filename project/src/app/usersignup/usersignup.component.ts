import  {Component} from '@angular/core';
import { Router } from '@angular/router';

import { Signup } from './usersignup.model';
import { UsersignupService } from './usersignup.service';

@Component({
	selector: 'usersignup',
    templateUrl: './usersignup.component.html',
    styleUrls: ['./usersignup.component.css']
})
export class UsersignupComponent
{   
  active=true;
	date= new Date();
	user=Math.random();
    signup: Signup = new Signup();

    constructor(private router: Router, private userService: UsersignupService) {
  
    }
  
    createUser(): void {
      this.signup.resetPasswordDate=this.date;
      this.signup.active=this.active;
      this.signup.regCode=this.signup.firstName+this.signup.contactNumber;
      this.userService.createUser(this.signup)
          .subscribe( data => {
            alert("User created successfully.");
          });
  
    };

}