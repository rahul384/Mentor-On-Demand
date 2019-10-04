import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UsersignupComponent } from './usersignup.component';

@NgModule({
  declarations: [
    UsersignupComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [UsersignupComponent]
})
export class UsersignupModule { }
