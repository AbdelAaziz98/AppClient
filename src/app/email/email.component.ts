import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { ReponseComponent } from '../reponse/reponse.component';
@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  todayDate : Date = new Date();
  headers = ["Nom","Email","Message"];
  constructor( private dialog: MatDialog,
    private router: Router ) { }

  ngOnInit(): void {
  }

  rows = [
    {
      "Nom":"Tajbel Salma",
      "Email":"salmatajbel@gmail.com",
      "Message":"Bonjour ..."
    },
    {
      "Nom":"Tajbel Salma",
      "Email":"salmatajbel@gmail.com",
      "Message":"Bonjour ..."
    },
  ]

  rep(){
    this.dialog.open(ReponseComponent);
  }

  email(){
    this.router.navigate(["agent/contact"]);
  }
}
