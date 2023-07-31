// Gallery data array
const items = [
  {
    img: "https://www.menshairstyletrends.com/wp-content/uploads/2020/05/buzz-cut-with-skin-fade-haircut-ceejayfadez-1024x1024.jpg",
    desc: "Buzzcut w/ on the Sides.",
    tutorial:
      "https://www.youtube.com/watch?v=89ATGbud5nE&t=173s&ab_channel=FADEDCULTURE",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQHNwPripf19J8KsV8AqPNOYphyNL7Id9iDg&usqp=CAU",
    desc: "Textured Fringe w/ 0.5 Fade",
    tutorial:
      "https://www.youtube.com/watch?v=uTRlRm3zWtY&ab_channel=RegalGentleman",
  },
  {
    img: "https://menshairstyletips.com/wp-content/uploads/2020/10/9-Marseille-Style.jpg",
    desc: "Burst Fade",
    tutorial:
      "https://www.youtube.com/watch?v=WQoi_lqWY6g&ab_channel=NevinTheBarber",
  },
  {
    img: "https://i.pinimg.com/736x/aa/aa/05/aaaa05817e1a180dd13710d6ca847455.jpg",
    desc: "Mullet w/ Mid-Taper Fade",
    tutorial:
      "https://www.youtube.com/watch?v=7j433qxLwUg&ab_channel=Dreclipperhands",
  },
  {
    img: "https://lovehairstyles.com/wp-content/uploads/2022/08/asian-hairstyles-men-skin-fade-top-texture-683x1024.jpg",
    desc: "Pompadour w/Mid Drop Fade",
    tutorial:
      "https://www.youtube.com/watch?v=niX8A84CTsg&ab_channel=jjaybeardedbarber",
  },
  {
    img: "https://haircutinspiration.com/wp-content/uploads/Vivid-Drop-Fade-with-Simple-Top.jpg",
    desc: "High Drop Fade",
    tutorial:
      "https://www.youtube.com/watch?v=_ATCKZD1KL4&ab_channel=ChrisBossio",
  },
  {
    img: "https://i.pinimg.com/236x/a7/e5/d4/a7e5d4107b7bc44f7f2b5d1add6da565--hairstyles--medium-mens-medium-length-hairstyles.jpg",
    desc: "Medium Length Hairstyle",
    tutorial:
      "https://www.youtube.com/watch?v=X8pk9dEj2VE&ab_channel=RegalGentleman",
  },
  {
    img: "https://i.pinimg.com/564x/c7/f6/fd/c7f6fdcde6f1cc6c79303f0a7952b576.jpg",
    desc: "Low Drop Fade",
    tutorial:
      "https://www.youtube.com/watch?v=kNbVQ1sirTA&ab_channel=FADEDCULTURE",
  },
];

/**

* Code from friend
* He told me that there was an easier way to display a gallery using javascript where you didn't need to write repetitive html code.
* This script automates html, I only need to input the image link, description and tutorial link.

* Accessed: 16 June, 2023

*/

$(document).ready(function () {
  const gallery = $("#gallery");

  const displayItems = () => {
    let display = items.map((item) => {
      return `<div class="describeimg">
          <img src="${item.img}" alt="Barbershop" /> <br/>
          <span class="galimg"> ${item.desc} </span>
          <br/>
          Tutorial: <a href="${item.tutorial}">${item.desc}</a>
        </div>`;
    });
    display = display.join("");
    gallery.html(display);
  };

  // Fades the modal in
  const focusImage = (imgSrc) => {
    const modal = $(`<div id="gallery-modal">
    <img src="${imgSrc}" alt="" />
  </div>`);
    $("body").append(modal);

    modal.on("click", () => {
      modal.fadeOut(() => {
        modal.remove();
      });
    });
  };

  // Loop through all images and create modal on click
  const init = () => {
    displayItems();
    const imgs = $("#gallery img");
    imgs.each((index, img) => {
      $(img).on("click", () => {
        focusImage(img.src);
      });
    });
  };

  init();
});
