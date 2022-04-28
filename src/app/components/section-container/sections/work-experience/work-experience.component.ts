import { Component } from "@angular/core";

@Component({
             selector: "app-work-experience",
             templateUrl: "./work-experience.component.html",
             styleUrls: ["./work-experience.component.css"],
           })
export class WorkExperienceComponent {

  public workExperience: {
    title: string;
    company: string;
    url?: string;
    date?: string;
    texts: string[];
    sub?: {
      title: string;
      texts: string[];
    }
  }[]
    = [
    {
      title: "Software Developer",
      date: "2020 - Present",
      company: "Cujonics, LLC",
      url: "#",
      texts: [
        "<strong>Cujonics</strong> is a software development company that specializes in building software solutions for the healthcare industry.",
        "As a developer at <strong>Cujonics</strong>, I have been responsible for building out new features and bug fixes for the company's existing software.",
        "My most notable accomplishments with the company to date include:",
        "• Developing the interactive dynamic form user interface that allows companies to create unique healthcare forms digitally that can be filled out by patients digitally, without the hassle of a physical copy of the form.",
        "• Developing the workflow engine that allows for charting software to be loaded, captured and saved to the database in real time, for patient reporting and data analysis.",
      ],
    },
    {
      title: "Project Lead",
      date: "2020 - 2021",
      company: "BioAnalyt",
      url: "https://bioanalyt.com/",
      texts: [
        "<strong>BioAnalyt</strong> is a food product-innovation company based in Teltow, Germany. They focus on developing and manufacturing a portable rapid test kit, which measures the concentration of numerous vitamins in food and biological fluids.",
        "As the lead developer at BioAnalyt, I expanded their Minimum Viable Product that was thrown together as a proof of concept, into a fully functioning consumer facing application.",
        "My duties involved turning design concepts into functioning application features, communicating progress with the product manager, setting realistic expectations based on requests and above all else - delivering quality code within those expectations.",
      ],
    },
    {
      title: "Data Aggregation Engineer",
      url: "https://www.linkedin.com/company/brightfoxgo/about/",
      company: "BrightFox",
      date: "2019 - 2020",
      texts: [
        "<strong>Brightfox</strong> is an online healthcare staffing platform that cuts out the staffing agency middlemen within the healthcare industry. As a <strong>Data Aggregation Engineer</strong>, it was my responsibility to design & develop BrightFox's creative data-extraction and transformation application. The application uses a modular design of systems that are completely independent of one another, ensuring the failure of one does not affect the success of the others.",
        "Currently this application processes over 30 unique healthcare systems, which brings in the data from hundreds of thousands of hospital staffing positions across the nation into the BrightFox database.",
        "Due to the volitile nature of any startup company, I had to be ready to pivor my focus at a moments notice, based on the outcome of our weekly team meetings and the success or faulure of our recent efforts.",
        "Unfortunately, my time with BrightFox was cut short due to the economic impact that the <strong>2020 Corona virus</strong> had on the United States.",
      ],
    },
    {
      title: "Co Owner / Developer",
      url: "https://devCafe.co/",
      company: "DevCafe",
      date: "2019 - 2021",
      texts: [
        "<strong>DevCafe</strong> is a small collective of like-minded individuals whose focus is providing <strong>end-to-end</strong> web & app development solutions for each of our clients that allows for their unique idea to come to life and blossom.",
        "We work with companies and teams of all sizes. From three people in a work-loft to businesses that are household names around the globe. No job is too big for DevCafe, as long as we have <strong>coffee</strong>!",
        "<strong>DevCafe</strong> is unique in the fact that the team is not based in any one country! Our team consists of a group of *Digital Nomads* spanning a number of countries and timezones; and because of this, we understand the importance of being self-sustaining and accountable developers.",
      ],
      sub: {
        title: "What We Offer",
        texts: [
          "Front-end development",
          "Back-end development",
          "UX/UI analysis & advice",
          "Product Testing & Bug Documentation",
          "End-to-end, Full-stack development",
        ],
      },
    },
    {
      title: "Application Software Developer",
      url: "https://wanna-train.com/",
      company: "WannaTrain",
      date: "2018 - August 2019",
      texts: [
        "Wanna Train is a wellness community, where anyone can meet up and workout by simply sending a “Wanna Train\" invitation.",
        "As one of the developers of Wanna Train I was responsible for implementing feature-requests, design specifications, bug resolutions, clearly communicating between the various departments of WannaTrain - be it the Testing Department, Administration or internally within the Development Team, all the while ensuring my code meets standards & has been thoroughly vetted before submission.",
        "WannaTrain is unique in the fact that the development team is not based in the United States - or even the company itself! The team consists of a group of <a href=\"https://en.wikipedia.org/wiki/Digital_nomad\">Digital Nomads</a> spanning a number of countries and timezones.",
        "Working here taught me the importance of being a <strong>self-sustaining</strong> and <strong>accountable</strong> developer; because if I ran into a problem at 9:00 AM EST, I had no one but myself to help solve it until around 9:00 PM - 11:00 PM EST.",
        "Similarly, if some of my code does not pass review, I would not know about it until a couple of days later, due to timezone constraints, potentially missing deadlines.",
        "This means that I had to be certain that I wrote code that will hold up to specifications & expectations.",

      ],
    },
    {
      title: "Co-Founder & Lead Developer",
      url: "#",
      company: "SocialPnt",
      date: "2017 - 2019",
      texts: [
        "SocialPnt is a location-based social media app, that brings users together through pnts (points) in time. Users can discover what is going on around them, stay in touch with the people who matter the most and capture & relive every moment again and again.",
        "I built SocialPnt from the ground up, learning on the way what it really takes to create a end-to-end mobile application from start to finish. SocialPnt covers six different programming languages, has over 45 service providers, 84 individual pages, countless components and numerous technological integrations.",
        "SocialPnt has been my pride and joy for a little more than a year now. It started with whiteboard drawings, copious amounts of chicken-scratched notes and lots caffeine. It then moved to <strong>Sketch</strong> design mockups, proof of concepts, technology selection, and about six months of solo development & testing.",
        "SocialPnt is <strong>live</strong> on the IOS App store, but there isn't a day that goes by, that I don't think of new ways I could improve upon it. Optimizations, new implementations, integrations and a better tomorrow for everyone who uses the app, is always my goal.",
        "SocialPnt was a daunting task that I wasn't confident I would be able to complete in the beginning, but eventually - I did. And I cannot tell you how great that feels.",
      ],
    },
    {
      title: "Application Software Developer",
      url: "http://research.uc.edu/",
      company: "University of Cincinnati, Office of Research",
      date: "January 2016 - January 2017",
      texts: [
        "As a Developer at UC I was responsible for the technical direction of projects throughout the development lifecycle. This included keeping thorough documentation on projects status, development and team work-ability.",
        "I was on the ground floor when it came to re-designing the Office of Research website, a project that I pushed for almost immediately upon coming into my role. I spent a lot of days in meetings, with every department head discussing their needs, and how we could implement them in a way that made it easy to find any information that you were looking for.",
      ],
    },
    {
      title: "Junior Software Developer",
      url: "http://www.running2win.com/",
      company: "Athletic Performance Tools, LLC",
      date: "Summer 2014",
      texts: [
        "I helped our team solve new and interesting problems, using a wide variety of technologies to tackle these problems including, <strong>AngularJS</strong>, <strong>HTML</strong>, <strong>CSS</strong>, <strong>Javascript</strong> and external Api's. With a small focused team, we all shared the successes of one another. This personal investment allowed me to interact with a new and growing team in an environment that I had never experienced before. Though my time with the company was short, due to my constraints of being a student, the things that I learned were invaluable.",
      ],
    },
  ];
}
