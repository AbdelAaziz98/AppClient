import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {  AuthentificationService } from '../_services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string ='/agent';
  error: string;
  

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private authentificationService: AuthentificationService) {
                if(this.authentificationService.currentUserValue){
                  this.router.navigate(['/']);
                }
               }

  

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f(){ return this.loginForm.controls; }
  onSubmit(){

    console.log(this.returnUrl);

    this.submitted = true;
    if (this.loginForm.invalid){
      return;
    }
    

    this.loading = true;
    if(this.f.username.value != "" && this.f.password.value != "")
    {
      console.log("ok");
      this.router.navigate(['/agent']);
    }
    this.authentificationService.login(this.f.username.value, this.f.password.value)
         .pipe(first())
         .subscribe(
           data => {
             console.log("sucessss");
             this.router.navigate([this.returnUrl]);
           },
           error =>{
             console.log("errooooor");
              //this.error = error;
              this.loading = false;
              
           });
           
         
          }
          
        }