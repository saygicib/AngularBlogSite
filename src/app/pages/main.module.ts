import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "../app-routing.module";

import { AboutmeComponent } from './aboutme/aboutme.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import {ComponentsModule} from "../components/components.module";
import { MainlayoutComponent } from '../layout/mainlayout/mainlayout.component';
import { MainnavComponent } from '../nav/mainnav/mainnav.component';


@NgModule({
  declarations: [MainlayoutComponent,MainnavComponent,AboutmeComponent,ContactComponent,HomeComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ComponentsModule
  ]
})
export class MainModule { }
