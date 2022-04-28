import { Component } from "@angular/core";

@Component({
             selector: "app-github-projects",
             templateUrl: "./github-projects.component.html",
             styleUrls: ["./github-projects.component.css"],
           })
export class GithubProjectsComponent {

  public projects: {
    title: string;
    url?: string;
    texts: string[];
    titleBadge?: string;
    githubLink?: string;
  }[] = [
    {
      title: "Compodoc",
      titleBadge: "Package Contribution",
      githubLink: "https://github.com/compodoc/compodoc/pull/1148",
      texts: [
        "I was working on creating documentation for a large-scale project I was working on using Storyboard, which uses Compodoc internally. As with any large project, we used Alias'd paths, but Compodoc was not set up to read the aliases correctly.",
        "So after diving into the library and discovering what the problem was, I submitted a pull-request on Compodoc - which hadn't been updated in quite a while. After a few days, the pull-request was merged, and our documentation was created.",
      ],
    },
    {
      title: "Ionic",
      titleBadge: "Feature Contribution",
      githubLink: "https://github.com/ionic-team/ionic-framework/pull/18604",
      texts: [
        "This was a quality of life upgrade that I felt was lacking within the Ionic Framework.",
        "The feature was a custom-ion-video element that allowed you to auto-play or pause videos when pass through the viewport.",
        "Unfortunately, the feature was not merged into the Ionic Framework, due to the team feeling that it was unnecessary and could be reproduced by users without the need for a custom element.",
      ],
    },
    {
      title: "Branch.io",
      titleBadge: "Cross API integration / Documentation",
      githubLink: "https://github.com/BranchMetrics/cordova-ionic-phonegap-branch-deep-linking/issues/442#issuecomment-380270201",
      texts: [
        "This was probably the first time that I felt like a true developer. I was looking to integrate Firebase's <a href=\"https://firebase.google.com/docs/dynamic-links/\">Dynamic Link</a> service into SocialPnt. After implementing their native SDK, I realized that their coverage of edge cases was significantly lacking. After searching around for a bit, I discovered <a href=\"https://branch.io/\">Branch.io</a> and immediately fell in love with their service. There was only one catch. I had to get an email link from Firebase, which was only accessible via their Dynamic Link service.",
        "After doing some digging I came up with a solution that leveraged Branch.io's edge cases with Firebase's email link, and was given warm remarks from one of the Branch.io developers for my work. He said he would pass my solution onto their documentation team to see if it could be added to the repository, as he felt that other developers would benefit from it.",
      ],
    },
    {
      title: "Ionic",
      titleBadge: "Long-standing issue documentation",
      githubLink: "https://github.com/ionic-team/ionic-app-scripts/issues/1426#issuecomment-407485178",
      texts: [
        "This was an issue that I originally opened with the Ionic team, but despite receiving quite some notoriety within the community it was unfortunately left unsolved. The issue was with their <strong>Ionic cordova build prod</strong> command running out of memory, even on high-end devices. This was due to one of the optimizations that the command was running. The flag was causing a memory-leak within some of their dependencies and the recursive use of non-project file-paths.",
        "This issue was only prevalent in large-scale projects, and would not be noticed by beginners or simpler applications.",
        "After three months of testing out fixes and hoping that the team would address this issue officially, I came up with a solution that solved the issue at large. Later on ths issue was fixed in their <strong>4.0</strong> release of Ionic, but for <strong>3.x</strong> users like myself, the compiled solution worked in the meantime.",
      ],
    },
    {
      title: "Cordova-Plugin-Camera-Preview",
      titleBadge: "Solution documentation",
      githubLink: "https://github.com/cordova-plugin-camera-preview/cordova-plugin-camera-preview/issues/397#issuecomment-406366801",
      texts: [
        "This was something that I originally ran into while using the Camera-Preview plugin. The basis of the issue was with implementing a pinch-to-zoom directive, when you couldn't interact with the camera preview directly due to library limitations.",
        "I ended up posting this solution for another user who opened the same issue that I encountered while originally implementing the plugin.",
      ],
    },
    {
      title: "Ionic3-components",
      titleBadge: "UI Theme update",
      githubLink: "https://github.com/yannbf/ionic3-components/pull/92",
      texts: [
        "The Ionic3-Components library is a fantastic resource for new Ionic users to find all sorts non-intuitive UI examples.",
        "I worked on some stylistic issues that the library had, as well as refactoring the repository as a whole to make it more streamlined for user-use. My pull request is still open, waiting for the project to come out of inactivity.",
      ],
    },
  ];

}
