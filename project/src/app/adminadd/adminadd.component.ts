import  {Component} from '@angular/core';
import { Router } from '@angular/router';

import { Tech } from './adminadd.model';
import { AdminaddService } from './adminadd.service';

@Component({
	selector: 'my-employee6',
    templateUrl: './adminadd.component.html',
    styleUrls: ['./adminadd.component.css']
})
export class AdminaddComponent
{ 
    techs: Tech[];
    tech: Tech = new Tech();
    users=sessionStorage.getItem('username');
  
    constructor(private router: Router, private adminaddService: AdminaddService) {
  
    }
  
    ngOnInit() {
      this.adminaddService.getUsers()
        .subscribe( data => {
          this.techs = data;
        });
    };
  
    deleteUser(tech: Tech): void {
      this.adminaddService.deleteUser(tech)
        .subscribe( data => {
          this.techs = this.techs.filter(u => u !== tech);
        })
    };

    createUser(): void {
        this.adminaddService.createUser(this.tech)
            .subscribe( data => {
              alert("Technology added successfully.");
            });
    
      };
  
      
    logout()
    {
        sessionStorage.removeItem('role');
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('id');
        this.router.navigate(['home']);
        
    }

}