import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductNewsComponent } from "./product-news/product-news.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductManagerComponent } from "./product-manager/product-manager.component";
import { ProductAddComponent } from "./product-add/product-add.component";
import { ProductEditComponent } from "./product-edit/product-edit.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { ProductContactComponent } from "./product-contact/product-contact.component";


// import ProductManager from  './product-manager/product-manager.component';



const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "product-list", component: ProductListComponent },
  { path: "product-manager", component: ProductManagerComponent },
  { path: "product-add", component: ProductAddComponent },
  { path: "product-contact", component: ProductContactComponent },
 
  { path: "product/:productID", component: ProductDetailComponent },
  { path: "product/edit/:productID", component: ProductEditComponent },
  { path: "news", component: ProductNewsComponent },
  { path: "**", component: NotFoundComponent }

  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'home', component: HomeComponent },
  // { path: 'product-manager', component: ManagerComponent,
  //   children: [
  //     { path: '', component: ManagerComponent },
  //     { path: 'product-manager', component: ProductManager},
  //     { path: "product/:productID", component: ProductDetail }
  //   ]
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
