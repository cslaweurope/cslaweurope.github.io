// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-activities",
          title: "activities",
          description: "Activities organized by the CS&amp;Law Europe Network. These monthly activities rotate and take place every last Friday of the month from 12:30–13:30 CET -- sign up with the Google sheet to get a calendar invite.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/activities/";
          },
        },{id: "news-we-started-the-cs-amp-amp-law-european-network-with-a-kickoff-meeting-where-we-discussed-the-goals-and-objectives-of-the-network-and-future-events-to-achieve-them",
          title: 'We started the CS&amp;amp;amp;Law European Network with a kickoff meeting where we discussed...',
          description: "",
          section: "News",},{id: "talks-how-should-law-engage-with-other-disciplines",
          title: 'How Should Law Engage with Other Disciplines?',
          description: "",
          section: "Talks",handler: () => {
              window.location.href = "/talks/2026-05-29-deep-dive-debate/";
            },},{id: "talks-platform-republics-how-platform-rules-shape-the-content-of-app-licenses",
          title: 'Platform Republics: How Platform Rules Shape the Content of App Licenses',
          description: "",
          section: "Talks",handler: () => {
              window.location.href = "/talks/2026-06-26-learning-call/";
            },},{id: "talks-how-and-when-should-ai-be-used-in-research",
          title: 'How and When Should AI Be Used in Research?',
          description: "",
          section: "Talks",handler: () => {
              window.location.href = "/talks/2026-08-28-deep-dive-debate/";
            },},{id: "talks-cleaning-the-launderette-lessons-from-3-years-of-the-european-open-source-ai-index",
          title: 'Cleaning the Launderette: Lessons from 3 years of the European Open-Source AI Index...',
          description: "",
          section: "Talks",handler: () => {
              window.location.href = "/talks/2026-09-25-learning-call/";
            },},{id: "talks-under-the-hood-what-can-we-learn-from-leaked-system-prompts",
          title: 'Under the Hood: What Can We Learn from Leaked System Prompts?',
          description: "",
          section: "Talks",handler: () => {
              window.location.href = "/talks/2026-10-30-deep-dive-debate/";
            },},{id: "talks-can-a-language-model-hold-the-middle-lessons-from-building-llmediator",
          title: 'Can a Language Model Hold the Middle? Lessons from Building LLMediator',
          description: "",
          section: "Talks",handler: () => {
              window.location.href = "/talks/2026-11-27-learning-call/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
