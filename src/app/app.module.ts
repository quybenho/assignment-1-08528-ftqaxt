import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductNewsComponent } from './product-news/product-news.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductContactComponent } from './product-contact/product-contact.component';
import { ProductSliderComponent } from './product-slider/product-slider.component';
import { AdminComponent } from './admin/admin.component';
@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule, NgbModule],
  declarations: [AppComponent, HelloComponent, HomeComponent, ProductListComponent, ProductNewsComponent, ProductDetailComponent, ProductManagerComponent, ProductAddComponent, ProductEditComponent, NotFoundComponent, ProductContactComponent, ProductSliderComponent, AdminComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
