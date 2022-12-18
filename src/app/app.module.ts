import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './server/server.component';
import { WarningComponent } from './warning/warning.component';
import { SuccessComponent } from './success/success.component';

@NgModule({
  declarations: [AppComponent, ServerComponent, ServersComponent, WarningComponent, SuccessComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [BrowserModule],
})
export class AppModule {}
console.log('working');
