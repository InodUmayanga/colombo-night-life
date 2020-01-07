import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardListComponent } from './card-list/card-list.component';
import { CardCreateComponent } from './card-create/card-create.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { CardViewComponent } from './card-view/card-view.component';



const routes: Routes = [
  { path: '', component: CardListComponent },
  { path: 'admin/create', component: CardCreateComponent },
  { path: 'admin/delete', component: CardListComponent },
  { path: 'view/:cardId', component: CardViewComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
