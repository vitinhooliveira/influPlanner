import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';

import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material/material.module';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],

  declarations: [LoginComponent],
})
export class LoginModule {}
