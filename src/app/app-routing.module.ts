import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainlayoutComponent } from './layout/mainlayout/mainlayout.component';
import { AdminlayoutComponent } from './layout/adminlayout/adminlayout.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutmeComponent } from './pages/aboutme/aboutme.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
{
  path:"",
  component:MainlayoutComponent,
  children:[
    {
      path:"",
      component:HomeComponent,
    },
    {
      path:"aboutme",
      component:AboutmeComponent
    },
    {
      path:"contact",
      component:ContactComponent
    }
  ]
},
{
  path:"admin",
  component:AdminlayoutComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
