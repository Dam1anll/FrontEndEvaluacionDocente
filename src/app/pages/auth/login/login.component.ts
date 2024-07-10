import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { FunctionsService } from 'src/app/services/functions.service';
import { ValidationService } from 'src/app/services/validation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: any;
  loading: boolean | undefined;
  isStudent: boolean = false;

  constructor(
    public api: ApiService,
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private fun: FunctionsService
  ) {
    if (this.auth.is_login) {
      this.navigate();
    }
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, ValidationService.emailValidator]],
      password: ['', Validators.required],
      matricula: [''], // Añadir el campo matrícula
      isStudent: [false] // Añadir el campo para indicar si es estudiante
    });
  }

  toggleRole(event: any) {
    this.isStudent = event.target.checked;
    this.form.controls['isStudent'].setValue(this.isStudent);
    if (this.isStudent) {
      this.form.controls['email'].clearValidators();
      this.form.controls['email'].updateValueAndValidity();
      this.form.controls['matricula'].setValidators([Validators.required]);
    } else {
      this.form.controls['matricula'].clearValidators();
      this.form.controls['matricula'].updateValueAndValidity();
      this.form.controls['email'].setValidators([Validators.required, ValidationService.emailValidator]);
    }
  }

  submit() {
    if (this.form.dirty && this.form.valid) {
      this.login();
    } else {
      for (let i in this.form.controls) this.form.controls[i].markAsTouched();
    }
  }

  login() {
    this.loading = true;
    this.api.post_('auth/users', this.form.value).subscribe({
      complete: () => { },
      error: (error) => {
        this.loading = false;
        console.error("Error in login:", error);
        this.fun.presentAlertError("Error", error.error.message);
      },
      next: (response) => {
        this.loading = false;
        this.auth.setLogin(response);
        this.navigate();
      },
    });
  }

  navigate() {
    const user = this.auth.getUser();
    if (user.role === 'ADMIN' || user.role === 'LIBRARIAN') {
      this.router.navigateByUrl('/dashboard');
    } else if (user.role === 'STUDENT') {
      this.router.navigateByUrl('/student-dashboard'); // Ajusta la ruta según sea necesario
    }
  }
}
