import { Component, OnInit } from '@angular/core';
import { topcardsresultados, topcard } from './resultados-cards-data';

@Component({
  selector: 'app-resultados',
  standalone: false,
  templateUrl: './resultados.component.html',
  styleUrl: './resultados.component.scss'
})
export class ResultadosComponent implements OnInit {
    
  topcards:topcard[];

  constructor() { 

    this.topcards=topcardsresultados;
  }

  ngOnInit(): void {
  }

}
