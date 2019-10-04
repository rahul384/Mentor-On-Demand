import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UsercurrentComponent } from './usercurrent.component';

@NgModule({
  declarations: [
    UsercurrentComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [UsercurrentComponent]
})
export class UsercurrentModule { }
