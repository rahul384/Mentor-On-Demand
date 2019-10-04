import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AdminloginComponent } from './adminlogin.component';

@NgModule({
  declarations: [
    AdminloginComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AdminloginComponent]
})
export class AdminloginModule { }
