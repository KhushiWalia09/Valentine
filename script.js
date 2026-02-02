// --- AMAZON-STYLE INTERACTIONS ---

// Scroll Reveal Observer
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

const popup = document.getElementById("popup");
const popupText = document.getElementById("popupText");
const bgHeartsContainer = document.getElementById("bgHearts");

// Theme-appropriate messages for popups
const messages = [
  "🔍 Verifying item availability in our global fulfillment centers...",
  "📦 Checking stock at our 'Forever Yours' warehouse...",
  "🔒 Securing your connection for a safe emotional transaction...",
  "📋 Processing 1-Click Purchase of your lifetime happiness...",
  "🚚 Preparing for instant heart-to-heart delivery..."
];

// Initialize continuous background hearts
function initBackgroundHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.innerHTML = ["❤️", "💖", "✨", "🌸", "🌹"][Math.floor(Math.random() * 5)];
    heart.style.position = "absolute";
    heart.style.left = Math.random() * 100 + "%";
    heart.style.top = "110%";
    heart.style.fontSize = (Math.random() * 10 + 10) + "px";
    heart.style.opacity = Math.random() * 0.4 + 0.1; // Subtler for Amazon style
    heart.style.transition = (Math.random() * 10 + 10) + "s linear";
    heart.style.pointerEvents = "none";

    bgHeartsContainer.appendChild(heart);

    setTimeout(() => {
      heart.style.top = "-10%";
      heart.style.transform = `translateX(${(Math.random() - 0.5) * 100}px) rotate(${Math.random() * 360}deg)`;
    }, 100);

    setTimeout(() => heart.remove(), 20000);
  }, 2000);
}

initBackgroundHearts();

// Handle Amazon-style buttons
document.getElementById("addToCart").onclick = () => showAmazonPopup("cart");
document.getElementById("finalBuy").onclick = () => showAmazonPopup("confirm");

// Back to Top Functionality
document.getElementById("backToTop").onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Image Switching Logic
function changeImage(src, el) {
  document.getElementById("mainProdImg").src = src;
  document.querySelectorAll(".thumbnails img").forEach(img => img.classList.remove("active"));
  el.classList.add("active");
}

function showAmazonPopup(type) {
  popup.classList.remove("hidden");
  popupText.innerHTML = "";

  let i = 0;
  const interval = setInterval(() => {
    const line = document.createElement("div");
    line.textContent = messages[i];
    line.style.opacity = "0";
    line.style.marginBottom = "10px";
    line.style.fontSize = "0.95rem";
    line.style.color = "#565959";
    line.style.transition = "opacity 0.5s ease";
    popupText.appendChild(line);

    setTimeout(() => line.style.opacity = "1", 50);
    i++;

    if (i === messages.length) {
      clearInterval(interval);
      setTimeout(() => {
        const finalCard = document.createElement("div");
        finalCard.style.padding = "20px";
        finalCard.style.marginTop = "20px";
        finalCard.style.borderTop = "1px solid #ddd";

        if (type === "cart") {
          finalCard.innerHTML = `
            <div style="color: #CC0C39; font-weight: bold; font-size: 1.1rem;">⚠️ Out of Stock</div>
            <p style="margin-top: 10px; font-size: 0.9rem;">
              We're sorry! This item is unavailable as it has been claimed by a very special customer.<br><br>
              <strong>Status:</strong> Permanently Out of Stock for Others 😏
            </p>
          `;
        } else {
          finalCard.innerHTML = `
            <div style="color: #CC0C39; font-weight: bold; font-size: 1.1rem;">⚠️ Out of Stock</div>
            <p style="margin-top: 10px; font-size: 0.9rem;">
              We're sorry! This item is unavailable as it has been claimed by a very special customer.<br><br>
              <strong>Status:</strong> Permanently Out of Stock for Others 😏
            </p>
          `;
          launchAmazonHearts();
        }

        popupText.appendChild(finalCard);
      }, 500);
    }
  }, 800);
}

// Memory Modal Integration
const memoryModal = document.getElementById("memoryModal");
const unlockBtn = document.createElement("div");
unlockBtn.innerHTML = "See shared memories ❤️";
unlockBtn.style.textAlign = "center";
unlockBtn.style.color = "#007185";
unlockBtn.style.cursor = "pointer";
unlockBtn.style.fontSize = "0.85rem";
unlockBtn.style.marginTop = "15px";
unlockBtn.onmouseover = () => unlockBtn.style.textDecoration = "underline";
unlockBtn.onmouseout = () => unlockBtn.style.textDecoration = "none";
unlockBtn.onclick = () => {
  memoryModal.classList.remove("hidden");
  launchAmazonHearts();
};

document.querySelector(".buy-box").appendChild(unlockBtn);

function closePopup() {
  popup.classList.add("hidden");
}

function closeMemoryModal() {
  memoryModal.classList.add("hidden");
}

function launchAmazonHearts() {
  const heartEmojis = ["❤️", "💖", "💝", "💕", "💗", "💍", "🕊️"];

  for (let i = 0; i < 40; i++) {
    const heart = document.createElement("div");
    heart.innerHTML = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "%";
    heart.style.bottom = "-50px";
    heart.style.fontSize = (Math.random() * 20 + 15) + "px";
    heart.style.transition = (Math.random() * 3 + 2) + "s cubic-bezier(0.4, 0, 0.2, 1)";
    heart.style.zIndex = "3000";
    heart.style.pointerEvents = "none";
    heart.style.opacity = "1";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.style.transform = `translateY(-110vh) translateX(${(Math.random() - 0.5) * 200}px) rotate(${Math.random() * 720}deg) scale(1.5)`;
      heart.style.opacity = "0";
    }, 50);

    setTimeout(() => heart.remove(), 4000);
  }
}
