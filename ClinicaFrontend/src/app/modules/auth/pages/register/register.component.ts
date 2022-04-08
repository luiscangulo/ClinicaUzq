import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {
  Roles: any = ['Admin', 'Doctor', 'Paciente'];
  constructor() { }

  ngOnInit(): void {
  }

}