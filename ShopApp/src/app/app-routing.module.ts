import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductdescriptionComponent } from './productdescription/productdescription.component';


const routes: Routes = [
  {path: '', redirectTo: '/productlist', pathMatch: 'full'},
  {path: 'productlist',component: ProductlistComponent},
  {path: ':productName/:id', component: ProductdescriptionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
