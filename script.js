const cards = Array.from(document.querySelectorAll(".card"));
let zCounter = 1;

// bike starts on top to match the original layout
const bike = document.querySelector('[data-id="bike"]');
bike.classList.add("front");
bike.style.zIndex = zCounter++;

cards.forEach((card) => {
  card.addEventListener("click", () => {
    cards.forEach((c) => c.classList.remove("front"));
    card.classList.add("front");
    card.style.zIndex = zCounter++;
  });
});
