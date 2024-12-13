import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { MainModule } from '../main/main.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    LayoutComponent,
    SideNavComponent,
    HeaderComponent,
    ContentComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MainModule
  ],
  exports:[
    LayoutComponent
  ]
})
export class LayoutModule { }
