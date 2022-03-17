import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainlayoutComponent } from './layout/mainlayout/mainlayout.component';
import { AdminlayoutComponent } from './layout/adminlayout/adminlayout.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutmeComponent } from './pages/aboutme/aboutme.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ArticleComponent } from './pages/article/article.component';
import { ArticlesbycategoryComponent } from './pages/articlesbycategory/articlesbycategory.component';
import { ArticlesbysearchComponent } from './pages/articlesbysearch/articlesbysearch.component';
import { ArchiveComponent } from './pages/archive/archive.component';

const routes: Routes = [
  {
    path: '',
    component: MainlayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'page/:page',
        component: HomeComponent,
      },
      {
        path: 'aboutme',
        component: AboutmeComponent,
      },
      {
        path: 'article/:title/:id',
        component: ArticleComponent,
      },
      {
        path: 'archive/:year/:month',
        component: ArchiveComponent,
      },
      {
        path: 'archive/:year/:month/page/:page',
        component: ArchiveComponent,
      },
      {
        path: 'category/:name/:id',
        component: ArticlesbycategoryComponent,
      },
      {
        path: 'category/:name/:id/page/:page',
        component: ArticlesbycategoryComponent,
      },
      {
        path: 'search/page/:page',
        component: ArticlesbysearchComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
    ],
  },
  {
    path: 'admin',
    component: AdminlayoutComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
