import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss'],
  providers: [MessageService]
})
export class GestionComponent implements OnInit {
  date: Date;
  visible: boolean = false;
  isModalOpen: boolean = false;
  form: any;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private messageService: MessageService
  ) {
    this.date = new Date();
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  // Initialize the form with default values and validators
  private initializeForm(): void {
    this.form = this.formBuilder.group({
      nombreProceso: ['', Validators.required],
      fechaInicial: ['', Validators.required],
      fechaFinal: ['', Validators.required],
      periodo: ['']
    });
  }

  // Show the dialog for creating a new process
  showDialog(): void {
    this.visible = true;
    this.isModalOpen = true;
    this.form.reset();
  }

  // Hide the dialog and reset the form
  hideDialog(): void {
    this.visible = false;
    this.isModalOpen = false;
    this.form.reset();
  }

  // Calculate the period based on the initial date
  calculatePeriod(): void {
    const fechaInicial = new Date(this.form.get('fechaInicial').value);
    if (fechaInicial) {
      const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
      const startMonth = monthNames[fechaInicial.getMonth()];
      const endMonth = monthNames[(fechaInicial.getMonth() + 3) % 12];
      this.form.get('periodo').setValue(`${startMonth}-${endMonth}`);
    }
  }

  // Create a new process if the form is valid
  createProcess(): void {
    if (this.form.valid) {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Proceso creado exitosamente' });
      this.hideDialog();
    } else {
      this.markFormControlsAsTouched();
    }
  }

  // Mark all form controls as touched to show validation errors
  private markFormControlsAsTouched(): void {
    for (let control in this.form.controls) {
      this.form.controls[control].markAsTouched();
    }
  }

  // Handle item click event
  onItemClick(item: string): void {
    console.log('Item clicked:', item);
  }
}