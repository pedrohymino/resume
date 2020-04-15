import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RetangleComponent } from './shared/retangle/retangle.component';
import { SquareComponent } from './shared/square/square.component';

@NgModule({
  declarations: [
    AppComponent,
    RetangleComponent,
    SquareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
