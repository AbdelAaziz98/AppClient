import { Component, OnInit } from '@angular/core';
import { DeleteComponent } from '../delete/delete.component';
import { ModifiercompteComponent } from '../modifiercompte/modifiercompte.component';
import { CompteserviceService } from '../compteservice.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-consultercompte',
  templateUrl: './consultercompte.component.html',
  styleUrls: ['./consultercompte.component.css']
})
export class ConsultercompteComponent implements OnInit {
  name:string;
  email:string;
  cin:string;
  Datedenaissance :string;    
  Telephone:string;
  Numcompte:string;
  solde:string;
  datedajout:string;

  constructor(private cAjout:CompteserviceService ,
    private router:Router ,
    private dialog:MatDialog) { }

  ngOnInit(): void {
    
    this.name =this.cAjout.getname();
  this.cin=this.cAjout.getcin();
  this.Datedenaissance=this.cAjout.getdatenaissance();
  this.Telephone=this.cAjout.gettel();
  this.solde=this.cAjout.getsolde();
  this.email=this.cAjout.getemail();
  this.Numcompte=this.cAjout.getcmpte();
  this.datedajout=this.cAjout.getdatedajout();
  }

  



  delete(){
    this.dialog.open(DeleteComponent);
  }


  modifier(){
    this.dialog.open(ModifiercompteComponent);
  }
    
}
  


