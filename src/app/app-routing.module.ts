import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardListComponent } from './card-list/card-list.component';
import { CardCreateComponent } from './card-create/card-create.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { CardViewComponent } from './card-view/card-view.component';
import { AdvertiseComponent } from './advertise/advertise.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';



const routes: Routes = [
  { path: '', component: CardListComponent },
  { path: 'admin/create', component: CardCreateComponent },
  { path: 'admin/delete', component: CardListComponent },
  { path: 'view/:cardId', component: CardViewComponent },
  { path: 'advertise', component: AdvertiseComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'about', component: AboutUsComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
