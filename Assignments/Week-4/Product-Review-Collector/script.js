import { reviewsArr } from "./reviewsArr.js"

document.addEventListener('DOMContentLoaded', () => {
    const starElements = document.querySelectorAll('#star-rating .bi');
    let starsGiven = 0;

    starElements.forEach((star, index) => {
        star.addEventListener('click', () => {
            starsGiven = index + 1;
            starRatingFill(starsGiven);
        });

        star.addEventListener('mouseover', () => {
            starRatingFill(index + 1);
        });

        star.addEventListener('mouseout', () => {
            starRatingFill(starsGiven);
        });
    });

    function starRatingFill(stars) {
        const starRating = document.getElementById("star-rating");
        if (starRating) {
            for (let i = 0; i < 5; i++) {
                if (i < stars) {
                    starRating.children[i].classList.add("checked");
                    starRating.children[i].classList.remove("bi-star");
                    starRating.children[i].classList.add("bi-star-fill");
                } else {
                    starRating.children[i].classList.remove("checked");
                    starRating.children[i].classList.remove("bi-star-fill");
                    starRating.children[i].classList.add("bi-star");
                }
            }
        }
    }

    const submitButton = document.getElementById("submit-review");
    const reviewInput = document.getElementById("review-input");
    const userNameInput = document.getElementById("user-name");
    const reviewList = document.getElementById("review-list");

    submitButton.addEventListener('click', () => {
        if (reviewInput.value && userNameInput.value && starsGiven) {
            const newReview = {
                starsGiven: starsGiven,
                userName: userNameInput.value,
                comment: reviewInput.value,
                timeStamp: new Date().toLocaleString()
            };

            reviewsArr.unshift(newReview);
            const reviewElement = renderReview(newReview);
            reviewList.insertBefore(reviewElement, reviewList.firstChild);
            reviewInput.value = "";
            userNameInput.value = "";
            starsGiven = 0;
            starRatingFill(starsGiven);
        } else {
            alert("Please fill all the fields");
        }
    });

    function renderReview(review) {
        const reviewElement = document.createElement("div");
        reviewElement.classList.add("col-md-6", "mb-3");
        reviewElement.innerHTML = `
            <div class="card review-card">
                <div class="card-body">
                    <div class="stars">
                        ${'<i class="bi bi-star-fill text-warning"></i>'.repeat(review.starsGiven)}
                        ${'<i class="bi bi-star text-warning"></i>'.repeat(5 - review.starsGiven)}
                    </div>
                    <h3>${review.userName}</h3>
                    <p>${review.comment}</p>
                    <p>${review.timeStamp}</p>
                </div>
            </div>
        `;
        return reviewElement;
    }

    reviewsArr.forEach(review => {
        const reviewElement = renderReview(review);
        reviewList.appendChild(reviewElement);
    });

    reviewList.addEventListener('click', (event) => {
        if (event.target.classList.contains("delete")) {
            const reviewElement = event.target.parentElement;
            const reviewIndex = Array.from(reviewElement.parentElement.children).indexOf(reviewElement);
            reviewsArr.splice(reviewIndex, 1);
            reviewElement.remove();
        }
    });


     // Theme toggle functionality
     const themeToggle = document.getElementById('theme-toggle');
     themeToggle.addEventListener('change', () => {
         if (themeToggle.checked) {
             document.body.classList.add('bg-dark');
             document.body.classList.remove('bg-light');
         } else {
             document.body.classList.add('bg-light');
             document.body.classList.remove('bg-dark');
         }
     });
 
     // Set initial theme to light mode
     document.body.classList.add('bg-light');
});