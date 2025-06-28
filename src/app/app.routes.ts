import { Routes } from '@angular/router';
import { HomeComponent } from './shared/module/shared-module/home/home.component';
import { NgModule } from '@angular/core';
import { OTPComponent } from './shared/module/shared-module/otp/otp.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    {path:'OTP',component: OTPComponent}
];