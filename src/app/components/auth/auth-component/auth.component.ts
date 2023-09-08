import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/authService/auth-service.service';

@Component({
  selector: 'app-auth-component',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit, OnDestroy {
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private auth: AuthService
  ) {}

  authSubscription: Subscription;
  ngOnInit(): void {
    this.authSubscription = this.auth.authSubject.subscribe();
  }
  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }

  authForm = this.fb.group({
    email: [
      'aa2@aa.com',
      [
        Validators.required,
        // Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
      ],
    ],
    password: [
      'hnvhf_Qjvdfj!@#$%^&*()_+',
      [
        Validators.required,
        // Validators.pattern( /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),
      ],
    ],
  });

  signUp() {
    this.auth.signUp(this.authForm.value);
  }
  signIn() {
    this.auth.signIn({
      email: this.authForm.value.email,
      password: this.authForm.value.password,
      returnSecureToken: true,
    });
  }
}
