import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list-component/product-list-component';
import { ProductDropdownListComponent } from './product-dropdown-list-component/product-dropdown-list-component';
import { ProductListCallServiceComponent } from './product-list-call-service-component/product-list-call-service-component';
import { ProductListCallHttpServiceComponent } from './product-list-call-http-service-component/product-list-call-http-service-component';
import { ServiceProductImageEventDetail } from './service-product-image-event-detail/service-product-image-event-detail';
import { ServiceProductImageEvent } from './service-product-image-event/service-product-image-event';
import { ProductCatalog } from './product-catalog/product-catalog';
import { GroupCustomers } from './group-customers/group-customers';
import { ProductDetailComponent } from './product-detail-component/product-detail-component';
import { ProductListAdvancedComponent } from './product-list-advanced-component/product-list-advanced-component';
import { ProductListSearchComponent } from './product-list-search-component/product-list-search-component';
import { PageNotFoundComponent } from './page-not-found-component/page-not-found-component';
import { Contact } from './contact/contact';
import { authGuard } from './classes/auth.guard';
import { CourseRegistrationComponent } from './course-registration-component/course-registration-component';
import { LoginComponent } from './login-component/login-component';
import { CourseRegistrationReactiveComponent } from './course-registration-reactive-component/course-registration-reactive-component';
import { FakeProductComponent } from './fake-product-component/fake-product-component';
import { FakeProductComponent2 } from './fake-product-component2/fake-product-component2';
import { BooksComponent } from './books-component/books-component';
import { BookDetailComponent } from './book-detail-component/book-detail-component';
import { BookNewComponent } from './book-new-component/book-new-component';
import { BookUpdateComponent } from './book-update-component/book-update-component';
import { BookDeleteComponent } from './book-delete-component/book-delete-component';
import { FashionComponent } from './fashion-component/fashion-component';
import { FashionDetailComponent } from './fashion-detail-component/fashion-detail-component';
import { FashionNewComponent } from './fashion-new-component/fashion-new-component';
import { FashionUpdateComponent } from './fashion-update-component/fashion-update-component';
import { FashionDeleteComponent } from './fashion-delete-component/fashion-delete-component';
import { LoginAuthComponent } from './login-auth-component/login-auth-component';

const routes: Routes = [
  { path: "learn-directive", component: ProductListComponent },
  { path: "product-dropdown-list", component: ProductDropdownListComponent },
  { path: "product-list-call-service", component: ProductListCallServiceComponent },
  { path: "product-list-call-http-service", component: ProductListCallHttpServiceComponent },
  { path: "service-product-image-event", component: ServiceProductImageEvent },
  { path: "service-product-image-event/:id", component: ServiceProductImageEventDetail },
  { path: 'product-catalog', component: ProductCatalog },
  { path: 'group-customers', component: GroupCustomers },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'products', component: ProductListAdvancedComponent },
  { path: 'search-product', component: ProductListSearchComponent },
  {
    path: 'sample-nested',
    component: ProductListAdvancedComponent,
    children: [
      { path: 'search', component: ProductListSearchComponent },
      { path: 'detail/:id', component: ProductDetailComponent },
    ]
  },
  { path: 'course-register', component: CourseRegistrationComponent },
  {
    path: 'lazyinfo',
    loadComponent: () =>
      import('./lazy-component/lazy-component').then((c) => c.LazyComponent),
    canActivate: [authGuard],
  },
  { path: 'course-reactive-register', component: CourseRegistrationReactiveComponent },
  { path: 'login', component: LoginComponent },
  { path: 'fakeproducts', component: FakeProductComponent },
  { path: "fakeproducts2", component: FakeProductComponent2 },
  { path: 'book-list', component: BooksComponent },
  { path: 'book-detail', component: BookDetailComponent }, 
  { path: 'book-new', component: BookNewComponent },     
  {path: 'book-update', component: BookUpdateComponent},  
  {path: 'book-delete', component: BookDeleteComponent},
  {path: 'fashion-list', component: FashionComponent},
  {path: 'fashion-detail/:slug', component: FashionDetailComponent},
  {path: 'fashion-detail', component: FashionDetailComponent},
  {path: 'fashion-new', component: FashionNewComponent},
  {path: 'fashion-update', component: FashionUpdateComponent},
  {path: 'fashion-delete', component: FashionDeleteComponent},
  {path: 'login-auth', component: LoginAuthComponent},
  { path: 'contacts', component: Contact },
  { path: '', component: Contact },
  { path: '**', component: PageNotFoundComponent }         
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }