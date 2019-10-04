import  {Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Tech } from './usersearch.model';
import { UsersearchService } from './usersearch.service';

@Component({
	selector: 'my-employee14',
    templateUrl: './usersearch.component.html',
    styleUrls: ['./usersearch.component.css']
})

export class UsersearchComponent implements OnInit {

  users=sessionStorage.getItem('fname');
    technology: Tech[];
  
    constructor(private router: Router, private usersearchService: UsersearchService) {
  
    }
  
    ngOnInit() {
      this.usersearchService.getUsers()
        .subscribe( data => {
          this.technology = data;
        });
    };
  
    getEnroll(trainid)
      {
        this.usersearchService.getEnroll(trainid).
        subscribe(data=> {

      });
    };

    deleteUser(user: Tech): void {
      this.usersearchService.deleteUser(user)
        .subscribe( data => {
          this.technology = this.technology.filter(u => u !== user);
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
  