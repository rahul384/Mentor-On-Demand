import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UsercompletedComponent } from './usercompleted.component';

@NgModule({
  declarations: [
    UsercompletedComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [UsercompletedComponent]
})
export class UsercompletedModule { }
