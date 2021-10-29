import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule

  ],
  declarations: [
    AppComponent,
    NopagefoundComponent,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
