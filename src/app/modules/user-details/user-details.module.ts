import {Component, NgModule, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserDetailsComponent} from './user-details.component';
import {UserDetailsRouteModule} from './user-details.route.module';

@NgModule({
  imports: [
    CommonModule,
    UserDetailsRouteModule
  ],
  declarations: [UserDetailsComponent],
  exports: [
    UserDetailsComponent
  ]
})
export  class UserDetailsModule {

}
