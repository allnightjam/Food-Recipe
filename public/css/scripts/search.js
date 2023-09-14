const searchInput = document.getElementById('search-input');
const mealContainers = document.querySelectorAll(".meals-container");

searchInput.addEventListener("input", function(event) {
  const searchTerm = event.target.value.toLowerCase();
  mealContainers.forEach(function(container) {
    const mealNames = container.querySelectorAll(".meal-name h3");
    let showContainer = false;
    
  mealNames.forEach(function(mealName) {
    const mealNameText = mealName.innerText.toLowerCase();
    if (mealNameText.includes(searchTerm)) {
      showContainer = true;  
    }
    });

    if (showContainer) {
      container.style.display = "block";
    } else {
      container.style.display = "none";
    }
  });
});