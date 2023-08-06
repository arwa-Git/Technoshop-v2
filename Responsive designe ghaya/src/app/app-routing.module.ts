import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionUserComponent } from './connexion-user/connexion-user.component';
import { RegistrationUserComponent } from './registration-user/registration-user.component';
import { ConnexionAdminComponent } from './connexion-admin/connexion-admin.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './DashboardVue/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ConfirmedPasswordComponent } from './confirmed-password/confirmed-password.component';
import { GerervendeurComponent } from './DashboardVue/GererVendeurComponents/gerervendeur/gerervendeur.component';
import { GererComponent } from './DashboardVue/GererProduitComponents/ManageProduct/gerer.component';
import { AjouterComponent } from './DashboardVue/GererProduitComponents/AddProduct/ajouter.component';
import { ModifierComponent } from './DashboardVue/GererProduitComponents/UpdateProduct/modifier.component';
import { ConsulterComponent } from './DashboardVue/GererProduitComponents/CheckProducts/consulter.component';
import { ParametrecompteComponent } from './DashboardVue/settingsVendeurAdmin/parametrecompte/parametrecompte.component';
import { ParametreconsommateurComponent } from './DashboardVue/ConsumerComponents/parametreconsommateur/parametreconsommateur.component';
import { ParametreboutiqueComponent } from './DashboardVue/settingsVendeurAdmin/parametreboutique/parametreboutique.component';
import { MaSelectionComponent } from './DashboardVue/ConsumerComponents/ma-selection/ma-selection.component';

const routes: Routes = [
 // {path:'',component:AppComponent},
  {path:'ConnexionUser',component:ConnexionUserComponent},
  {path:'RegistrationUser',component:RegistrationUserComponent},
  {path:'ConnexionAdmin',component:ConnexionAdminComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'forgotPassword',component:ForgotPasswordComponent},
  {path:'reset',component:ConfirmedPasswordComponent},

  {
    path: '',
    component: DashboardComponent,
    children: [
      // gerer vendeur un seul component btbi3to 
      { path: 'gerervendeur', component: GerervendeurComponent },
   //   { path: '', redirectTo: 'gererProduct', pathMatch: 'full' },
      // gerer product 
      {
        path: 'gererProduct',
        component: GererComponent,
        children: [
          { path: 'ajouter', component: AjouterComponent },
          { path: 'modifier/:id', component: ModifierComponent },
          { path: 'consulter', component: ConsulterComponent },
        ],
      },
      { path: 'modifier/:id', component: ModifierComponent },
      { path: 'consulter', component: ConsulterComponent },
      { path: 'ajouter', component: AjouterComponent },
      { path: 'parametre', component: ParametrecompteComponent },
      {
        path: 'parametreconsommateur',
        component: ParametreconsommateurComponent,
      },
      { path: 'parametre-boutique', component: ParametreboutiqueComponent },
      { path: 'ma-selection', component: MaSelectionComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
