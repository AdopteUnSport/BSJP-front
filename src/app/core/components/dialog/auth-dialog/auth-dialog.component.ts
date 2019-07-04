import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth-dialog',
  templateUrl: './auth-dialog.component.html',
  styleUrls: ['./auth-dialog.component.scss']
})
export class AuthDialogComponent implements OnInit {

  inscriptionForm: FormGroup = new FormGroup({
    'login': new FormControl('', [Validators.required, Validators.minLength(6)]),
    'email': new FormControl('', [Validators.required, Validators.email]),
    'password': new FormControl('', [Validators.required, Validators.minLength(8)])
    })

  connexionForm : FormGroup = new FormGroup({
    'email': new FormControl('', [Validators.required, Validators.email]),
    'password': new FormControl('', Validators.required)
  });

  constructor() { }

  ngOnInit() {
  }


  submitInscription(){
    console.log(this.inscriptionForm.value);
  }

  submitConnexion(){
    console.log(this.connexionForm.value);
  }

}
