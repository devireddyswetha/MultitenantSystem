import { BrowserModule }         from '@angular/platform-browser';
import { NgModule }              from '@angular/core';
import { HttpModule}             from '@angular/http';
import { FormsModule }           from '@angular/forms';
import { AppComponent }          from './app.component';
import {HeroService}             from './modules/service/userData.service';
import { SignupModule }       from './modules/signup/signup.module';
import { LoginModule }        from './modules/login/login.module';
import {AppRoutingModule}        from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { UserDetailsComponent } from './modules/user-details/user-details.component';


@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule, HttpModule, BrowserAnimationsModule, SignupModule, FormsModule, LoginModule, AppRoutingModule
  ],
  providers : [HeroService],

  bootstrap: [AppComponent]
})
export class AppModule { }
