const quoteSlide = (quote) => {
  console.log(quote);
  if (quote == 1) {
    document.getElementById("hero").innerHTML =
      "Programming is not about what you know; it is about what you can figure out.” - Chris Pine";
  } else if (quote == 2) {
    document.getElementById("hero").innerHTML =
      '"The only way to learn a new programming language is by writing programs in it." - Dennis Ritchie';
  } else if (quote == 3) {
    document.getElementById("hero").innerHTML =
      '"Testing leads to failure, and failure leads to understanding." - Burt Rutan';
  } else {
    document.getElementById("hero").innerHTML =
      '"Experience is the name everyone gives to their mistakes." - Oscar Wilde"';
  }
};
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".links");
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    burger.classList.toggle("burger_active");
  });
};

const quote = () => {
  const text = document.querySelector(".hero");
  console.log(text);
  text.classList.add("quote_active");
};
navSlide();
quoteSlide(Math.floor(Math.random() * 4) + 1);
quote();
