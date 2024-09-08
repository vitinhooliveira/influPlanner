import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { MenuModule } from '../../shared/menu/menu.module';


@NgModule({
  imports: [
    CommonModule,
    MenuModule
  ],
  declarations: [BlogComponent]
})
export class BlogModule { }
