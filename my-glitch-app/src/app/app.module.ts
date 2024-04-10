
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* App Root */
import { AppComponent } from './app.component';

/* Feature Modules */
import { ContactModule } from './contact/contact.module';
import { GreetingModule } from './greeting/greeting.module';

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';

//calling  Api
import {HttpClientModule} from  '@angular/common/http';




@NgModule({
  imports: [
    BrowserModule,
    ContactModule,
    HttpClientModule,
   // GreetingModule.forRoot({userName: 'Garima Bisht'}),
    GreetingModule.forRoot({userName:'Garima'}),
    AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
