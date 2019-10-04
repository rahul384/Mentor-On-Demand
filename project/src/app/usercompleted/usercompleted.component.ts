import  {Component} from '@angular/core';
import { Router } from '@angular/router';

import { Com } from './usercompleted.model';
import { UsercompletedService } from './usercompleted.service';

@Component({
	selector: 'my-employee16',
    templateUrl: './usercompleted.component.html',
    styleUrls: ['./usercompleted.component.css']
})
export class UsercompletedComponent
{ 
    completed: Com[];
    users=sessionStorage.getItem('fname');
    constructor(private router: Router, private usercompletedService: UsercompletedService) {
  
    }
  
    ngOnInit() {
      this.usercompletedService.getTrainings()
        .subscribe( data => {
          this.completed = data;
        });
    };
  
    deleteUser(user: Com): void {
      this.usercompletedService.deleteUser(user)
        .subscribe( data => {
          this.completed = this.completed.filter(u => u !== user);
        })
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