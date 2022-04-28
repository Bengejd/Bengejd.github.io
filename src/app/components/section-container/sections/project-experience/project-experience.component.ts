import { Component } from "@angular/core";

@Component({
             selector: "app-project-experience",
             templateUrl: "./project-experience.component.html",
             styleUrls: ["./project-experience.component.css"],
           })
export class ProjectExperienceComponent {

  public otherProjects: {
    title: string;
    url?: string;
    texts: string[];
    titleBadge?: string;
    githubLink?: string;
    sub?: {
      title: string;
      isList: boolean;
      texts: string[];
    }[],
  }[] = [
    {
      title: "Toggl Invoice Generator",
      titleBadge: "Private",
      texts: [
        "This was a quality of life improvement type of project for me. My team and I use Toggl to track our hours for working remotely, but Toggl requires a premium account for invoice generation, and even then, the invoices were not all that nice to look at. Since I do not control the team account, I was left with having to generate my invoices each week by hand.",
        "This was a necessary evil, and often I dreaded having to do it. A lot goes into proper invoice generation for our company - calculating each individual task's hourly rate, calculating the total invoice cost and time, updating the appropriate dates and payout periods, bumping the invoice number, etc... all in all, it would take me about an hour or two every two weeks, depending on how many tickets I cleared that pay period, but I always dreaded it.",
        "So I decided one day that I was tired of generating the invoices by hand, and set out to try and automate it for myself. Toggl's documentation is really nice, but the hardest part was properly filling out my invoice template that I had gotten attached to over time.",
        "After a few hours of trial and error (Python and DocX files don't like each-other when tables are involved), I streamlined that process from an hour or two every two weeks to about three seconds. Now it automatically pulls my work hours from the last two weeks, using the Toggl API, generates the invoice, increments the invoice number, totals the hours, calculates my hourly rate for each item I worked on and then updates a local database with the relevant information for archival purposes. Now all I have do to is drag the file into Google Drive, and send it off to my boss to get paid.",
      ],
      sub: [
        {
          title: "Languages",
          isList: false,
          texts: [
            "The Toggl Invoice Generator is written in <strong>Python</strong>, and utilizes the <strong>Toggl API</strong>, and a custom DocX template of my creation.",
          ],
        },
      ],
    },
    {
      title: "Deluge to Transmission Migration Assistant",
      titleBadge: "Public",
      url: "https://github.com/Bengejd/Deluge_to_Transmission_migration",
      texts: [
        "This was a little program I created, because I discovered that the Linux torrenting client (Deluge) was a bit lacking in what I wanted it to do - scheduled throttling being a big one, and as a result wanted to switch to Transmission as my torrent client.",
        "When I went to switch to Transmission, I realized that I had forgot to select a setting in Deluge called \"Make a copy of torrents\", before adding some odd 200+ torrents. Instead of manually adding all 200+ torrents to the Transmission client, I decided to figure out how to automate that process for myself & others.",
      ],
      sub: [
        {
          title: "Languages",
          isList: false,
          texts: [
            "This project was written in <strong>Python</strong>, and leverages the <strong>Selenium Chrome Driver</strong> to automate adding magnet links to their web interface.",
          ],
        },
      ],
    },
  ];

}
