import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { TrainerloginComponent } from './trainerlogin/trainerlogin.component';
import { TrainersignupComponent } from './trainersignup/trainersignup.component';
import { HuserComponent } from './huser/huser.component';
import { HtrainerComponent } from './htrainer/htrainer.component';
import { HadminComponent } from './hadmin/hadmin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminaddComponent } from './adminadd/adminadd.component';
import { AdminblockComponent } from './adminblock/adminblock.component';
import { AdminpaymentComponent } from './adminpayment/adminpayment.component';
import { TrainerprogressComponent } from './trainerprogress/trainerprogress.component';
import { TrainercompletedComponent } from './trainercompleted/trainercompleted.component';
import { TrainerskillsComponent } from './trainerskills/trainerskills.component';
import { TrainerpaymentComponent } from './trainerpayment/trainerpayment.component';
import { TrainerprofileComponent } from './trainerprofile/trainerprofile.component';
import { UsersearchComponent } from './usersearch/usersearch.component';
import { UsercurrentComponent } from './usercurrent/usercurrent.component';
import { UsercompletedComponent } from './usercompleted/usercompleted.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { UserreceiptComponent } from './userreceipt/userreceipt.component';
import { UsersearchService } from './usersearch/usersearch.service';
import { HttpClientModule } from '@angular/common/http';
import { UsersignupService } from './usersignup/usersignup.service';
import { TrainersignupService } from './trainersignup/trainersignup.service';
import { TrainerskillsService } from './trainerskills/trainerskills.service';
import { AdminaddService } from './adminadd/adminadd.service';
import { AdminblockService } from './adminblock/adminblock.service';
import { UserloginService } from './userlogin/userlogin.service';
import { TrainerloginService } from './trainerlogin/trainerlogin.service';
import { UsercurrentService } from './usercurrent/usercurrent.service';
import { UsercompletedService } from './usercompleted/usercompleted.service';
import { AdminloginService } from './adminlogin/adminlogin.service';
import { TrainerprogressService } from './trainerprogress/trainerprogress.service';
import { TrainercompletedService } from './trainercompleted/trainercompleted.service';
import { UserprofileService } from './userprofile/userprofile.service';
import { TrainerprofileService } from './trainerprofile/trainerprofile.service';
import { AboutService } from './about/about.service';
import { UserreceiptService } from './userreceipt/userreceipt.service';
import { AdminpaymentService } from './adminpayment/adminpayment.service';
import { TrainerpaymentService } from './trainerpayment/trainerpayment.service';





@NgModule({
  declarations: [
    AppComponent,AdminloginComponent,AboutComponent,HomeComponent,UserloginComponent,UsersignupComponent,TrainerloginComponent,TrainersignupComponent,HuserComponent,HtrainerComponent,HadminComponent,AdminaddComponent,AdminblockComponent,AdminpaymentComponent,TrainerprogressComponent,TrainercompletedComponent,TrainerskillsComponent,TrainerpaymentComponent,TrainerprofileComponent,UsersearchComponent,UsercurrentComponent,UsercompletedComponent,UserprofileComponent,UserreceiptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
      // Specify ng-circle-progress as an import
      NgCircleProgressModule.forRoot({
        // set defaults here
        radius: 100,
        outerStrokeWidth: 16,
        innerStrokeWidth: 8,
        outerStrokeColor: "#78C000",
        innerStrokeColor: "#C7E596",
        animationDuration: 300,
        
      })
  ],
  providers: [TrainerpaymentService,AdminpaymentService,UserreceiptService,AboutService,AdminloginService,UsersearchService,UsersignupService,TrainersignupService,TrainerskillsService,AdminaddService,AdminblockService,UserloginService,TrainerloginService,UsercurrentService,UsercompletedService,TrainerprogressService,TrainercompletedService,UserprofileService,TrainerprofileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
