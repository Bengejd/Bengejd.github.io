import { Component } from "@angular/core";

@Component({
             selector: "app-noteworthy-projects",
             templateUrl: "./noteworthy-projects.component.html",
             styleUrls: ["./noteworthy-projects.component.css"],
           })
export class NoteworthyProjectsComponent {

  public featuredProjects: {
    title: string;
    url: string;
    summary?: string;
    image?: string;
    texts?: string[]
    githubLink?: string;
    sub?: {
      title?: string;
      isList?: boolean;
      texts?: string[];
    }[];
  }[] = [
    {
      title: "PDKP - PantheonDKP",
      url: "https://www.curseforge.com/wow/addons/pantheondkp",
      summary: "A currency accounting system that tracks income, expenses and other activities in real time.",
      image: "assets/images/projects/Pantheon_Logo.png",
      texts: [
        "PDKP is a currency management & tracking tool with over 10,000 users that I built for my World of Warcraft raiding guild, Pantheon - hence the name.",
        "What started with the hubris filled phase of <i>\"How hard can it be?\"</i> turned into one of my greatest learning endeavors.",
        "Now, it might not seem as impressive of a project now that you know that it was made for a video game, but I don't think that should discredit the architecture, design and coding work that I put into it.",
      ],
      sub: [
        {
          title: "Project Challenges I Overcame",
          isList: true,
          texts: [
            "<strong>Learning a dead language: </strong>LUA 5.1 is a dead language by all accounts. Most people within the community have been programming in it for 10+ years, and almost all resources available for it are antiquated and outdated. This requires you to \"learn\" by diving into the depths of other project tools that the community has created.",
            "<strong>Keeping accurate records: </strong>Keeping one database up to date and accurate is easy, but keeping 300+ copies of that database up to date and accurate is pretty hard I learned. This is because World of Warcraft does not allow outside communication for their tools & can only be updated when the player is online.",
            "<strong>Performance limitations: </strong>As I established, keeping records is important. Everyone wants to know how much currency that they have accumulated, and to know that it's accurate. Doing so, requires that you sync data from the most \"up to date\" database, to everyone else that is online, without affecting their gameplay performance. ",
            "<strong>Database size creep:</strong>Unlike Google, I did not have the luxury of seemingly unlimited data. I had to be careful when designing the database architecture because loading screens within the game are adversely affected by O(N) data. In short, the more data entries that I acquired, the longer the game took to load during various loading screens. ",
            "<strong>Utilizing a semi-broken API:</strong>Lastly, the entirety of the WoW API has been documented by the community. That means that there isn't an official documentation of it, and a lot of the examples (if there are any) are out of date. You have to do a lot of trial and error on your own to find out what endpoints actually function the way they are supposed to. ",
            "<strong>Merging data from multiple sources:</strong>CRUD data management is easy at it's core. It's when you are faced with the challenge of doing so from multiple sources that may have conflicting or missing data is when it becomes an issue.",
          ],
        },
        {
          title: "Languages",
          isList: false,
          texts: [
            "PDKP is written in <strong>XML</strong> and <strong>LUA 5.1</strong>, while also utilizing custom made <strong>BLP & TGA</strong>asset files.",
          ],
        },
      ],
    },
    {
      title: "SocialPnt - IOS App",
      url: "#",
      summary: "A location-based social network that connects people through places.",
      image: "assets/images/projects/SocialPnt.png",
      texts: [
        "Users can engage with their friends’ past, present, and future through the use of distinct Pnts located in popular locations. Now available on the App store for free!",
      ],
      sub: [
        {
          title: "Framework, services and more",
          isList: false,
          texts: [
            "SocialPnt leverages the Ionic framework to give a cross-platform mobile experience. It utilizes <a href=\"https://firebase.google.com/\">Google Firebase</a>, and their <a href=\"https://firebase.google.com/docs/firestore/\">Cloud Firestore</a> service for it's database purposes, as well as <a href=\"https://cloud.google.com/functions/\">Google Cloud Functions</a> to offload some of the more sensitive, and intensive data processing tasks to a dedicated Google Cloud instance.",
          ],
        },
        {
          title: "Languages",
          isList: false,
          texts: [
            "Socialpnt is written in <strong>Typescript</strong>, <strong>HTML</strong> and <strong>SCSS</strong> with custom <strong><a href=\"https://cordova.apache.org/\">Apache Cordova</a></strong> plugins written in <strong>Swift</strong> , <strong>Objective-C</strong> and <strong>Javascript</strong>.",
          ],
        },
      ],
    },
    {
      title: "IPA - Ionic Plugin Assistant",
      url: "https://https://github.com/Bengejd/Ionic-Plugin-Assistant",
      summary: "A NodeJs library that generates the necessary boilerplate for creating Ionic/Cordova plugins",
      image: "assets/images/projects/IPA_LOGO.png",
      githubLink: "https://github.com/Bengejd/NOLS",
      texts: [
        "IPA was made to make the average Ionic developers life a little easier, when wanting to create the own plugin for the Ionic Framework. Creating a plugin takes a <strong>LOT</strong> initial setup. I've written <a href=\"https://medium.com/@JordanBenge/how-to-write-an-ionic-cordova-plugin-in-swift-8d443430b27d\">Medium articles</a> about how to properly setup plugins, but I felt like even with that, the process was too convoluted for some.",
        "So instead, I wanted to make the process easier - so I created the Ionic Plugin Assistant - IPA for short. Creating the package also made my life easier, because despite writing about the topic, I'm human and forget some of the steps, and often have to Google specifics - which lead me to <strong>my</strong> article.",
        "When you run IPA, it will ask you a few questions about your plugin, such as: the plugin name, the authors name, github repo, license, etc... and then generate all of the boilerplate code, to the point that you could <strong>technically</strong> submit it to the Ionic Native platform as a new plugin - but it would probably be denied for a lack of functionality.",
        "IPA ensures that your plugin will adhere to the Ionic plugin standards, common community standards, and set you up for success when it comes to making your plugin. This isn't to say that it will write your plugin for you, but it will give you a basic setup to get started with, where there was none to begin with.",
        "The library generates 11 files, all with unique requirements to properly work in your specific platform & within the Ionic Framework",
        "I opened-sourced IPA under the MIT license.",

      ],
      sub: [
        {
          title: "Languages",
          isList: false,
          texts: [
            "IPA is written in <strong>NodeJs</strong> and <strong>Javascript</strong>.",
          ],
        },
        {
          title: "Services, Integrations and more",
          isList: false,
          texts: [
            "IPA utilizes <strong><a href=\"https://travis-ci.org/\">Travis Continuous Integration</a></strong> for consistent deployment, <strong><a href=\"https://mochajs.org/\">Mocha</a></strong> for Unit Testing (with a 87% code coverage reported by <strong><a href=\"https://codecov.io/\">CodeCov!</a></strong>), with <strong><a href=\"https://webpack.js.org/\">Webpack</a></strong><strong></strong> and <strong><a href=\"https://github.com/babel/babel\">Babel</a></strong> used during the build phase.",
          ],
        },
      ],
    },
    {
      title: "NOLS - No One Likes Stylesheets",
      url: "https://github.com/Bengejd/NOLS",
      summary: "A NodeJs library that makes writing pixel perfect CSS a breeze",
      image: "assets/images/projects/NOLS_LOGO.png",
      githubLink: "https://github.com/Bengejd/NOLS",
      texts: [
        "NOLS was a proof of concept <strong>NodeJs</strong> package that I came up with after getting tired of making pixel-to-viewport conversions by hand, as in a large project you could potentially have dozens of small conversions that need to be done.",
        "With NOLS at your side you can have the peace of mind of knowing that your pixel perfect CSS looks the same on all devices.",
        "Other Node packages allow you to calculate a conversion, but none actually help you streamline your development process by applying the conversion in your stylesheets for you.",
        "Unfortunately, as I'm sure you are aware, NOLS' goal does not really translate all that well to the web world. It's better handled by utilizing CSS-Grid or Flexbox rather than viewport percentages. However, it was a fun little project to play around with, so I don't regret creating it.",
        "I opened-sourced IPA under the MIT license.",

      ],
      sub: [
        {
          title: "Languages",
          isList: false,
          texts: [
            "NOLS is written in <strong>NodeJs</strong> and <strong>Javascript</strong>",
          ],
        },
        {
          title: "Services, Integrations and more",
          isList: false,
          texts: [
            "NOLS utilizes <strong><a href=\"https://travis-ci.org/\">Travis Continuous Integration</a></strong> for consistent deployment, <strong><a href=\"https://mochajs.org/\">Mocha</a></strong> for Unit Testing (with a 95% code coverage reported by <strong><a href=\"https://codecov.io/\">CodeCov!</a></strong>), with <strong><a href=\"https://webpack.js.org/\">Webpack</a></strong><strong></strong> and <strong><a href=\"https://github.com/babel/babel\">Babel</a></strong> used during the build phase.",
          ],
        },
      ],
    },
  ];

