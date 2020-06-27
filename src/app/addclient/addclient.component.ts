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
  onAddClient(){


  }




}
