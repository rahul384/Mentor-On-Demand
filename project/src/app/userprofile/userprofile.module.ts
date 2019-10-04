import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UserprofileComponent } from './userprofile.component';

@NgModule({
  declarations: [
    UserprofileComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [UserprofileComponent]
})
export class UserprofileModule { }
