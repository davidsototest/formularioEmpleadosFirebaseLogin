import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import firebase from 'firebase/compat/app';
import { LoginService } from './login/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private loginService:LoginService){

  }
  ngOnInit(): void{
    firebase.initializeApp({
      apiKey: "AIzaSyBLpP8JxM5kCz1UJxWWcdMJASN6hnWumbA",
      authDomain: "testpildoras.firebaseapp.com",
    });
  }

  estaLogueado(): string{
    return this.loginService.estaLogueado();
  }

  logout(){
    this.loginService.logout();
  }

}
