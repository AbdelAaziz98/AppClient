import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comptes',
  templateUrl: './comptes.component.html',
  styleUrls: ['./comptes.component.css']
})
export class ComptesComponent implements OnInit {
  todayDate=new Date;

  headers = ["CIN", "N° du compte","Propriétaire","Téléphone", "Ville d'ouverture", "Date d'ouverture"];
 
rows = [
    {
      "CIN" : "EA217122",
      "N° du compte":"236149864612232",
      "Propriétaire" : "Salma Tajbel",
      "Téléphone" : "0676164843",
      
      "Ville d'ouverture":"Benguerir",
      "Date d'ouverture":"10-02-2019",
    },
    {
      "CIN" : "EA217152",
      "N° du compte":"236149864612232",
      "Propriétaire" : "Rania Mouali",
      
      "Téléphone" : "0625698183",
      
      "Ville d'ouverture":"Benguerir",
      "Date d'ouverture":"10-02-2019",
    },
    

  ]
 constructor(private route:Router) { }
  ngOnInit(): void {
  }
  gotoacount(){
    this.route.navigate(['agent/consultercompte'])
    
  }

  
}
