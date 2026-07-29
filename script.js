const button = document.getElementById("openBtn");
const letter = document.getElementById("letter");

button.addEventListener("click", () => {
    letter.classList.remove("hidden");
    button.style.display = "none";

    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");

        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.animationDelay = Math.random() * 2 + "s";
        confetti.style.background = ⁠ hsl(${Math.random() * 360},100%,60%) ⁠;

        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(), 4000);
    }
});

// Create stars
for (let i = 0; i < 150; i++) {
    const star = document.createElement("div");
    star.classList.add("star");

    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";
    star.style.animationDelay = Math.random() * 2 + "s";

    document.body.appendChild(star);
}
// Floating hearts
setInterval(() => {
    const heart = document.createElement("div");

    heart.innerHTML = "❤️";
    heart.classList.add("heart");

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (20 + Math.random() * 20) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);

}, 500);
const reasons = [
    "❤️ Your beautiful smile",
    "🥺 The way you care for me",
    "😂 The way you make me laugh",
    "🌙 You're my peace",
    "✨ You're my favorite person",
    "💖 Everything about you"
];

const reasonBtn = document.getElementById("reasonBtn");
const reasonText = document.getElementById("reasonText");

let index = 0;

reasonBtn.addEventListener("click", () => {
    reasonText.textContent = reasons[index];

    index++;

    if (index >= reasons.length) {
        index = 0;
    }
});
// ❤️ Change this date to the day you both got together
const anniversary = new Date("2026-04-04");

const today = new Date();

const diff = today - anniversary;

const days = Math.floor(diff / (1000 * 60 * 60 * 24));

document.getElementById("daysTogether").textContent =
⁠ ❤️ ${days} days together ❤️ ⁠;
/ 🌠 Shooting Stars
setInterval(() => {
    const shootingStar = document.createElement("div");
    shootingStar.classList.add("shooting-star");

    shootingStar.style.top = Math.random() * 40 + "vh";
    shootingStar.style.left = "-150px";

    document.body.appendChild(shootingStar);

    setTimeout(() => {
        shootingStar.remove();
    }, 3000);
}, 5000);
