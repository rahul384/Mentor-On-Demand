import  {Component} from '@angular/core';
import { Router } from '@angular/router';

import { Prog } from './trainerprogress.model';
import { TrainerprogressService } from './trainerprogress.service';

@Component({
	selector: 'my-employee9',
    templateUrl: './trainerprogress.component.html',
    styleUrls: ['./trainerprogress.component.css']
})
export class TrainerprogressComponent
{ 
    prog: Prog[];
    users=sessionStorage.getItem('fname');
    constructor(private router: Router, private trainerprogressService: TrainerprogressService) {
  
    }
  
    ngOnInit() {
      this.trainerprogressService.getTrainings()
        .subscribe( data => {
          this.prog = data;
        });
    };
  
    deleteUser(user: Prog): void {
      this.trainerprogressService.deleteUser(user)
        .subscribe( data => {
          this.prog = this.prog.filter(u => u !== user);
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