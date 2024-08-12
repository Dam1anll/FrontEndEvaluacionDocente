import { Component, OnInit } from '@angular/core';
import { topcardsresultados, topcard } from './resultados-cards-data';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { Message, MessageService } from 'primeng/api';

@Component({
  selector: 'app-resultados',
  standalone: false,
  templateUrl: './resultados.component.html',
  styleUrl: './resultados.component.scss',
  providers: [MessageService]
})
export class ResultadosComponent implements OnInit {
    
  topcards:topcard[];

  selectedCarrera: string;

  visible: boolean = false;

  // Modal Carreras
  isModalOpen: boolean = false;
  isEditMode: boolean = false;

  //Modal Procesos
  visibleProcesos: boolean = false;
  isModalOpenProcesos: boolean = false;

  form: any;
  note: Message[] = [];
  noteProcesos: Message[] = [];

  constructor(
    private formBuilder: UntypedFormBuilder,
    private messageService: MessageService
  ) {
    this.topcards = topcardsresultados;
    this.selectedCarrera = '';
  }

  ngOnInit(): void {
    this.note = [{ severity: 'info', detail: 'Seleccione una carrera.' }];
    this.noteProcesos = [{ severity: 'info', detail: 'Seleccione un proceso.' }];

    this.form = this.formBuilder.group({
      carrera: ['', Validators.required]
    });
  }

  showDialog() {
    this.visible = true;
    this.isModalOpen = true;
    this.form.reset();
  }

  hideDialog() {
    this.visible = false;
    this.isModalOpen = false;
    this.isEditMode = false;
    this.form.reset();
  }

  select() {
    if (this.form.dirty && this.form.valid) {
      this.save();
    } else {
      for (let i in this.form.controls) this.form.controls[i].markAsTouched();
    }
  }

  save() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Carrera seleccionada exitosamente' });
    this.hideDialog();
  }

  showDialogProcesos() {
    this.visibleProcesos = true;
    this.isModalOpenProcesos = true;
  }

  hideDialogProcesos() {
    this.visibleProcesos = false;
    this.isModalOpenProcesos = false;
  }

  selectProcesos() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Proceso seleccionado exitosamente' });
    this.hideDialogProcesos();
  }

}
