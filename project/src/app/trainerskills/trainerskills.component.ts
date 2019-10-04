import  {Component} from '@angular/core';
import { Router } from '@angular/router';

import { Skill } from './trainerskills.model';
import { TrainerskillsService } from './trainerskills.service';

@Component({
	selector: 'my-employee11',
    templateUrl: './trainerskills.component.html',
    styleUrls: ['./trainerskills.component.css']
})
export class TrainerskillsComponent
{ 
    skills: Skill[];
    skill: Skill = new Skill();
    users=sessionStorage.getItem('fname');
  
    constructor(private router: Router, private trainerskillsService: TrainerskillsService) {
  
    }
  
    ngOnInit() {
      this.trainerskillsService.getUsers()
        .subscribe( data => {
          this.skills = data;
        });
    };
  
    deleteUser(skill: Skill): void {
      this.trainerskillsService.deleteUser(skill)
        .subscribe( data => {
          this.skills = this.skills.filter(u => u !== skill);
        })
    };

    createUser(): void {
        this.trainerskillsService.createUser(this.skill)
            .subscribe( data => {
              alert("Skill added successfully.");
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