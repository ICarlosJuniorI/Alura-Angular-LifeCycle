import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input.component';
import { ItemComponent } from './components/item/item.component';

@NgModule({
  declarations: [AppComponent, InputComponent, ItemComponent],
  imports: [BrowserModule, FontAwesomeModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
