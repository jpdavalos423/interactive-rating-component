const ratingCard = document.querySelector(".rating-card-wrapper");
const thanksCard = document.querySelector(".thank-you-card-wrapper");
const ratingForm = document.getElementById("rating-form");
const ratingFeedback = document.getElementById("rating");

ratingForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const rating = parseInt(event.target.options.value);
  ratingFeedback.innerHTML = rating;

  ratingCard.style.display = "none";
  thanksCard.classList.remove("hidden");
});
