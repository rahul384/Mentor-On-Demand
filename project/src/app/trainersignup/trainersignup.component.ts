import  {Component} from '@angular/core';
import { Router } from '@angular/router';

import { Signupt } from './trainersignup.model';
import { TrainersignupService } from './trainersignup.service';

@Component({
	selector: 'trainersignup',
    templateUrl: './trainersignup.component.html',
    styleUrls: ['./trainersignup.component.css']
})
export class TrainersignupComponent
{ 
    signupt: Signupt = new Signupt();

    constructor(private router: Router, private userService: TrainersignupService) {
  
    }
  
    createUser(): void {
      this.userService.createUser(this.signupt)
          .subscribe( data => {
            alert("User created successfully.");
          });
  
    };

}