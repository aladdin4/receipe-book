import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [BrowserModule, FormsModule],
})
export class AppModule {}
console.log('working');
