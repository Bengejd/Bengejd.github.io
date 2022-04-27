import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarCardComponent } from './components/sidebar-card/sidebar-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
