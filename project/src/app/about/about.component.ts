import  {Component} from '@angular/core';
import { Router } from '@angular/router';

import { Tech } from './about.model';
import { AboutService } from './about.service';

@Component({
	selector: 'about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent
{ 
    technology: Tech[];
    showId=false;
  
    constructor(private router: Router, private aboutService: AboutService) {
  
    }
  
    ngOnInit() {
      this.aboutService.getUsers()
        .subscribe( data => {
          this.technology = data;
        });
    };

    toggleId()
    {
        this.showId=!this.showId;
    }
}