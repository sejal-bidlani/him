window.onload = () => {
  const music = document.getElementById("bg-music");

  music.volume = 0.3;

  const savedTime = localStorage.getItem("musicTime");
  if (savedTime) {
    music.currentTime = savedTime;
  }

  music.play();

  setInterval(() => {
    localStorage.setItem("musicTime", music.currentTime);
  }, 1000);
};

const cards = document.querySelectorAll(".card");
const nextBtn = document.getElementById("next-btn");
const container = document.getElementById("card-container");
const finalMessage = document.getElementById("final-message");

let current = 0;

// 👉 CARD NAVIGATION (FIXED)
nextBtn.addEventListener("click", () => {
  cards[current].classList.remove("active");
  current++;

  if (current < cards.length) {
    cards[current].classList.add("active");
  } else {
    showFinal();
  }
});

// 👉 SHOW FINAL MESSAGE (NO EARLY FADE)
function showFinal() {

  setTimeout(() => {

    // show all cards in final layout
    cards.forEach(card => {
      card.classList.remove("active");
      card.style.display = "block";
      card.style.opacity = "1"; // ensure visible
    });

    container.classList.add("final");

    // show message
    finalMessage.style.display = "flex";

    setTimeout(() => {
      finalMessage.style.opacity = "1";
      showMessageLineByLine(); // 🔥 message starts
    }, 200);

  }, 300);

  nextBtn.style.display = "none";
}

// 💖 FINAL LINE TYPEWRITER
const finalLine = "I loved you, I love you, and I will always keep loving you....!❤️";
let idx = 0;

function typeFinalLine() {
  const el = document.getElementById("final-line-text");

  if (idx < finalLine.length) {
    el.innerHTML += finalLine.charAt(idx);
    idx++;
    setTimeout(typeFinalLine, 60);
  }
}

// 🎬 FINAL TRANSITION (NOW HANDLES FADE)
function startEnding() {

  // 🔥 STEP 1: FADE CARDS
  cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transition = "opacity 1.5s ease";
  });

  container.style.opacity = "0";
  container.style.transition = "opacity 1.5s ease";

  // 🔥 STEP 2: DISABLE INTERACTION AFTER FADE
  setTimeout(() => {
    container.style.pointerEvents = "none";
  }, 1500);

  // 🔥 STEP 3: FADE MESSAGE
  setTimeout(() => {
    finalMessage.style.opacity = "0";
  }, 2000);

  // 🔥 STEP 4: FINAL SCREEN
  setTimeout(() => {
    const screen = document.getElementById("final-line-screen");
    screen.style.opacity = "1";
    typeFinalLine();
  }, 4000);
}

// 💌 MESSAGE LINES
const messageLines = [
  "I have never seen a person like you… so honest...",
  
  "A person who has never thought bad about anyone,",
  "who knows exactly what to say and what not to.",
  "I mean, sometimes I feel it’s impossible",
  "to have someone this perfect.",

  "Aap itne acche ho ki kabhi kabhi lagta hai",
  "main khud red flag hoon 😄",

  "Ever since you have come into my life,",
  "things have definitely become better.",
  "You’ve taught me so much,",
  "although patience is something I am still figuring out.",

  "I am an extremist when it comes to love,",
  "and you have no idea how lucky I feel",
  "that I get to love you.",

  "I might complain about you not giving me enough time,",
  "but I know what it takes for you",
  "to even get on a call with me.",

  "Agar mera bas chale toh main aapko sabse chhupa ke rakh lu…",
  "like I would literally keep you hidden just for me 😄",

  "A very very big thank you… just for existing.",
  "I know you will never take credit for what you do,",
  "that’s just who you are.",

  "I will never stop talking about you…",
  "I could go on for pages.",

  "I am so proud of you.",

  "Wishing you a very happy birthday, my love ❤️"
];

let i = 0;

// 👉 LINE-BY-LINE MESSAGE (CONTROLS FLOW)
function showMessageLineByLine() {
  const containerMsg = document.getElementById("message-container");

  if (i < messageLines.length) {
    const line = document.createElement("p");
    line.innerText = messageLines[i];
    line.style.opacity = 0;
    line.style.margin = "4px 0";

    containerMsg.appendChild(line);

    setTimeout(() => {
      line.style.opacity = 1;
    }, 100);

    i++;

    setTimeout(showMessageLineByLine, 1800);
  } else {
    // 🔥 ONLY AFTER FULL MESSAGE → START ENDING
    setTimeout(startEnding, 3000);
  }
}