import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'shpng-nav',
  templateUrl: './shpng-nav.component.html',
  styleUrls: ['./shpng-nav.component.css']
})
export class ShpngNavComponent  {

  user: firebase.User;

  constructor(private auth: AuthService,private afauth:AngularFireAuth) {
    afauth.authState.subscribe(user=>this.user=user);
   }

  logOut()
  {
   this.auth.logOut();
  }
}
