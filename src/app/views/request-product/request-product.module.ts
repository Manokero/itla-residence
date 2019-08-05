import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { ChartsModule } from "ng2-charts/ng2-charts";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ButtonsModule } from "ngx-bootstrap/buttons";

import { RequestProductComponent } from "./request-product.component";
import { RequestProductRoutingModule } from "./request-product-routing.module";
import { RequestProductListComponent } from "./request-product-list.component";

@NgModule({
  imports: [
    FormsModule,
    RequestProductRoutingModule,
    ChartsModule,
    BsDropdownModule,
    CommonModule,
    ButtonsModule.forRoot()
  ],
  declarations: [RequestProductComponent, RequestProductListComponent]
})
export class RequestProductModule {}
