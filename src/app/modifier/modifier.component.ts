import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CompteserviceService } from '../compteservice.service';
import { ClientdataService } from '../clientdata.service';


@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private fb : FormBuilder,private comptData:ClientdataService) { }

  ngOnInit(): void {this.signupForm=this.fb.group({
  Nom: [],
  email: [],
  datenaissance:[],
  cin: [],
  datedajout: [],
  numtel: [],
     

});
  }
  signup(){
    console.log('Données de formulaire ...',this.signupForm.value);
  }
  updateclient(){
     this.comptData.setname(JSON.stringify(this.signupForm.get('Nom').value));
  this.comptData.setemail(JSON.stringify(this.signupForm.get('email').value));

  //this.cAjout.setdatenassance(JSON.stringify(this.signupForm.get(' datenaissance').value));
  this.comptData.setcin(JSON.stringify(this.signupForm.get('cin').value));

  this.comptData.settel(JSON.stringify(this.signupForm.get('numtel').value));
 
  }

}

/*
Modifi(){

}

downloadpdf(){
 
}

*/


