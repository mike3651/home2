import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProblemsComponent } from './problems/problems.component';
import { AiComponent } from './ai/ai.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProblemsComponent,
    AiComponent,
    ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
