import { Component, OnInit } from '@angular/core';

import { AddopComponent } from '../addop/addop.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit {

  todayDate : Date = new Date();
  headers = ["CIN", "Nom de client","Téléphone","Opération","Destinataire", "Montant"];
  constructor( private dialog: MatDialog ) { }

  ngOnInit(): void {
  }

  rows = [
    {
      "CIN" : "EA217122",
      "Nom de client" : "Salma Tajbel",
      "Téléphone" : "0676164843",
      "Opération":"Virement",
      "Destinataire" : "Sanae Alaoui",
      "Montant":"3000dhs",
    },
    {
      "CIN" : "EA217152",
      "Nom de client" : "Rania Mouali",
      "Téléphone" : "0625698183",
      "Opération":"Virement" ,
      "Destinataire" : "Sanae Alaoui",
      "Montant":"2000dh",
    },
  ]
 

  op(){
    this.dialog.open(AddopComponent);
  }
}
