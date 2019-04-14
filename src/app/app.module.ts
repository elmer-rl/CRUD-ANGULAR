import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/section/navbar/navbar.component';
import { MainComponent } from './componentes/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
