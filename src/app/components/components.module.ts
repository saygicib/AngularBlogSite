import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

import { MenucategoryComponent } from './menucategory/menucategory.component';
import { PagetitleComponent } from './pagetitle/pagetitle.component';
import { ArticlesComponent } from './articles/articles.component';

@NgModule({
  declarations: [MenucategoryComponent, PagetitleComponent, ArticlesComponent],
  imports: [CommonModule, RouterModule, NgxPaginationModule],
  exports: [MenucategoryComponent, PagetitleComponent, ArticlesComponent],
})
export class ComponentsModule {}
