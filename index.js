/*
    ============================
        Portfolio-Cards 
    ============================
*/

let btns = document.querySelector(".p-btns");
let cards = document.querySelectorAll(".portfolio-images > div");

btns.addEventListener("click", (e) => {
  if (e.currentTarget != e.target) {
    let value = e.target.attributes[1].nodeValue;
    for (let card of cards) {
      let isContain = card.classList.contains(`p-btn--${value}`);
      if (isContain) {
        card.classList.remove("p-image-not-active");
      }
      if (!isContain) {
        card.classList.add("p-image-not-active");
      }
    }
  }
});


/*
    ===========================
        Other things
    ===========================
*/
