import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaladModule } from './salad/salad.module';
import { SharedPrimeModule } from './shared-prime.module';
import { OrderComponent } from './order/order.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SaladModule,
    SharedPrimeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
