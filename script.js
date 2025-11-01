// const c = document.querySelector(".test");

// const w = 0;
// const h = c.offsetHeight * 0.5;
// const r = 50;

// gsap.to(
//   { theta: -Math.PI / 2 },
//   {
//     // -90 degrees
//     theta: (3 * Math.PI) / 2, // 270, moving from -90 -> 270 = full circle
//     duration: 4,
//     repeat: -1,
//     ease: "none",
//     onUpdate() {
//       const theta = this.targets()[0].theta;

//       const x = w + r * Math.cos(theta);
//       const y = h + r * Math.sin(theta);

//       gsap.set(".second", { x, y });
//     },
//   }
// );

const im = document.querySelector(".hero__banner");
const gr = document.querySelector(".graphic");

const rect = im.getBoundingClientRect();

gr.style.bottom = "0"
gr.style.right = "0"

const slideContainer = document.querySelector(".slider__banner");
const slideImages = slideContainer.querySelectorAll("img");
const slideButtons = document.querySelectorAll(".slider__button");
const sliderTextContainer = document.querySelector(".slider__texts");
const sliderTexts = sliderTextContainer.querySelectorAll("li");

slideImages[0].classList.toggle("carousel-inactive");
sliderTexts[0].classList.toggle("carousel-inactive");

for (let i = 0; i < slideButtons.length; i++) {
  slideButtons[i].addEventListener("click", () => {
    changeSliderContent(i);
  });
}

function changeSliderContent(ind) {
  if (slideImages[ind].classList.contains("carousel-inactive")) {
    slideImages[ind].classList.toggle("carousel-inactive");
    sliderTexts[ind].classList.toggle("carousel-inactive");
    for (let i = 0; i < slideImages.length; i++) {
      if (i == ind) {
        continue;
      }

      if (!slideImages[i].classList.contains("carousel-inactive")) {
        slideImages[i].classList.toggle("carousel-inactive");
        sliderTexts[i].classList.toggle("carousel-inactive");
      }
    }
  } else {
  }
}

const faq = document.querySelector(".accordion");
const faqItems = faq.children;

for (const item of faqItems) {
  const button = item.querySelector("button");
  const answer = item.querySelector(".answer");
  button.addEventListener("click", () => {
    if (getComputedStyle(answer).height == "0px") {
      const p = answer.querySelector("p");
      answer.style.height = getComputedStyle(p).height;
      answer.style.visibility = "visible";
      console.log("test");
    } else {
      answer.style.height = 0;
      answer.style.visibility = "hidden";
    }
  });
}

const navMobile = document.querySelector(".nav__mobile")
const navHambuger = document.querySelector(".nav__hamburger")

navHambuger.addEventListener("click", () => {
    navMobile.style.display = "block";
    document.documentElement.classList.add("overflow-hidden");
    document.body.classList.add("overflow-hidden");

})

const closeMobileNav = document.querySelector(".nav__mobile-close")
closeMobileNav.addEventListener("click", () => {
    navMobile.style.display = "none";
    document.documentElement.classList.remove("overflow-hidden");
    document.body.classList.remove("overflow-hidden");


})