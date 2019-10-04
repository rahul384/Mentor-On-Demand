import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HadminComponent } from './hadmin.component';

@NgModule({
  declarations: [
    HadminComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [HadminComponent]
})
export class HadminModule { }
