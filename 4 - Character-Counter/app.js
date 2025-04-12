// Select elements
const textbox = document.querySelector("#textbox");
const charCount = document.querySelector("#char");
const wordCount = document.querySelector("#word");
const themeToggle = document.querySelector("#theme-toggle");
const body = document.body;
const logo = document.querySelector("#app-logo");

// Character & Word Counter
textbox.addEventListener("input", function () {
  const text = this.value.trim();

  // Update character count
  charCount.innerText = text.length;

  // Update word count
  const wordArray = text.split(/\s+/).filter(word => word !== "");
  wordCount.innerText = wordArray.length;
});

// Theme toggle
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-theme");

  // If dark mode is ON
  if (body.classList.contains("dark-theme")) {
    logo.src = "./public/images/logo-dark-theme.svg"; // White logo for dark bg
    themeToggle.src = "./public/images/icon-sun.svg";   // White sun for dark bg
  } 
  // If light mode is ON
  else {
    logo.src = "./public/images/logo-light-theme.svg";  // Dark logo for light bg
    themeToggle.src = "./public/images/icon-moon.svg"; // Black moon for light bg
  }
});
