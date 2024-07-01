const ratingCardHeaderStart = document.getElementById("rating-card-header");
const ratingForm = document.getElementById("rating-form");

ratingForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const rating = parseInt(event.target.options.value);
  console.log(`rating: ${rating}`);

  ratingForm.style.display = "none";
  ratingCardHeaderStart.style.display = "none";
});
