document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("meal-modal");
  const mealContainers = document.querySelectorAll(".meals-container");
  const closeButton = document.querySelector(".close");

  mealContainers.forEach(function (container) {
    container.addEventListener("click", function () {
      modal.style.display= "block";
      <div class="meal-body">
        <%= meal.body %>
      </div>
    });
  });

  closeButton.addEventListener("click", function () {
    modal.style.display = "none";
  });

  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  })
})