import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendarCitaComponent } from './pages/agendar-cita/agendar-cita.component';
import { CitasComponent } from './pages/citas/citas.component';
import { HistorialComponent } from './pages/historial/historial.component';
import { ListaPacienteComponent } from './pages/lista-paciente/lista-paciente.component';

const routes: Routes = [
{
  path:'',
  children:[
    {path:'historial', component:HistorialComponent},
    {path:'agendar-cita', component:AgendarCitaComponent},
    {path:'citas', component:CitasComponent},
    {path:'pacientes', component:ListaPacienteComponent}
  ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }