import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject, Subscription, catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}
  authSubject = new BehaviorSubject(null);
  error: '';
  signUp(val) {
    this.http
      .post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCvtLOEiXp2Z05x31Xxg1R6P4-6sVwRCxk',
        val
      )
      .pipe(
        catchError((err, caught) => {
          console.log(err);
          //return caught; //in case we need to redo the request
          return null; //in case we need to do it only once
        })
      )
      .subscribe((result) => {
        this.authSubject.next(result);
        this.router.navigate(['/recipes']);
      });
  }
  signIn(val) {
    this.http
      .post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCvtLOEiXp2Z05x31Xxg1R6P4-6sVwRCxk',
        val
      )
      .pipe(
        catchError((err, caught) => {
          console.log(err);
          //return caught; //in case we need to redo the request
          return null; //in case we need to do it only once
        })
      )
      .subscribe((result) => {
        this.authSubject.next(result);
        this.router.navigate(['/recipes']);
      });
  }
}
