import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MultiplicarComponent } from './multiplicar/multiplicar.component';
import { DividirComponent } from './dividir/dividir.component';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './store/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { NavbarComponent } from './navigator/navbar/navbar.component';
import { UsersComponent } from './pages/users/users.component';
import { EffectsModule } from '@ngrx/effects';
import { userEffects } from './pages/users/redux';
import { UserDataPipe } from './pipes/user-data.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MultiplicarComponent,
    DividirComponent,
    NavbarComponent,
    UsersComponent,
    UserDataPipe
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([userEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
