import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  authSubject = new BehaviorSubject(null);
  signUp(val) {
    this.http
      .post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCvtLOEiXp2Z05x31Xxg1R6P4-6sVwRCxk',
        val
      )
      .subscribe((result) => {
        this.authSubject.next(result);
      });
  }
  signIn(val) {
    this.http
      .post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCvtLOEiXp2Z05x31Xxg1R6P4-6sVwRCxk',
        val
      )
      .subscribe((result) => {
        this.authSubject.next(result);
        localStorage.setItem('userAuth', JSON.stringify(result));
      });
  }
}
