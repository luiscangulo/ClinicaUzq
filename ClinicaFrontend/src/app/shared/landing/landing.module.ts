import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingSharedRoutingModule } from './landing-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AngularMaterialModule } from 'src/app/core/components/angular-material.module';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    LandingSharedRoutingModule,
    AngularMaterialModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent
  ]
})
export class LandingSharedModule { }