import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService, UserServiceInterface } from 'src/app/core/services/user.service';
import { Location } from '@angular/common';
import { Router} from '@angular/router';

@Component({
  selector: 'app-auth-dialog',
  templateUrl: './auth-dialog.component.html',
  styleUrls: ['./auth-dialog.component.scss']
})
export class AuthDialogComponent implements OnInit {

  inscriptionForm: FormGroup = new FormGroup({
    'userName': new FormControl('', [Validators.required, Validators.minLength(6)]),
    'email': new FormControl('', [Validators.required, Validators.email]),
    'password': new FormControl('', [Validators.required, Validators.minLength(8)])
    })

  connexionForm : FormGroup = new FormGroup({
    'userName': new FormControl('', Validators.required),
    'password': new FormControl('', Validators.required)
  });

  isPasswordVisible: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<AuthDialogComponent>,
   @Inject(UserService) private userService : UserServiceInterface,
   @Inject(Location) private location: Location,
   @Inject(Router) private router: Router,
  ) { }

  ngOnInit() {

  }


  submitInscription(){
    if(this.inscriptionForm.valid){
      this.userService.register(
        this.inscriptionForm.get('userName').value,
        this.inscriptionForm.get('email').value,
        this.inscriptionForm.get('password').value
        ).subscribe(response => {
          localStorage.setItem("user", JSON.stringify(response));   
          this.router.navigate(['dashboard']);
          this.dialogRef.close();
        }, error => {
          console.log("error inscription");
        })
    }
  }

  submitConnexion(){
    if(this.connexionForm.valid) {
      this.userService.login(
        this.connexionForm.get('userName').value,
        this.connexionForm.get('password').value
        ).subscribe(response => {
          localStorage.setItem("user", JSON.stringify(response));   
          this.router.navigate(['dashboard']);
          this.dialogRef.close();
          //this.location.go('/dashboard');

        }, error => {
          console.log("error identitifcation");
        })
    }
  }

  togglePasswordVisibilty(){
    return this.isPasswordVisible = !this.isPasswordVisible;
  }

}
