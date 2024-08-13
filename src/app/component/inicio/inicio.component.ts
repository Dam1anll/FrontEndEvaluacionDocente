import { Component, OnInit } from '@angular/core';
import { topcardsinicio, topcard } from './inicio-cards-data';


@Component({
  selector: 'app-inicio',
  standalone: false,
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent implements OnInit{

  topcards:topcard[];

  constructor() { 

    this.topcards=topcardsinicio;
  }

  ngOnInit(): void {
  }
  
}
