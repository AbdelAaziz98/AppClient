import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import * as jsPDF from 'jspdf';
import { ClientdataService } from '../clientdata.service';


  
@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.css']
})
export class AddclientComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private fb : FormBuilder,private route: Router,     private cAjout: ClientdataService
    ) { }

  ngOnInit(): void {
  
  this.signupForm=this.fb.group({
    Nom: [],
    email: [],
    
    cin: [],
    datedajout: [],
    numtel: [],
       

  });
  } 


  signup(){
    console.log('Données de formulaire ...',this.signupForm.value);
  }
  downloadpdf(){
    this.cAjout.setname(JSON.stringify(this.signupForm.get('Nom').value));
    this.cAjout.setemail(JSON.stringify(this.signupForm.get('email').value));
    //this.cAjout.setdatenassance(JSON.stringify(this.signupForm.get(' datenaissance').value));
    this.cAjout.setcin(JSON.stringify(this.signupForm.get('cin').value));
    this.cAjout.setdatedajout(JSON.stringify(this.signupForm.get('datedajout').value));

    this.cAjout.settel(JSON.stringify(this.signupForm.get('numtel').value));
   
    const doc = new jsPDF();
    const data=JSON.stringify(this.signupForm.value);
    const name=JSON.stringify( this.signupForm.get('Nom').value );
    console.log("download is working ...",data);
    doc.text(20,20,'client ajouter ' );
    
    
    doc.save('client contrat.pdf');
    this.route.navigate(['agent/consulter']);
    
  }
  
  


}
