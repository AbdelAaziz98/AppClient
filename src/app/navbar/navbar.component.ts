import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { from } from 'rxjs';


import { AddopComponent } from '../addop/addop.component';
import { EmailComponent } from '../email/email.component';
import {AuthenticationService} from "../_services";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
position="";
username:string;
  constructor(private router: Router, private dialog: MatDialog ,private authen:AuthenticationService) { }

  ngOnInit(): void {
    this.position=this.router.url;

  }
  /*
  gotoform(){
    this.router.navigate(['/clients']);

  }*/


  email(){
    this.router.navigate(["agent/email"]);
  }


  handleLogout(){
    this.authen.logout();
  }



  }


