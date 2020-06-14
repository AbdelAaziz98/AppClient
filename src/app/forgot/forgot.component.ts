import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {  AuthenticationService } from '../_services';
import { first } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import {PassmegComponent} from '../passmeg/passmeg.component';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error: string;


  constructor(private router: Router,
    public password: MatDialog,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private authentificationService: AuthenticationService) {

     }



     ngOnInit(): void {
      this.loginForm = this.formBuilder.group({
        email:['',Validators.required],
        username: ['', Validators.required],
        password: ['', Validators.required],
      });

      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    get f(){ return this.loginForm.controls; }
    onSubmit(){
      this.submitted = true;
      if (this.loginForm.invalid){
        return;
      }

      this.loading = true;
      this.authentificationService.authenticationService( this.f.username.value, this.f.password.value)
           .pipe(first())
           .subscribe(
             data => {
               this.router.navigate([this.returnUrl]);
             },
             error =>{
                this.error = error;
                this.loading = false;

             });


            }

    onPass(){
      this.password.open(PassmegComponent);
    }
          }










