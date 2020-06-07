import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientdataService } from '../clientdata.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  form:FormGroup;
  constructor(private fb : FormBuilder,
    private route: Router,
    private cAjout:ClientdataService) { }

  ngOnInit(): void {

    this.form=this.fb.group({
    
        montant:[]
           
    })
  }

  signup(){
    console.log('Données de formulaire ...',this.form.value);
  }

}
