import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MultiplicarComponent } from './multiplicar/multiplicar.component';
import { DividirComponent } from './dividir/dividir.component';

@NgModule({
  declarations: [
    AppComponent,
    MultiplicarComponent,
    DividirComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
