import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ContactMangerComponent } from './contact-manger/contact-manger.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignupComponent } from './signup/signup.component';
import { ViewContactComponent } from './view-contact/view-contact.component';

const routes: Routes = [
  {path:'' ,redirectTo :'/contacts/admin',pathMatch:'full'},
  {path:'contacts/admin' , component:ContactMangerComponent},
  {path:'contacts/add' ,component: AddContactComponent},
  {path:'contacts/edit/:contactId',component:EditContactComponent},
  {path:'contacts/view/:contactId', component:ViewContactComponent},
  {path:'contacts/signup' ,component: SignupComponent},
  {path:'contacts/login' ,component: LoginComponent},
  {path:'**', component:PageNotFoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
