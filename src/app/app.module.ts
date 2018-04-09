import { BrowserModule }         from '@angular/platform-browser';
import { NgModule }              from '@angular/core';
import { HttpModule}             from '@angular/http';
import { FormsModule }           from '@angular/forms';
import { AppComponent }          from './app.component';
import {HeroService}             from './modules/service/userData.service';
import { SignupComponent }       from './modules/signup/signup.component';
import { LoginComponent }        from './modules/login/login.component';
import { RouterModule, Routes }  from '@angular/router';
import {AppRoutingModule}        from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { UserDetailsComponent } from './modules/user-details/user-details.component';


const routes: Routes = [
  { path: 'home', component: SignupComponent },
  { path: '', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule, HttpModule, RouterModule.forRoot(routes), FormsModule, AppRoutingModule, BrowserAnimationsModule
  ],
  providers :[HeroService],

  bootstrap: [AppComponent]
})
export class AppModule { }
