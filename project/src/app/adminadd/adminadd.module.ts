import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AdminaddComponent } from './adminadd.component';

@NgModule({
  declarations: [
    AdminaddComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AdminaddComponent]
})
export class AdminaddModule { }
