import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SobreComponent } from './sobre.component';
import { MenuModule } from '../../shared/menu/menu.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    MenuModule,
    HttpClientModule
  ],
  declarations: [SobreComponent]
})
export class SobreModule { }
