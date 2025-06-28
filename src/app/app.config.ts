import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { ToastrModule } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), 
    importProvidersFrom(ToastrModule.forRoot({  
  positionClass: "toast-top-right",
  toastClass: 'ngx-toastr custom-error-toast',  // custom class
  closeButton: true,
  timeOut: 3000})),provideAnimations(),]
};

