import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { TrainerloginComponent } from './trainerlogin/trainerlogin.component';
import { TrainersignupComponent } from './trainersignup/trainersignup.component';
import { HuserComponent } from './huser/huser.component';
import { HtrainerComponent } from './htrainer/htrainer.component';
import { HadminComponent } from './hadmin/hadmin.component';
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
import { AdminloginComponent } from './adminlogin/adminlogin.component';

const routes: Routes = [
  { path: '', redirectTo:'/about', pathMatch:'full' },
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
{ path: 'userlogin', component: UserloginComponent },
{ path: 'usersignup', component: UsersignupComponent },
{ path: 'trainerlogin', component: TrainerloginComponent },
{ path: 'trainersignup', component: TrainersignupComponent },
{ path: 'huser', component: HuserComponent },
{ path: 'htrainer', component: HtrainerComponent },
{ path: 'hadmin', component: HadminComponent },
{ path: 'adminadd', component: AdminaddComponent },
{ path: 'adminblock', component: AdminblockComponent },
{ path: 'adminpayment', component: AdminpaymentComponent },
{ path: 'trainerprogress', component: TrainerprogressComponent },
{ path: 'trainercompleted', component: TrainercompletedComponent },
{ path: 'trainerskills', component: TrainerskillsComponent },
{ path: 'trainerpayment', component: TrainerpaymentComponent },
{ path: 'trainerprofile', component: TrainerprofileComponent },
{ path: 'usersearch', component: UsersearchComponent },
{ path: 'usercurrent', component: UsercurrentComponent },
{ path: 'usercompleted', component: UsercompletedComponent },
{ path: 'userprofile', component: UserprofileComponent },
{ path: 'userreceipt', component: UserreceiptComponent },
{ path: 'adminlogin', component: AdminloginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
