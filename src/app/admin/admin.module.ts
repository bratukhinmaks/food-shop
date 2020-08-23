import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import { AdminLayoutComponent } from './shared/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { AddPageComponent } from './add-page/add-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { AdminNavComponent } from './shared/admin-nav/admin-nav.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthGuard} from '../shared/auth.guard';
import {QuillModule} from 'ngx-quill';
import {SearchPipe} from '../shared/search.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    QuillModule.forRoot(),
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: '', component: AdminLayoutComponent, children: [
          {path: 'login', component: LoginComponent},
          {path: '', redirectTo: 'admin/login', pathMatch: 'full' },
          {path: 'add-page', component: AddPageComponent, canActivate: [AuthGuard]},
          {path: 'product/:id/edit-page', component: EditPageComponent, canActivate: [AuthGuard]},
          {path: 'dashboard', component: DashboardPageComponent, canActivate: [AuthGuard]},
          {path: 'order-page', component: OrderPageComponent, canActivate: [AuthGuard]},
        ]}
    ])
  ],
  exports: [RouterModule],
  declarations: [AdminLayoutComponent, LoginComponent,
    AddPageComponent, DashboardPageComponent, EditPageComponent,
    OrderPageComponent, AdminNavComponent, SearchPipe]
})

export  class AdminModule {

}
