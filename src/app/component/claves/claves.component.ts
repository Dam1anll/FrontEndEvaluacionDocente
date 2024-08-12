import { Component, OnInit } from '@angular/core';
import { topcardsclaves, topcard } from './claves-cards-data';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { Message, MessageService } from 'primeng/api';

@Component({
  selector: 'app-claves',
  standalone: false,
  templateUrl: './claves.component.html',
  styleUrls: ['./claves.component.scss'],
  providers: [MessageService]
})
export class ClavesComponent implements OnInit {
  topcards: topcard[];
  selectedCarrera: string;
  visible: boolean = false;

  // Modal Carreras
  isModalOpen: boolean = false;
  isEditMode: boolean = false;

  // Modal Procesos
  visibleProcesos: boolean = false;
  isModalOpenProcesos: boolean = false;

  form: any;
  note: Message[] = [];
  noteProcesos: Message[] = [];

  constructor(
    private formBuilder: UntypedFormBuilder,
    private messageService: MessageService
  ) {
    this.topcards = topcardsclaves;
    this.selectedCarrera = '';
  }

  ngOnInit(): void {
    this.note = [{ severity: 'info', detail: 'Seleccione una carrera.' }];
    this.noteProcesos = [{ severity: 'info', detail: 'Seleccione un proceso.' }];

    this.form = this.formBuilder.group({
      carrera: ['', Validators.required]
    });
  }

  // Show dialog for selecting a career
  showDialog() {
    this.visible = true;
    this.isModalOpen = true;
    this.form.reset();
  }

  // Hide dialog for selecting a career
  hideDialog() {
    this.visible = false;
    this.isModalOpen = false;
    this.isEditMode = false;
    this.form.reset();
  }

  // Select a career
  select() {
    if (this.form.dirty && this.form.valid) {
      this.save();
    } else {
      for (let i in this.form.controls) this.form.controls[i].markAsTouched();
    }
  }

  // Save selected career
  save() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Carrera seleccionada exitosamente' });
    this.hideDialog();
  }

  // Show dialog for selecting a process
  showDialogProcesos() {
    this.visibleProcesos = true;
    this.isModalOpenProcesos = true;
  }

  // Hide dialog for selecting a process
  hideDialogProcesos() {
    this.visibleProcesos = false;
    this.isModalOpenProcesos = false;
  }

  // Select a process
  selectProcesos() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Proceso seleccionado exitosamente' });
    this.hideDialogProcesos();
  }
}