import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ContactComponent } from './contact/contact.component';
import { MainlayoutComponent } from './layout/mainlayout/mainlayout.component';
import { AdminlayoutComponent } from './layout/adminlayout/adminlayout.component';
import { MainnavComponent } from './nav/mainnav/mainnav.component';
import { AdminnavComponent } from './nav/adminnav/adminnav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutmeComponent,
    ContactComponent,
    MainlayoutComponent,
    AdminlayoutComponent,
    MainnavComponent,
    AdminnavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
