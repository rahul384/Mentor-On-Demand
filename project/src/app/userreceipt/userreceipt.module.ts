import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UserreceiptComponent } from './userreceipt.component';

@NgModule({
  declarations: [
    UserreceiptComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [UserreceiptComponent]
})
export class UserreceiptModule { }
