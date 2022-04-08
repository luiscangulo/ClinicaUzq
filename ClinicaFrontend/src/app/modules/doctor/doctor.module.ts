import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { ListaPacienteComponent } from './pages/lista-paciente/lista-paciente.component';
import { CrearPacienteComponent } from './pages/crear-paciente/crear-paciente.component';
import { HistorialComponent } from './pages/historial/historial.component';
import { CrearHistorialComponent } from './pages/crear-historial/crear-historial.component';
import { CitasComponent } from './pages/citas/citas.component';
import { AgendarCitaComponent } from './pages/agendar-cita/agendar-cita.component';
import { ListaDoctorComponent } from './pages/lista-doctor/lista-doctor.component';
import { CrearDoctorComponent } from './pages/crear-doctor/crear-doctor.component';
import { AdminModule } from 'src/app/shared/admin/admin.module';
import { LandingSharedModule } from 'src/app/shared/landing/landing.module';
import { AngularMaterialModule } from 'src/app/core/components/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//import { CitaService } from './services/cita.service';
import { ListaPacienteService } from './services/lista-paciente.service';
import { LandingSharedRoutingModule } from 'src/app/shared/landing/landing-routing.module';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    ListaPacienteComponent,
    CrearPacienteComponent,
    HistorialComponent,
    CrearHistorialComponent,
    CitasComponent,
    AgendarCitaComponent,
    ListaDoctorComponent,
    CrearDoctorComponent
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    LandingSharedRoutingModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdminModule,
   

    LandingSharedModule,

  ],
  providers: [
    ListaPacienteService
  ],
  exports:[
    ListaPacienteComponent,
    CrearPacienteComponent,
    HistorialComponent,
    CrearHistorialComponent,
    CitasComponent,
    AgendarCitaComponent,
    ListaDoctorComponent,
    CrearDoctorComponent]

})
export class DoctorModule { }