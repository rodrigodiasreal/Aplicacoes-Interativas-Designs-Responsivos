import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Aula2Component } from './aidr/aula2/aula2.component';
import { Ex1Component } from './aidr/ex1/ex1.component';
import { Aula3Component } from './aidr/aula3/aula3.component';
import { Aula3Ex2Component } from './aidr/aula3-ex2/aula3-ex2.component';
import { Aula3Ex3Component } from './aidr/aula3-ex3/aula3-ex3.component';

@NgModule({
  declarations: [
    AppComponent,
    Aula2Component,
    Ex1Component,
    Aula3Component,
    Aula3Ex2Component,
    Aula3Ex3Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
