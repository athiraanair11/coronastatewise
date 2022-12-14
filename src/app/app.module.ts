import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddstatewiseComponent } from './addstatewise/addstatewise.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewallComponent } from './viewall/viewall.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


const myroutes=[

  {path:"",component:AddstatewiseComponent},
  {path:"view",component:ViewallComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AddstatewiseComponent,
    NavbarComponent,
    ViewallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
