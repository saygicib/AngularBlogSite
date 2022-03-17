import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

import { MenucategoryComponent } from './menucategory/menucategory.component';
import { PagetitleComponent } from './pagetitle/pagetitle.component';
import { ArticlesComponent } from './articles/articles.component';
import { UrlformatPipe } from '../pipes/urlformat.pipe';
import { MenuarticlemostviewComponent } from './menuarticlemostview/menuarticlemostview.component';
import { MenuarchiveComponent } from './menuarchive/menuarchive.component';

@NgModule({
  declarations: [
    MenucategoryComponent,
    PagetitleComponent,
    ArticlesComponent,
    UrlformatPipe,
    MenuarticlemostviewComponent,
    MenuarchiveComponent
  ],
  imports: [CommonModule, RouterModule, NgxPaginationModule],
  exports: [
    MenucategoryComponent,
    PagetitleComponent,
    ArticlesComponent,
    UrlformatPipe,
    MenuarticlemostviewComponent,
    MenuarchiveComponent
  ],
})
export class ComponentsModule {}
