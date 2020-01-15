import { Injectable } from '@angular/core';


import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from "@angular/fire/firestore";
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: firebase.User;

  constructor(
    public afAuth: AngularFireAuth,
    public afs: AngularFirestore 
  ) {
    afAuth.authState.subscribe(user => {
      this.user = user;
    });
   }

  async login() {
    try {
      const user = await  this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
      await this.afs.collection('users').doc(user.user.uid).set(
        {
          displayName: user.user.displayName,
          email: user.user.email,
          photoURL: user.user.photoURL,
          uid: user.user.uid
        }
      );
    } catch (error) {
      console.log(error);
    }
  }
  logout() {
    this.afAuth.auth.signOut();
  }

  statusLogin(){
    return this.user;
  }

}
