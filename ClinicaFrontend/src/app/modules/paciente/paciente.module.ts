import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacienteRoutingModule } from './paciente-routing.module';
import { AdminModule } from 'src/app/shared/admin/admin.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PacienteRoutingModule,
    AdminModule
  ]
})
export class PacienteModule { }