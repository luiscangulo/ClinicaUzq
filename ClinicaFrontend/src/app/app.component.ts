import { Component } from '@angular/core';
import { ListaPacienteService } from './modules/doctor/services/lista-paciente.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ListaPacienteService]
})
export class AppComponent {
  title = 'ClinicaFrontend';
  constructor(private listPac: ListaPacienteService) {}
  ngOnInit() {
    this.listPac.getPacientes().subscribe((res) =>{
      console.log('Res ', res);
    });
  }
  
}
