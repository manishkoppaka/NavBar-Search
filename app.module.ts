import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'; 
import { SearchFilterPipe } from './directives/filter-pipe';
import { ClickOutsideDirective } from './directives/dropdown.directive';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ButtonsLinksComponent } from './buttons-links/buttons-links.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ClickOutsideDirective,
    SearchFilterPipe,
    ButtonsLinksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
