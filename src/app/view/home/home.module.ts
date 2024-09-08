import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MenuModule } from '../../shared/menu/menu.module';

@NgModule({
  imports: [CommonModule, MenuModule],
  declarations: [HomeComponent],
})
export class HomeModule {}
