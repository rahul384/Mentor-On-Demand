import  {Component} from '@angular/core';
import { Router } from '@angular/router';

import { Signup } from './adminblock.model';
import { Signupt } from './adminblock.model';
import { AdminblockService } from './adminblock.service';

@Component({
	selector: 'my-employee7',
    templateUrl: './adminblock.component.html',
    styleUrls: ['./adminblock.component.css']
})
export class AdminblockComponent
{ 
    signup: Signup[];
    signupt: Signupt[];
    users=sessionStorage.getItem('username');
    constructor(private router: Router, private adminblockService: AdminblockService) {
  
    }
  
    ngOnInit() {
      this.adminblockService.getUsers()
        .subscribe( data => {
          this.signup = data;
        });

        this.adminblockService.getUsers1()
        .subscribe( data => {
          this.signupt = data;
        });
    };
  
    deleteUser(user: Signup): void {
      this.adminblockService.deleteUser(user)
        .subscribe( data => {
          this.signup = this.signup.filter(u => u !== user);
        })
    };

    
      deleteUser1(user1: Signupt): void {
        this.adminblockService.deleteUser1(user1)
          .subscribe( data => {
            this.signupt = this.signupt.filter(u => u !== user1);
          })
      };

      
    logout()
    {
        sessionStorage.removeItem('role');
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('id');
        this.router.navigate(['home']);
        
    }
  
}