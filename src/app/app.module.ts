import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { SocialLinksComponent } from "./components/header/social-links/social-links.component";
import { SectionContainerComponent } from "./components/section-container/section-container.component";
import { AboutMeComponent } from "./components/section-container/sections/about-me/about-me.component";
import { GithubProjectsComponent } from "./components/section-container/sections/github-projects/github-projects.component";
import { NoteworthyProjectsComponent } from "./components/section-container/sections/noteworthy-projects/noteworthy-projects.component";
import { ProjectExperienceComponent } from "./components/section-container/sections/project-experience/project-experience.component";
import { WorkExperienceComponent } from "./components/section-container/sections/work-experience/work-experience.component";
import { SidebarCardComponent } from "./components/sidebar/sidebar-card/sidebar-card.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";

@NgModule({
            declarations: [
              AppComponent,
              SidebarCardComponent,
              HeaderComponent,
              WorkExperienceComponent,
              ProjectExperienceComponent,
              FooterComponent,
              SocialLinksComponent,
              AboutMeComponent,
              SectionContainerComponent,
              SidebarComponent,
              NoteworthyProjectsComponent,
              GithubProjectsComponent,
            ],
            imports: [
              BrowserModule,
            ],
            providers: [],
            bootstrap: [AppComponent],
          })
export class AppModule {}
