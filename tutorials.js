const sections = [
  {
    title: "Trending",
    tutorials: [
      {
        title: "Fluffy Hair",
        link: "https://www.youtube.com/watch?v=q4yhgVsOQcU&ab_channel=TheSalonGuy"
      },
      {
        title: "Messy Fringe",
        link: "https://www.youtube.com/watch?v=c0LGXUnvAoM&ab_channel=JamesEdward"
      }
    ]
  },
  {
    title: "Fading",
    tutorials: [
      {
        title: "Low Fade",
        link: "https://www.youtube.com/watch?v=dihtB_IdI50&ab_channel=FADEDCULTURE"
      },
      {
        title: "Mid Fade",
        link: "https://www.youtube.com/watch?v=9MGZjQ01SPg&ab_channel=3versince"
      },
      {
        title: "High Fade",
        link: "https://www.youtube.com/watch?v=jUo5aL2ImF4&ab_channel=MartyBlendz"
      },
      {
        title: "Low Taper Fade",
        link: "https://www.youtube.com/watch?v=ACoPvN2WG2k&ab_channel=FADEDCULTURE"
      },
      {
        title: "Mid Taper Fade",
        link: "https://www.youtube.com/watch?v=bXL2hBdMnc4&ab_channel=EJonesTv"
      },
      {
        title: "High Taper Fade",
        link: "https://www.youtube.com/watch?v=lPq2xPjI1Zw&ab_channel=MartyBlendz"
      },
      {
        title: "High Burst Fade Technique",
        link: "https://www.youtube.com/shorts/BSWWHndFoUs"
      }
    ]
  },
  {
    title: "Scissor Work",
    tutorials: [
      {
        title: "Basic Scissor Cutting",
        link: "https://www.youtube.com/watch?v=yZDd1uZUPfc&ab_channel=NomadBarber"
      },
      {
        title: "Scissor Tips",
        link: "https://www.youtube.com/watch?v=C9P5NGPkd38&ab_channel=RumBarber"
      },
      {
        title: "Sectionning",
        link: "https://www.youtube.com/watch?v=zkAvvtuHSKI&ab_channel=StephenJ"
      },
      {
        title: "Scissor Flipping",
        link: "https://www.youtube.com/watch?v=rHbGjh7sHmY&ab_channel=TheSalonGuy"
      }
    ]
  }
];

$(document).ready(function () {
  const gallery = $("#tutorial-list");

  const displayItems = () => {
    let display = sections.map((section) => {
      let tutorials = section.tutorials.map((tutorial) => {
        const tutorialLink = tutorial.link;
        const videoID = new URL(tutorialLink).searchParams.get("v");
        const thumbnailHref = `http://i3.ytimg.com/vi/${videoID}/default.jpg`;
        return `
        <div class="tutorial-item">
        <a href="${tutorial.link}" target="_blank">
          <img src="${thumbnailHref}" alt="thumbnail" />
          ${tutorial.title}</a>
        </div>`;
      });
      tutorials = tutorials.join("");
      return `<div class="container">
                <h2> <span> ${section.title} </span> </h2>
              </div>
              <div class="tutorial-section">
                ${tutorials}
              </div>`;
    });
    display = display.join("");
    gallery.html(display);
  };

  displayItems();
});
