import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionUserComponent } from './connexion-user/connexion-user.component';
import { RegistrationUserComponent } from './registration-user/registration-user.component';
import { ConnexionAdminComponent } from './connexion-admin/connexion-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './DashboardVue/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ConfirmedPasswordComponent } from './confirmed-password/confirmed-password.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { GererComponent } from './DashboardVue/GererProduitComponents/ManageProduct/gerer.component';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AjouterComponent } from './DashboardVue/GererProduitComponents/AddProduct/ajouter.component';
import { ConsulterComponent } from './DashboardVue/GererProduitComponents/CheckProducts/consulter.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ModifierComponent } from './DashboardVue/GererProduitComponents/UpdateProduct/modifier.component';
import { CommonModule } from '@angular/common';
import { GerervendeurComponent } from './DashboardVue/GererVendeurComponents/gerervendeur/gerervendeur.component';


@NgModule({
  declarations: [
    AppComponent,
    ConnexionUserComponent,
    RegistrationUserComponent,
    ConnexionAdminComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    ConfirmedPasswordComponent,
    GererComponent,
    AjouterComponent,
    ConsulterComponent,
    ModifierComponent,
    GerervendeurComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatTabsModule,
    MatCardModule,
    MatDialogModule,
    CommonModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
