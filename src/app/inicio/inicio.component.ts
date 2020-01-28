import { Component, OnInit } from '@angular/core';
import { AuthService } from "../services/auth.service";
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(
    public auth: AuthService,
    private router: Router 
  ) { }

  ngOnInit() {
  }

  step = 0;

  setStep(index: number) {
    this.step = index;
  }


  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  

}
