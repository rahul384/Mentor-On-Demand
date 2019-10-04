import  {Component} from '@angular/core';
import { Router } from '@angular/router';

import { Curr } from './usercurrent.model';
import { UsercurrentService } from './usercurrent.service';

@Component({
	selector: 'my-employee15',
    templateUrl: './usercurrent.component.html',
    styleUrls: ['./usercurrent.component.css']
})
export class UsercurrentComponent
{ 
    current: Curr[];
    users=sessionStorage.getItem('fname');
    constructor(private router: Router, private usercurrentService: UsercurrentService) {
  
    }
  
    ngOnInit() {
      this.usercurrentService.getTrainings()
        .subscribe( data => {
          this.current = data;
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