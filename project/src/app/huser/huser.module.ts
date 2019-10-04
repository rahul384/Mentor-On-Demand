import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HuserComponent } from './huser.component';

@NgModule({
  declarations: [
    HuserComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [HuserComponent]
})
export class HuserModule { }
