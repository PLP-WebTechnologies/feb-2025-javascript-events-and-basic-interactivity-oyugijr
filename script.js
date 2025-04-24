// Button click event
document.getElementById("actionBtn").addEventListener("click", () => {
  alert("Button clicked! 🎉");
});

// Hover effect
const hoverBox = document.getElementById("hoverBox");
hoverBox.addEventListener("mouseenter", () => {
  hoverBox.style.backgroundColor = "coral";
});
hoverBox.addEventListener("mouseleave", () => {
  hoverBox.style.backgroundColor = "lightblue";
});

// Keypress detection
document.getElementById("keyInput").addEventListener("keydown", (e) => {
  console.log("Key pressed:", e.key);
});

// Secret double-click action
hoverBox.addEventListener("dblclick", () => {
  alert("Double-click secret unlocked! 🕵️‍♀️");
});

// Tab functionality
const tabs = document.querySelectorAll(".tab");
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const tabNum = tab.getAttribute("data-tab");
    document.getElementById("tabContent").textContent = `You selected Tab ${tabNum}`;
  });
});

// Form validation and real-time feedback
const form = document.getElementById("signupForm");
const passwordInput = document.getElementById("password");
const feedback = document.getElementById("formFeedback");

passwordInput.addEventListener("input", () => {
  if (passwordInput.value.length < 8) {
    feedback.textContent = "Password must be at least 8 characters.";
    feedback.style.color = "red";
  } else {
    feedback.textContent = "✅ Password looks good!";
    feedback.style.color = "green";
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (passwordInput.value.length >= 8) {
    alert("Form submitted successfully! 🚀");
  } else {
    alert("Please fix errors before submitting.");
  }
});
