import { Component, OnInit } from "@angular/core";

@Component({
             selector: "app-social-links",
             templateUrl: "./social-links.component.html",
             styleUrls: ["./social-links.component.css"],
           })
export class SocialLinksComponent implements OnInit {

  public socialLinks: { href: string, icon: string }[] = [
    {
      href: "https://twitter.com/J_Benge13",
      icon: "fa-twitter",
    },
    {
      href: "https://plus.google.com/u/0/115553779196108988927",
      icon: "fa-google-plus-g",
    },
    {
      href: "https://www.linkedin.com/in/jordandanielbenge/",
      icon: "fa-linkedin-in",
    },
    {
      href: "https://github.com/Bengejd",
      icon: "fa-github-alt",
    },
    {
      href: "https://stackoverflow.com/users/3507670/jordan-benge",
      icon: "fa-stack-overflow",
    },
    {
      href: "https://codepen.io/Bengejd/",
      icon: "fa-codepen",
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
