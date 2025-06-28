import { Component , EventEmitter , Output} from '@angular/core';
import { RecaptchaModule } from 'ng-recaptcha';
@Component({
  selector: 'app-captcha',
  standalone: true,
  imports: [RecaptchaModule],
  templateUrl: './captcha.component.html',
  styleUrl: './captcha.component.css'
})
export class CaptchaComponent {
 siteKey= '6LcE4DUrAAAAANaS-duDXubN5Dls8u7ZsopuPgs9';
 @Output() resolved = new EventEmitter<any>();
 resolvedCaptcha(captchaResponse: any){
  this.resolved.emit(captchaResponse);
 }
}
