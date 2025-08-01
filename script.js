function showMessage() {
  alert("Vinu! I’m really sorry if I made any mistake and hurt you 😔\n" +
        "I know sometimes small talks turn into big fights, but I never meant to fight with you.\n" +
        "You are everything to me, my little brother — my support, my strength.\n" +
        "Thank you for being in my life 🫶\n\n— Disu");
}

// Typewriter effect with your personal message
const message = "Really sorry Vinu, if I made any mistake and hurt you from any word ,talk and behaviour. I know I stick with small small talks and it turns into a big fight. But my intention is pure — I don’t want to fight with you. I just want to understand your heart and problems. I don’t want to see you sad. You are everything for me, my little brother. You may be younger, but you live like my elder brother — my support and everything. Thank you so much, Vinu, for being a part of my life 🫶🫶";
let index = 0;
const typewriter = document.getElementById("typewriter");
function type() {
  if (index < message.length) {
    typewriter.innerHTML += message.charAt(index);
    index++;
    setTimeout(type, 50);
  }
}
type();

// Falling petals animation
const emojis = ["🌸", "💗", "💕", "💖"];
function createPetal() {
  const petal = document.createElement("div");
  petal.classList.add("petal");
  petal.style.left = Math.random() * 100 + "vw";
  petal.style.animationDuration = (5 + Math.random() * 5) + "s";
  petal.innerText = emojis[Math.floor(Math.random() * emojis.length)];
  document.querySelector(".petals").appendChild(petal);
  setTimeout(() => petal.remove(), 10000);
}
setInterval(createPetal, 300);