import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SobreComponent } from './sobre.component';
import { MenuModule } from '../../shared/menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    MenuModule
  ],
  declarations: [SobreComponent]
})
export class SobreModule { }
