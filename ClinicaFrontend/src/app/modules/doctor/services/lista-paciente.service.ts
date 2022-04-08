import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListaPacienteService {

  constructor(private http: HttpClient) { }

  getPacientes(): Observable<any>
  {
    return this.http.get<any>('Paciente');
  }
}
