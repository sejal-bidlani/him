function checkPassword() {
  const pass = document.getElementById("password").value;

  if (pass === "0715") {
    document.getElementById("lock-screen").style.display = "none";
    document.getElementById("main-content").style.display = "block";

    typeEffect();

    // 🎵 music fade-in
    const music = document.getElementById("bg-music");

music.volume = 0.3;

// resume from saved time
const savedTime = localStorage.getItem("musicTime");
if (savedTime) {
  music.currentTime = savedTime;
}

music.play();

// keep saving time
setInterval(() => {
  localStorage.setItem("musicTime", music.currentTime);
}, 1000);

  } else {
    alert("Wrong password 😏");
  }
}


// message
const text = `Hey you...

Today is about you.

The way you move through life,
so quietly,
yet leaving warmth everywhere you go...

You don’t even realise
how rare that is.
You make the world softer,
just by being in it.

Your kindness.
Your honesty.
The way you choose right,
even when it's hard...

I admire that more than I can say.
I don’t wish for anything loud for you.

Just a life that feels peaceful.
A life where you feel seen.
A life where you are truly happy.

And wherever life takes you...
I just hope,
it stays gentle with you.

Because someone like you...
deserves nothing less ❤️`;

let index = 0;

function typeEffect() {
  const el = document.getElementById("typewriter");
  el.style.opacity = 1;

  if (index < text.length) {
    el.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 80);
  } else {
    // 👇 show button AFTER typing finishes
    document.getElementById("continueBtn").style.display = "inline-block";
  }
}
// redirect to playful page
function goNext() {
  window.location.href = "play.html";
}

const finalLine = "I loved you, I love you, and I will always keep loving you.";
let idx = 0;

function typeFinalLine() {
  const el = document.getElementById("final-line-text");

  if (idx < finalLine.length) {
    el.innerHTML += finalLine.charAt(idx);
    idx++;
    setTimeout(typeFinalLine, 60); // speed
  }
}