import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ChartsModule } from "ng2-charts/ng2-charts";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { CommonModule } from "@angular/common";
import { ButtonsModule } from "ngx-bootstrap/buttons";

import { HoraryRoutingModule } from "./horary-routing.module";

import { CreateHoraryComponent } from "./create-horary.component";

@NgModule({
  imports: [
    FormsModule,
    HoraryRoutingModule,
    ChartsModule,
    BsDropdownModule,
    CommonModule,
    ButtonsModule.forRoot()
  ],
  declarations: [CreateHoraryComponent]
})
export class HoraryModule {}
