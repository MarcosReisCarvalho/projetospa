import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { InfoComponent } from './pages/info/info.component';
import { ListaComponent } from './pages/lista/lista.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'info', component: InfoComponent},
  {path:'lista', component: ListaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
