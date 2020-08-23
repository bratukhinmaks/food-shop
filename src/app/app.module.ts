import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RoutingModule} from './routing.module';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import {AdminModule} from './admin/admin.module';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {QuillModule} from 'ngx-quill';
import {AuthIntersaptor} from './shared/auth.intersaptor';
import {DishComponent} from './dish/dish.component';
import {FormsModule} from '@angular/forms';
import {FilterPipe} from './shared/pipes/filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    MainPageComponent,
    ProductPageComponent,
    NavbarComponent,
    FilterPipe,
    DishComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    QuillModule.forRoot(),
    FormsModule,
    AdminModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: AuthIntersaptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
