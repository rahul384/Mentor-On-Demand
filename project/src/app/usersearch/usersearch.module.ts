import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UsersearchComponent } from './usersearch.component';

@NgModule({
  declarations: [
    UsersearchComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [UsersearchComponent]
})
export class UsersearchModule { }
