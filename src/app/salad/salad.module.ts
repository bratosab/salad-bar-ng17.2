import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaladComponent } from './salad.component';
import { ToppingsComponent } from './toppings/toppings.component';
import { SaladRoutingModule } from './salad-routing.module';

@NgModule({
  declarations: [
    SaladComponent,
    ToppingsComponent
  ],
  imports: [
    CommonModule,
    SaladRoutingModule
  ]
})
export class SaladModule { }
