import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    SignupRoutingModule
  ],
  exports: [SignupComponent]
})
export class SignupModule { }
