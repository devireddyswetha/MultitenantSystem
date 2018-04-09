import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignupComponent} from './modules/signup/signup.component';
import {LoginComponent} from  './modules/login/login.component';
import { UserDetailsComponent } from './modules/user-details/user-details.component'

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: SignupComponent },
  { path: 'userDetails', component: UserDetailsComponent },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})


export class AppRoutingModule {}
