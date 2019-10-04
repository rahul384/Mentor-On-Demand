import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UserloginComponent } from './userlogin.component';

@NgModule({
  declarations: [
    UserloginComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [UserloginComponent]
})
export class UserloginModule { }
