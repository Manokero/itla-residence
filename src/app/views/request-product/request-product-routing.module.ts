import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequestProductComponent } from './request-product.component';
import { RequestProductListComponent } from './request-product-list.component';

const routes: Routes = [
  {
    path: 'create',
    component: RequestProductComponent,
    data: {
      title: 'Peticion de producto'
    }
  },
  {
    path: 'list',
    component: RequestProductListComponent,
    data: {
      title: 'Lista de peticiones'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestProductRoutingModule {}
