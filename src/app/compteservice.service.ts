import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompteserviceService {
  name:string;
  email:string;
  cin:string;
  Datedenaissance :string;    
  Telephone:string;
  Numcompte:string;
  solde:string;
  datedajout :string;    

  constructor(){}
 /*
  constructor( _name:string,
    pemail:string,
    pcin:string,
    pDatedenaissance :string,    
    pTelephone:string,
    pNumcompte:string,
    pdatedajout:string){

     this.name=_name;
     this.email=pemail;
     this.cin=pcin;
     this.Datedenaissance=pDatedenaissance;
     this.Telephone=pTelephone;
     this.Numcompte=pNumcompte;
     this.datedajout=pdatedajout

  }
*/
setdatedajout(p:string){
  this.datedajout=p;
}
getdatedajout(){
  return this.datedajout;
}

  setname(p:string){
    this.name=p;
  }
  getname(){
    return this.name
  }
  setcin(p:string){
    this.cin=p;
  }
  getcin(){
    return this.cin
  }
  setdatenassance(p:string){
    this.Datedenaissance=p;
  }
  getdatenaissance(){
    return this.Datedenaissance
  }
  setccompt(p:string){
    this.Numcompte=p;
  }
  getcmpte(){
    return this.Numcompte
  }
  settel(p:string){
    this.Telephone=p;
  }
  gettel(){
    return this.Telephone
  }
  getemail(){
    return this.email
  }

  setemail(p:string){
    this.email=p;
  }
  setsolde(p:string){
    this.cin=p;
  }
  getsolde(){
    return this.cin
  }
 

  
}
