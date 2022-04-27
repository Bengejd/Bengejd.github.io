import { Component } from "@angular/core";

@Component({
             selector: "app-about-me",
             templateUrl: "./about-me.component.html",
             styleUrls: ["./about-me.component.css"],
           })
export class AboutMeComponent {

  public aboutMeText = [
    "I am a full-stack developer based out of Omaha, Nebraska with a passion for trying things out and learning new skills. I specialize in designing and developing mobile-first web applications; be it professional freelance opportunities or personal projects.",
    "The things that I believe set me apart from everyone else is my passion and dedication for any project that I work on. I <strong>love</strong> the creativity and discipline that goes into Software Development and I always strive for <strong>scalable</strong> and clean code that is <strong>maintainable</strong> and <strong>readable</strong> in every project that I come in contact with.",
  ];

}
