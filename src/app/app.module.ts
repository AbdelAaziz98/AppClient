import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import{MatIconModule}from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { from } from 'rxjs';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavbarComponent } from './navbar/navbar.component';
import{ MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { ForgotComponent } from './forgot/forgot.component';
import { EmailComponent } from './email/email.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

import { DatePipe } from '@angular/common';


import { AddclientComponent } from './addclient/addclient.component';
import { FormsModule } from '@angular/forms';
import { MatDialogModule,MatDialog ,MatDialogRef  } from '@angular/material/dialog';

import { AddopComponent } from './addop/addop.component';


import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ClientsComponent } from './clients/clients.component';

import { ComptesComponent } from './comptes/comptes.component';
import { PassmegComponent } from './passmeg/passmeg.component';
import { ClientprofileComponent } from './clientprofile/clientprofile.component'
import { ClientdataService } from './clientdata.service';
import { ConsulterComponent } from './consulter/consulter.component';
import { OperationComponent } from './operation/operation.component';
import { AccountComponent } from './account/account.component';
import { DeleteComponent } from './delete/delete.component';
import { SuspendreComponent } from './suspendre/suspendre.component';
import { ActiverComponent } from './activer/activer.component';

import {MatRadioModule} from '@angular/material/radio';
import { ModifierComponent } from './modifier/modifier.component';
import { MescomptesComponent } from './mescomptes/mescomptes.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ConsultercompteComponent } from './consultercompte/consultercompte.component';
import { ModifiercompteComponent } from './modifiercompte/modifiercompte.component';
import { ReponseComponent } from './reponse/reponse.component';
import { ContactComponent } from './contact/contact.component';
import {HttpInterceptorService} from "./_services/http-interceptor.service";
import {AuthGuard} from "./auth.guard";




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotComponent,
    NavbarComponent,
    EmailComponent,
    AddclientComponent,
    AddopComponent,

    ClientsComponent,

    ComptesComponent,
    PassmegComponent,
    ClientprofileComponent,
    ConsulterComponent,
    OperationComponent,
    AccountComponent,
    DeleteComponent,
    SuspendreComponent,
    ActiverComponent,
    ModifierComponent,
    MescomptesComponent,
    ConsultercompteComponent,
    ModifiercompteComponent,
    ReponseComponent,
    ContactComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatDialogModule,
    MatToolbarModule,
    MDBBootstrapModule,
    MatButtonModule,
    MatSidenavModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
    MatRadioModule
  ],
  providers:[
    ClientdataService,AuthGuard,
    {
    provide: HTTP_INTERCEPTORS,
    useClass:HttpInterceptorService,
    multi: true
  }
  ],
  bootstrap: [AppComponent],
  entryComponents: [AddclientComponent,AddopComponent ,PassmegComponent,ModifiercompteComponent],
})
export class AppModule { }
