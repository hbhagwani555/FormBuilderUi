import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { MatIconModule } from '@angular/material/icon';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    FormsModule
  ],
  exports: [
  ]
})
export class SharedModuleModule { }
