import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactMangerComponent } from './contact-manger/contact-manger.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { SpinerComponent } from './spiner/spiner.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import{HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DeleteContactComponent } from './delete-contact/delete-contact.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactMangerComponent,
    EditContactComponent,
    ViewContactComponent,
    SpinerComponent,
    AddContactComponent,
    PageNotFoundComponent,
    SignupComponent,
    LoginComponent,
    DeleteContactComponent,
    ProfileComponent,
    DashboardComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
