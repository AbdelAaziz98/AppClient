import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';

import { ForgotComponent } from './forgot/forgot.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EmailComponent } from './email/email.component';
import { ClientsComponent } from './clients/clients.component';

import { ComptesComponent } from './comptes/comptes.component';

import { ClientprofileComponent } from './clientprofile/clientprofile.component';
import { ConsulterComponent } from './consulter/consulter.component';
import { OperationComponent } from './operation/operation.component';
import { ActiverComponent } from './activer/activer.component';
import { AccountComponent } from './account/account.component';
import { SuspendreComponent } from './suspendre/suspendre.component';
import { DeleteComponent } from './delete/delete.component';
import { ConsultercompteComponent } from './consultercompte/consultercompte.component';
import { ContactComponent } from './contact/contact.component';



const routes: Routes = [
  {path:'', redirectTo:'/login',pathMatch:'full'},
  { path: 'login', component: LoginComponent },
  { path: 'forgot', component:ForgotComponent},
  {path:'agent',component:NavbarComponent,
      children:[
        {path:'logout',redirectTo:'/login',pathMatch:'full'},
        {path:'email',component:EmailComponent},
        {path:'client',component:ClientsComponent},
        {path:'operation',component:OperationComponent},
        {path:'compte',component:ComptesComponent},
        {path:'contact',component:ContactComponent},
        {path:'profileclient',component:ClientprofileComponent},
        {path:'consulter',component:ConsulterComponent},
        {path:'consultercompte',component:ConsultercompteComponent},
        {path:'active',component:ActiverComponent},
        {path:'account',component:AccountComponent},
        {path:'suspendre',component:SuspendreComponent},
        {path:'delete',component:DeleteComponent}

        
      ]
    },

 

  
];

export const appRoutingModule = RouterModule.forRoot(routes);
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
