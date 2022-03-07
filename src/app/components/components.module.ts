import { NgModule } from '@angular/core';
import {Router, RouterModule} from "@angular/router";
import { CommonModule } from '@angular/common';
import { MenucategoryComponent } from './menucategory/menucategory.component';


@NgModule({
  declarations: [MenucategoryComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    MenucategoryComponent
  ]
})
export class ComponentsModule { }
