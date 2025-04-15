// Starting point: Day 1 unlocks on April 17, 2025 at 00:00
const startDate = new Date("2025-04-17T00:00:00");

// Get current date/time
const now = new Date();

// Calculate how many full days have passed since start
const diffMs = now - startDate;
const daysPassed = Math.floor(diffMs / (1000 * 60 * 60 * 24));

// Day number is based on how many days have passed (clamp from 0 to 6)
const currentDay = Math.max(0, Math.min(daysPassed, 6)) + 1;  // Day 1 to 7

// Show countdown (7 - currentDay + 1)
document.getElementById("countdown").textContent = 8 - currentDay;

// Generate day buttons
const grid = document.querySelector(".days-grid");

for (let i = 1; i <= 7; i++) {
  const btn = document.createElement("button");
  btn.textContent = `Day ${i}`;
  btn.className = "day-button";

  if (i <= currentDay) {
    btn.onclick = () => {
      window.location.href = `day${i}.html`;
    };
  } else {
    btn.classList.add("locked");
    btn.disabled = true;
  }

  grid.appendChild(btn);
}
