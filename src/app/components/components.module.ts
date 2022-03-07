import { NgModule } from '@angular/core';
import {Router, RouterModule} from "@angular/router";
import { CommonModule } from '@angular/common';
import { MenucategoryComponent } from './menucategory/menucategory.component';
import { PagetitleComponent } from './pagetitle/pagetitle.component';


@NgModule({
  declarations: [MenucategoryComponent, PagetitleComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    MenucategoryComponent,PagetitleComponent
  ]
})
export class ComponentsModule { }
