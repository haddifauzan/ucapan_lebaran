const confettiContainer = document.getElementById("confetti-container");
const colors = [
  "#4ade80",
  "#fcd34d",
  "#f87171",
  "#60a5fa",
  "#c084fc",
  "#ffffff"
];

// Get modal elements
const modal = document.getElementById("qrModal");
const btn = document.getElementById("celebrateBtn");
const closeBtn = document.getElementsByClassName("close-btn")[0];

function createConfetti() {
  for (let i = 0; i < 100; i++) {
    setTimeout(() => {
      const confetti = document.createElement("div");
      confetti.classList.add("confetti");
      confetti.style.left = Math.random() * 100 + "vw";
      confetti.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
      confetti.style.animationDelay = Math.random() * 5 + "s";
      confettiContainer.appendChild(confetti);

      setTimeout(() => {
        confetti.remove();
      }, 3000);
    }, i * 50);
  }
}

createConfetti();

// Modal event listeners
btn.addEventListener("click", () => {
  createConfetti();
  
  // Try to play audio
  const audio = new Audio("assets/audio.mp3");
  audio.play().catch(e => console.log("Audio playback failed:", e));
  
  // Animate elements
  document.querySelectorAll(".lantern").forEach(lantern => {
    lantern.style.animation = "sway 3s infinite ease-in-out";
    setTimeout(() => {
      lantern.style.animation = "sway 5s infinite ease-in-out";
    }, 3000);
  });

  document.querySelectorAll(".ketupat").forEach(ketupat => {
    ketupat.style.animation = "float 1.5s infinite ease-in-out";
    setTimeout(() => {
      ketupat.style.animation = "float 3s infinite ease-in-out";
    }, 3000);
  });
  
  // Show the modal
  modal.style.display = "flex";
});

// Close the modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Also close when clicking outside of modal content
window.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

// Create twinkling stars
setInterval(() => {
  const star = document.createElement("div");
  star.classList.add("star");
  star.style.position = "absolute";
  star.style.top = Math.random() * 40 + "vh";
  star.style.left = Math.random() * 100 + "vw";
  star.style.width = Math.random() * 2 + 1 + "px";
  star.style.height = star.style.width;
  star.style.backgroundColor = "white";
  star.style.borderRadius = "50%";
  star.style.animationDelay = Math.random() * 2 + "s";

  document.body.appendChild(star);

  setTimeout(() => {
    star.remove();
  }, 10000);
}, 2000);