import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { KastaneDropdownComponent } from './kastane-dropdown-component/kastane-dropdown-component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgbModule ],
  declarations: [ AppComponent, HelloComponent, KastaneDropdownComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
