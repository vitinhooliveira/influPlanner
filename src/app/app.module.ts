import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './view/login/login.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './view/home/home.module';
import { SobreModule } from './view/sobre/sobre.module';
import { MaterialModule } from './shared/material/material.module';
import { MenuModule } from './shared/menu/menu.module';
import { BlogModule } from './view/blog/blog.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    HomeModule,
    SobreModule,
    MaterialModule,
    MenuModule,
    BlogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
