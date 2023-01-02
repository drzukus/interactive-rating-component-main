const ratingForm = document.querySelector(".rating-form")
const ratingCard = document.querySelector(".rating-card")
const thankYouCard = document.querySelector(".thank-you-card")

ratingForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const checkedRating = document.querySelector("input[name='rating']:checked");

    if (!checkedRating) return

    const rating = document.querySelector("#rating")
    rating.textContent = checkedRating.value

    ratingCard.classList.add("hidden");
    thankYouCard.classList.remove("hidden");
});