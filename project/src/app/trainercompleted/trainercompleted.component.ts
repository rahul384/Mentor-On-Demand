import  {Component} from '@angular/core';
import { Router } from '@angular/router';

import { Comt } from './trainercompleted.model';
import { TrainercompletedService } from './trainercompleted.service';

@Component({
	selector: 'my-employee10',
    templateUrl: './trainercompleted.component.html',
    styleUrls: ['./trainercompleted.component.css']
})
export class TrainercompletedComponent
{ 
    completed: Comt[];
    users=sessionStorage.getItem('fname');
    constructor(private router: Router, private trainercompletedService: TrainercompletedService) {
  
    }
  
    ngOnInit() {
      this.trainercompletedService.getTrainings()
        .subscribe( data => {
          this.completed = data;
        });
    };
  
    deleteUser(user: Comt): void {
      this.trainercompletedService.deleteUser(user)
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