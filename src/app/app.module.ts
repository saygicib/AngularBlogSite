import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { AdminlayoutComponent } from './layout/adminlayout/adminlayout.component';
import { AdminnavComponent } from './nav/adminnav/adminnav.component';
import { MainModule } from './pages/main.module';

@NgModule({
  declarations: [
    AppComponent,
    AdminlayoutComponent,
    AdminnavComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,MainModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
