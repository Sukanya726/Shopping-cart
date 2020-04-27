import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private afauth: AngularFireAuth) {
    
   }

  login()
  {
    this.afauth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }
  logOut()
  {
  this.afauth.signOut();
  }
}
