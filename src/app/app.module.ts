import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './components/layout/layout.module';
import { HttpClientModule } from '@angular/common/http';

import { ApiService } from './service/core/api.service';
import { TokenService } from './service/core/token.service';
import { HomeService } from './service/home.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule
  ],
  providers: [
    ApiService,
    TokenService,
    HomeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
