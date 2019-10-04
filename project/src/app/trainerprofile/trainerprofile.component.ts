import  {Component} from '@angular/core';
import {Router} from '@angular/router';
import { Profilet } from './trainerprofile.model';
import { TrainerprofileService } from './trainerprofile.service';

@Component({
	selector: 'my-employee17',
    templateUrl: './trainerprofile.component.html',
    styleUrls: ['./trainerprofile.component.css']
})
export class TrainerprofileComponent
{   user: Profilet = new Profilet();
    users=sessionStorage.getItem('fname');
    constructor(private router: Router, private trainerprofileService: TrainerprofileService)
	{

	}

    ngOnInit() {
        this.trainerprofileService.getUsers()
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