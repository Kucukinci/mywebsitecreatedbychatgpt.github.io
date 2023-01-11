// Get all the skill level bars
const skillLevelBars = document.querySelectorAll('.skill-level');

// Loop through the skill level bars
skillLevelBars.forEach(bar => {
  // Get the data-level attribute value
  const skillLevel = bar.parentElement.getAttribute('data-level');
  // Update the width of the bar to match the skill level
  bar.style.width = skillLevel;
});