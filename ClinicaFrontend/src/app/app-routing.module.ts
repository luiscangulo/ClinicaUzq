import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'inicio',
    loadChildren:()=>import('./modules/landing/landing.module').then(m=>m.LandingModule)
  },
  {
    path:'auth',
    loadChildren:()=>import('./modules/auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path:'admin',
    loadChildren:()=>import('./modules/admin/admin.module').then(m=>m.AdminModule)
  },
  {
    path:'doctor',
    loadChildren:()=>import('./modules/doctor/doctor.module').then(m=>m.DoctorModule)
  },
  {
    path:'paciente',
    loadChildren:()=>import('./modules/paciente/paciente.module').then(m=>m.PacienteModule)
  },
  {
    path:'landing',
    loadChildren:()=>import('./modules/landing/landing.module').then(m=>m.LandingModule)
  },
  {
    path:'**',
    redirectTo:'inicio'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }