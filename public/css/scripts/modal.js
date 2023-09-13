document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("meal-modal");
  const mealContainers = document.querySelectorAll(".meals-container");
  const closeButton = document.querySelector(".close");
  const modalContent = document.querySelector(".modal-content");

  mealContainers.forEach(function (container) {
    container.addEventListener("click", async function () {
      try {
        const response = await fetch("/api/meals");
        if (response.status<200 || response.status >= 300) {
          throw new Error("Modal meals error");
        }

        const mealsData = await response.json();

        const meal = mealsData[index];

        modalContent.innerHTML = `
          <span class="close">&times;</span>
          <h2>${meal.name}</h2
          <img src="${meal.photo_url}">
          <p>${meal.body}</p>
        `;
        
    modal.style.display= "block";
    } catch (error) {
      console.error("Error fetching meal data:", error);
    }
    });
  });

  closeButton.addEventListener("click", function () {
    modal.style.display = "none";
  });

  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});