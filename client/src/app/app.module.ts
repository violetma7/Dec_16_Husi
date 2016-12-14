import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { JobComponent } from './job/job.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import {appRoutes} from "./app.routes";
import { ImageSliderComponent } from './image-slider/image-slider.component';
// import { MaterialModule } from '@angular/material';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ProductComponent,
    JobComponent,
    AboutComponent,
    ContactComponent,
    ImageSliderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRoutes,
    NgbModule.forRoot()
    // MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
