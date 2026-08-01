/* ==========================================
   Sai Krishna ❤️ Sruthi
   Wedding Invitation
========================================== */

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 2200);
});

/* ==========================================
   COUNTDOWN
========================================== */

const weddingDate = new Date("August 27, 2026 11:07:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance <= 0) {
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = String(hours).padStart(2, "0");
    document.getElementById("minutes").innerHTML = String(minutes).padStart(2, "0");
    document.getElementById("seconds").innerHTML = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);

/* ==========================================
   SMOOTH SCROLL
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

/* ==========================================
   FLOWER PETALS
========================================== */

const petals = document.getElementById("petals");

function createPetal() {
    const petal = document.createElement("div");
    petal.classList.add("petal");
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDuration = (Math.random() * 5 + 6) + "s";
    petal.style.opacity = Math.random();
    petal.style.transform = `scale(${Math.random() + 0.4})`;
    petals.appendChild(petal);
    setTimeout(() => {
        petal.remove();
    }, 11000);
}

setInterval(createPetal, 350);

/* ==========================================
   GALLERY LIGHTBOX
========================================== */

const images = document.querySelectorAll(".gallery img");
const lightbox = document.createElement("div");
lightbox.className = "lightbox";

const lightImage = document.createElement("img");
lightbox.appendChild(lightImage);
document.body.appendChild(lightbox);

images.forEach(img => {
    img.addEventListener("click", () => {
        lightImage.src = img.src;
        lightbox.classList.add("active");
    });
});

lightbox.addEventListener("click", () => {
    lightbox.classList.remove("active");
});

/* ==========================================
   SCROLL ANIMATION
========================================== */

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll("section").forEach(section => {
    section.classList.add("fade");
    observer.observe(section);
});

/* ==========================================
   BACKGROUND MUSIC
========================================== */

const music = document.getElementById("music");

document.body.addEventListener("click", () => {
    if (music) {
        music.play().catch(() => { });
    }
}, { once: true });

/* ==========================================
   RSVP
========================================== */

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("❤️ Thank you for your wishes!\n\nWe look forward to celebrating with you.");
    form.reset();
});

/* ==========================================
   HERO PARALLAX
========================================== */

window.addEventListener("scroll", () => {
    const hero = document.getElementById("hero");
    const offset = window.pageYOffset;
    hero.style.backgroundPositionY = offset * 0.5 + "px";
});

/* ==========================================
   FLOAT EFFECT
========================================== */

document.querySelectorAll(".person img").forEach(img => {
    img.classList.add("float");
});

/* ==========================================
   CURRENT YEAR
========================================== */

console.log("Sai Krishna ❤️ Sruthi Wedding Website");
