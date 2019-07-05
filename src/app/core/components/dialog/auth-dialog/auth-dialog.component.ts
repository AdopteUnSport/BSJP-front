import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService, UserServiceInterface } from 'src/app/core/services/user.service';

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
   @Inject(UserService) private userService : UserServiceInterface,
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
          console.log(response);
        })
    }
    
  }

  submitConnexion(){
    console.log(this.connexionForm.value);
    if(this.connexionForm.valid) {
      this.userService.login(
        this.connexionForm.get('userName').value,
        this.connexionForm.get('password').value
        ).subscribe(response => {
          console.log(response);
        })
    }
  }

  togglePasswordVisibilty(){
    return this.isPasswordVisible = !this.isPasswordVisible;
  }

}
