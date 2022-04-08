import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingSharedModule } from 'src/app/shared/landing/landing.module';
import { LandingRoutingModule } from './landing-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { AngularMaterialModule } from 'src/app/core/components/angular-material.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    LandingSharedModule,
    AngularMaterialModule
  ],
  exports:[
    HomeComponent,
    LandingSharedModule
  ]
})
export class LandingModule { }