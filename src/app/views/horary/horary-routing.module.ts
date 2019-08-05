import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateHoraryComponent } from './create-horary.component';

const routes: Routes = [
  {
    path: '',
    component: CreateHoraryComponent,
    data: {
      title: 'Crear Horario'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HoraryRoutingModule {}
