import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ListaComponent } from './lista/lista.component';



@NgModule({
  declarations: [
    HomeComponent,
    InfoComponent,
    ListaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    HomeComponent,
    InfoComponent,
    ListaComponent
  ]
})
export class PagesModule { }
