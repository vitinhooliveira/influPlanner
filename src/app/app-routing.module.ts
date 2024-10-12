import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './view/login/login.component';
import { HomeComponent } from './view/home/home.component';
import { SobreComponent } from './view/sobre/sobre.component';
import { BlogComponent } from './view/blog/blog.component';

const routes: Routes = [
  { path: '', redirectTo: 'sobre', pathMatch: 'full' }, //default route
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'blog', component: BlogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
