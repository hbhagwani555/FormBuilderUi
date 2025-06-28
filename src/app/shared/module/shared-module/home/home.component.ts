import { CommonModule } from '@angular/common';
import { Component, ErrorHandler, Inject, Injectable, Injector, ViewChild } from '@angular/core';
    import { FormsModule, NgForm } from '@angular/forms';
    import {MatIconModule} from '@angular/material/icon';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { CaptchaComponent } from '../captcha/captcha.component';
import { NgZone } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,MatIconModule,CommonModule,ToastrModule,CaptchaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @ViewChild('patientForm', { static: false }) patientForm!: NgForm;
  patient = {
    firstName: '',
    lastName: '',
    dob: '',
    phoneNumber: ''
  };
  isCaptchaResolved = false;
  constructor(private toastrService: ToastrService, private zone: NgZone,private router: Router){}
  onSubmit() {
    // If the form is invalid, mark it as submitted to trigger error messages
    if (this.patientForm.valid) {
      if(!this.isCaptchaResolved){
      this.toastrService.error('Please fill the captcha.');
      return;
      }
      // Form is valid, proceed with submission logic
      console.log('Form Submitted', this.patientForm.value);
       this.router.navigate(['/OTP']);
    } else {
      // Form is invalid, mark it as touched to show validation errors
      this.patientForm.control.markAllAsTouched();
      this.toastrService.error('Please fill in all required fields correctly.');
    }
  }
  handleCaptcha(captchaResponse: any){
     this.zone.run(()=> {
      this.isCaptchaResolved = !!captchaResponse;
     })
  }
}
