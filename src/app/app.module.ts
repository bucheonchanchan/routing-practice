import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Acomponent } from './acomponent/acomponent.component';
import { Bcomponent } from './bcomponent/bcomponent.component';
import { Dcomponent } from './dcomponent/dcomponent.component';
import { Ccomponent } from './ccomponent/ccomponent.component';
import { Ecomponent } from './ecomponent/ecomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    Acomponent,
    Bcomponent,
    Ecomponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
