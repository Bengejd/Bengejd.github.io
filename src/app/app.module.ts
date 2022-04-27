import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarCardComponent } from './components/sidebar-card/sidebar-card.component';
import { SectionCardComponent } from './components/section-card/section-card.component';
import { HeaderComponent } from './components/header/header.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { ProjectExperienceComponent } from './components/project-experience/project-experience.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarCardComponent,
    SectionCardComponent,
    HeaderComponent,
    WorkExperienceComponent,
    ProjectExperienceComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
