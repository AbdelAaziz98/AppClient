import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { first } from 'rxjs/operators';
import {AuthenticationService} from "../_services";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
    username: string;
    password : string;
    errorMessage = 'Invalid Credentials';
    successMessage: string;
    invalidLogin = false;
    loginSuccess = false;


  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private authentificationService: AuthenticationService) {

               }



  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });


  }

  get f(){ return this.loginForm.controls; }
  onSubmit(){

        this.authentificationService.authenticationService(this.f.username.value, this.f.password.value).subscribe((result)=> {
          this.invalidLogin = false;
          this.loginSuccess = true;
          this.successMessage = 'Login Successful.';
          this.router.navigate(['/agent']);
        }, () => {
          this.invalidLogin = true;
          this.loginSuccess = false;
        });


          }

        }
