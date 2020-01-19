import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { ReactiveFormsModule } from '@angular/forms';
import { CardViewComponent } from './cards/card-view/card-view.component';
import { AboutUsComponent } from './stastc-pages/about-us/about-us.component';
import { ContactUsComponent } from './stastc-pages/contact-us/contact-us.component';
import { AdvertiseComponent } from './stastc-pages/advertise/advertise.component';
import { FilterBarComponent } from './filter/filter-bar/filter-bar.component';
import { FilterdCardListComponent } from './filter/filterd-card-list/filterd-card-list.component';
import { DesktopComponent } from './desktop/desktop.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignupComponent } from './Authentication/signup/signup.component';
import { SigninComponent } from './Authentication/signin/signin.component';

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
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
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