  public nonFeaturedProjects: {
    title: string;
    url: string;
    image?: string;
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
      title: "LastCam - An Ionic-Cordova Camera Plugin written in Swift",
      url: "https://github.com/Bengejd/cordova-plugin-last-cam",
      image: "assets/images/projects/last-cam-logo.png",
      texts: [
        "LastCam is a plugin I created after finding some of the alternatives within the Ionic community to be lacking. It utilizes a user's camera to create a preview that is streamed straight from their phone, into any HTML view that they want.",
        "The thing that makes LastCam special is it's ability to capture both videos and images, while other plugins only offer one or the other.",
      ],
      githubLink: "https://github.com/Bengejd/cordova-plugin-last-cam",
      sub: [
        {
          title: "Languages",
          isList: false,
          texts: [
            "LastCam is written in <strong>Swift</strong>, <strong>Javascript</strong> and <strong>Objective-C</strong>",
          ],
        },
        {
          title: "License",
          isList: false,
          texts: [
            "It is open-sourced under the MIT license, and all are more than welcome to contribute.",
          ],
        },
      ],
    },
    {
      title: "Ionic 4 - Components Repository",
      url: "#",
      image: "assets/images/projects/IPA_LOGO.png",
      titleBadge: "Abandoned",
      texts: [
        "The Ionic 4 Components repository is a revival of the now dead <a href=\"\">Ionic 3 Components</a> Github repo. It's aim is the same, to help people learn and speed up their development process with a curated list of advanced, unique, but often required components and functionality that is missing within the Ionic 4 Framework.",
      ],
      sub: [
        {
          title: "License",
          isList: false,
          texts: [
            "It is open-sourced under the MIT license, and all are more than welcome to contribute.",
          ],
        },
      ],
    },
    {
      title: "YTrap - IOS App",
      url: "#",
      image: "assets/images/projects/Ytrap.png",
      titleBadge: "Abandoned",
      texts: [
        "YTrap is a simple mobile app review system designed to allow the attendees of an event to give an honest yet anonymous review of the event without outing themselves. This allows hosts to facilitate better events in the future.",
        "YTrap was the first mobile app that I made. After careful consideration I made the decision to shut the app down, after some privacy concerns with the Facebook Developer API, which fueled the application.",
      ],
    },
    {
      title: "Freedom Summer App - IOS & Android App",
      url: "https://drive.google.com/open?id=1KOqus1L8kGbHoDZmUNZz0QAoD1nmzctiAB-9xQkW3mA",
      image: "assets/images/projects/freedom-summer-app.jpeg",
      titleBadge: "Abandoned",
      texts: [
        "The Freedom Summer App (FSApp) is a location-based tour that uses a mobile device and GPS technology to transport you to 1964 where you train as a Freedom Summer volunteer on Miami University's campus in Oxford, Ohio.",
      ],
      sub: [
        {
          title: "Languages",
          isList: false,
          texts: [
            "FSApp is built using the open-source project <strong><a href=\"https://fielddaylab.org/make/aris/\">ARIS</a></strong>, written in <strong>PHP</strong> and <strong>Objective-C</strong>. It leverages augmented reality to immerse the user into the rich history of the Freedom Summer, while using real-time image recognition to project historical images onto the user's screen at certain locations. The app is currently in Beta, and only available to pre-approved testers.",
          ],
        },
        {
          title: "License",
          isList: false,
          texts: [
            "It is open-sourced under the MIT license, and all are more than welcome to contribute.",
          ],
        },
      ],
    },
  ];

}
