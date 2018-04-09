import {Component, NgModule, OnInit} from '@angular/core';
import {CommonModule}                from '@angular/common';
import {SignupComponent}             from './signup.component'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SignupComponent],
  exports: [
    SignupComponent
  ]
})
export  class SignupModule {

}
