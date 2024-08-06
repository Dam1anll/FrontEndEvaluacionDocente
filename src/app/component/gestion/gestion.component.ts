import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-gestion',
  standalone: false,
  templateUrl: './gestion.component.html',
  styleUrl: './gestion.component.scss'
})
export class GestionComponent {
  date: Date;

  constructor() {
    this.date = new Date(); // Inicializa la fecha con la fecha actual
  }
}
