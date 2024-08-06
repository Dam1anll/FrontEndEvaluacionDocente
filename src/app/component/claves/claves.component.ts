import { Component, OnInit } from '@angular/core';
import { topcardsclaves, topcard } from './claves-cards-data';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-claves',
  standalone: false,
  templateUrl: './claves.component.html',
  styleUrl: './claves.component.scss',
})
export class ClavesComponent implements OnInit{

  topcards:topcard[];

  constructor() { 

    this.topcards=topcardsclaves;
  }

  ngOnInit(): void {
  }
}
