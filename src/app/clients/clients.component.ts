import { Component, OnInit, Output } from '@angular/core';
import { AddclientComponent } from '../addclient/addclient.component';
import {MatDialog} from '@angular/material/dialog';
import {Router} from '@angular/router';
import { EventEmitter } from 'events';
import { ClientdataService } from '../clientdata.service';
import { ClientprofileComponent } from '../clientprofile/clientprofile.component';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  todayDate : Date = new Date();
   cin:string='';
   c:string='';
   tab:Array<string>;
   rows = [
    {
      "CIN" : "SH217122",
      "Nom de client" : "Salma Tajbel",
      "Date de naissance":"10-10-1999",
      "Email" : "salmatajbel1789@hotmail.com",
      "Téléphone" : "0676164843",
      "N° du compte":"236149864612232",
     
      "Date d'ouverture":"10-02-2019",
    },
    {
      "CIN" : "EA217152",
      "Nom de client" : "Rania Mouali",
      "Date de naissance":"01-10-1995" ,
      "Email" : "raniamouali@hotmail.com",
      "Téléphone" : "0625698183",
      "N° du compte":"236149864612232",
      
      "Date d'ouverture":"10-02-2019",
    },
  ]
  durationInSeconds = 5;

  headers = ["CIN", "Nom de client","Date de naissance","Email","Téléphone", "N° du compte",  "Date d'ouverture"];
  constructor(private router: Router, private dialog: MatDialog, private cAjout: ClientdataService,private _snackBar: MatSnackBar ) {
   }
  ngOnInit(): void {    

  }
  goprofile()
{
  
  for(let row of this.rows){
    this.c=row.CIN;
    console.log(this.c,this.cin,"seront comparer")
console.log(typeof(row.CIN) === 'string');
console.log(typeof(this.cin) === 'string');
console.log(this.c == this.cin,this.cin===this.c, this.c.localeCompare(this.cin));


    if (this.cin == this.c) {
      this.cAjout.setname(row["Nom de client"]);
      this.cAjout.setcin(row.CIN);
      this.cAjout.setccompt(row["N° du compte"]);
      this.cAjout.setdatenassance(row["Date de naissance "]);
      this.cAjout.setdatedajout(row["Date d'ouverture"]);
      this.cAjout.setemail(row["Email"]);
      this.cAjout.settel(row.Téléphone);
      this.router.navigate(['agent/consulter']);

    }else{
      this._snackBar.openFromComponent(ClientprofileComponent, {
        duration: this.durationInSeconds * 1000,
      });

    }

  }
    
}

  onadd(){
    this.dialog.open(AddclientComponent);
  }

 

  

}