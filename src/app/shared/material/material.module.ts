import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';



@NgModule({
  imports: [MatInputModule, MatIconModule, MatButtonModule, MatMenuModule],
  exports: [MatIconModule, MatInputModule, MatButtonModule, MatMenuModule],
})
export class MaterialModule {}
