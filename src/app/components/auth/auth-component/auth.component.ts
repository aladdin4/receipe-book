import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth-component',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  constructor(private fb: FormBuilder, private http: HttpClient) {}
  authForm = this.fb.group({
    email: [
      '',
      [
        Validators.required,
        // Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
      ],
    ],
    password: [
      '',
      [
        Validators.required,
        // Validators.pattern( /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),
      ],
    ],
  });

  signUp() {
    console.log(this.authForm.value);
    this.http
      .post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCvtLOEiXp2Z05x31Xxg1R6P4-6sVwRCxk',
        this.authForm.value
      )
      .subscribe();
  }
}
