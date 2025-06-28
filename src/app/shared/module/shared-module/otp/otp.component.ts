import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-otp',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './otp.component.html',
  styleUrl: './otp.component.css'
})
export class OTPComponent {
  otp: string = '';
  get displayOtp(): string {
    const digits = this.otp.padEnd(4, '_');
    return digits.split('').join(' ');
  }
   get maskedOtp(): string {
    const digits = this.otp.split('');
    const masked = [0, 1, 2, 3].map(i => digits[i] ?? '_').join(' ');
    return masked;
  }

  onOtpInput(event: any): void {
    const rawValue: string = event.target.value.replace(/\s/g, '');
    this.otp = rawValue.replace(/[^0-9]/g, '').slice(0, 4);

    // Keep cursor at the end
    setTimeout(() => {
      const input = event.target as HTMLInputElement;
      input.setSelectionRange(input.value.length, input.value.length);
    });
  }
}
