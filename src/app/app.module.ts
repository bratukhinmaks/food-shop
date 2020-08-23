import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RoutingModule} from './routing.module';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import {AdminModule} from './admin/admin.module';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {QuillModule} from 'ngx-quill';
import {AuthIntersaptor} from './shared/auth.intersaptor';
import {DishComponent} from './dish/dish.component';


@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    MainPageComponent,
    ProductPageComponent,
    CartPageComponent,
    NavbarComponent,
    DishComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    QuillModule.forRoot()

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
