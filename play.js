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

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

// overlap both buttons initially
yesBtn.style.left = "50%";
yesBtn.style.top = "50%";
yesBtn.style.transform = "translate(-50%, -50%)";

noBtn.style.left = "50%";
noBtn.style.top = "50%";
noBtn.style.transform = "translate(-50%, -50%)";

// make YES run away
yesBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);

  yesBtn.style.left = `${x}px`;
  yesBtn.style.top = `${y}px`;
  yesBtn.style.transform = "none";
});

function goNext() {
  window.location.href = "memory.html";
}