import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AccountComponent } from '../account/account.component';


@Component({
  selector: 'app-mescomptes',
  templateUrl: './mescomptes.component.html',
  styleUrls: ['./mescomptes.component.css']
})
export class MescomptesComponent implements OnInit {

  rows = [
    {
      "Id" : "1",
      "N° du compte":"2361498625362232",
      "Type de compte" : "Etudiant",
      "Montant" : "2000dhs",
      "Date d'ouverture":"10-02-2019",
      "Etat" : "Active",
      
    },
    {
      "Id" : "2",
      "N° du compte":"236149864612232",
      "Type de compte" : "Personnel",
      "Montant" : "5000dhs",
      "Date d'ouverture":"10-02-2019",
      "Etat" : "Active",
    },
  ]
  headers = ["Id", "N° du compte ","Type de compte","Montant","Date d'ouverture","Etat"];
  constructor(private route:Router,
    private dialog:MatDialog) { }

  ngOnInit(): void {
  }


  ajouter(){
    this.dialog.open(AccountComponent);
  }
}
