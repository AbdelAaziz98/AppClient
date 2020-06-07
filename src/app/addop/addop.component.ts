import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-addop',
  templateUrl: './addop.component.html',
  styleUrls: ['./addop.component.css']
})
export class AddopComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private fb : FormBuilder,private route: Router) { }

  ngOnInit(): void {
    this.signupForm=this.fb.group({
      numcomp: [],
      nomem: [],
      nomdest: [],
      datedepot: [],
      montant:[],
      cin:[],
         
  
    });
  }


  signup(){
    console.log('Données de formulaire ...',this.signupForm.value);
  }

}
