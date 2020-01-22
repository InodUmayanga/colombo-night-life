import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatProgressSpinnerModule,
} from '@angular/material';

import { CardListComponent } from './cards/card-list/card-list.component';
import { SliderComponent } from './slider/slider.component';
import { CardCreateComponent } from './cards/card-create/card-create.component';
import { CardViewComponent } from './cards/card-view/card-view.component';
import { AboutUsComponent } from './stastc-pages/about-us/about-us.component';
import { ContactUsComponent } from './stastc-pages/contact-us/contact-us.component';
import { AdvertiseComponent } from './stastc-pages/advertise/advertise.component';
import { FilterBarComponent } from './filter/filter-bar/filter-bar.component';
import { FilterdCardListComponent } from './filter/filterd-card-list/filterd-card-list.component';
import { DesktopComponent } from './desktop/desktop.component';
import { SignupComponent } from './Authentication/signup/signup.component';
import { SigninComponent } from './Authentication/signin/signin.component';
import { AdminBarComponent } from './admin-bar/admin-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardListComponent,
    SliderComponent,
    CardCreateComponent,
    CardViewComponent,
    AboutUsComponent,
    ContactUsComponent,
    AdvertiseComponent,
    FilterBarComponent,
    FilterdCardListComponent,
    DesktopComponent,
    SignupComponent,
    SigninComponent,
    AdminBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAbYuPIE22dTG7h2kio-TUqf3vvy3rUAgs'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
