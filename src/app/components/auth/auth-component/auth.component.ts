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

  onSubmit() {
    console.log(this.authForm.value);
    this.http.post('api key sign up', this.authForm.value).subscribe();
  }
}
