const user = localStorage.getItem("hogwartsUser");

if (!user) {
  window.location.href = "login.html";
}
const name = localStorage.getItem("hogwartsUser");
document.querySelector(".intro p").textContent =
  `Welcome, ${name}. Hogwarts will remember you.`;
function logout() {
  localStorage.removeItem("hogwartsUser");
  window.location.href = "login.html";
}

// ================= FLOATING DUST =================
const dust = document.getElementById("dust");
for (let i = 0; i < 120; i++) {
  const s = document.createElement("span");
  s.style.left = Math.random() * 100 + "vw";
  s.style.top = Math.random() * 100 + "vh";
  s.style.animationDuration = 5 + Math.random() * 10 + "s";
  s.style.animationDelay = Math.random() * 10 + "s";
  dust.appendChild(s);
}


// ================= STORY MODAL =================
const cards = document.querySelectorAll(".character-card");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const closeBtn = document.getElementById("close");

cards.forEach(card => {
  card.addEventListener("click", () => {
    modalTitle.innerText = card.querySelector("h4").innerText;
    modalText.innerText = card.querySelector("span").innerText;
    modal.classList.add("show");
  });
});

closeBtn.addEventListener("click", () => modal.classList.remove("show"));
modal.addEventListener("click", e => {
  if (e.target === modal) modal.classList.remove("show");
});

// ================= DOBBY =================
// ================= DOBBY EASTER EGG =================
document.addEventListener("DOMContentLoaded", () => {
  const dobby = document.getElementById("dobby");
  const dobbyText = document.getElementById("dobby-text");

  let freed = false;

  if (!dobby || !dobbyText) return;

  dobby.addEventListener("click", () => {
    if (freed) return;
    freed = true;

    dobby.classList.add("freed");
    dobbyText.classList.add("visible");

    // Sparkles
    for (let i = 0; i < 25; i++) {
      const sparkle = document.createElement("span");
      sparkle.className = "sparkle";
      sparkle.style.left = Math.random() * 100 + "%";
      sparkle.style.top = Math.random() * 100 + "%";
      dobby.parentElement.appendChild(sparkle);

      setTimeout(() => sparkle.remove(), 2000);
    }
  });
});




// ================= HOUSE FILTER =================
document.querySelectorAll(".house-filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const house = btn.dataset.house;
    cards.forEach(card => {
      if (house === "all" || card.dataset.house === house) {
        card.style.display = "block";
        setTimeout(() => card.classList.add("visible"), 50);
      } else {
        card.classList.remove("visible");
        setTimeout(() => card.style.display = "none", 300);
      }
    });
  });
});

// ================= HOUSES DATA =================
const houses = [
  {
    name: "Gryffindor",
    color: "#7f0909",
    desc: "Brave at heart, daring and bold.",
    crest: "gryffindor.png"
  },
  {
    name: "Slytherin",
    color: "#1a472a",
    desc: "Cunning, ambitious, and resourceful.",
    crest: "slytherin.png"
  },
  {
    name: "Ravenclaw",
    color: "#0e1a40",
    desc: "Wise, witty, and endlessly curious.",
    crest: "ravenclaw.png"
  },
  {
    name: "Hufflepuff",
    color: "#ecb939",
    desc: "Loyal, patient, and true.",
    crest: "hufflepuff.png"
  }
];

// ================= SORTING HAT =================
const sortBtn = document.getElementById("sort-button");

sortBtn.addEventListener("click", () => {
  const name = document.getElementById("student-name").value.trim();
  if (!name) {
    alert("The hat refuses to speak without a name.");
    return;
  }

  const house = houses[Math.floor(Math.random() * houses.length)];

  document.getElementById("house-name").textContent = house.name;
  document.getElementById("house-desc").textContent = house.desc;
  document.getElementById("house-crest").src = house.crest;

  const resultBox = document.getElementById("sorting-result");
  resultBox.classList.add("reveal");

  unlockSweet(house.name);
});

// ================= INTRO → HOGWARTS =================
const enterBtn = document.getElementById("enter-hogwarts");
const intro = document.getElementById("hogwarts-intro");
const site = document.getElementById("site-content");
const train = document.querySelector(".train");
const trainSound = document.getElementById("train-sound");

enterBtn.addEventListener("click", () => {
  trainSound.currentTime = 0;
  trainSound.play().catch(() => {});

  train.classList.add("enter");

  setTimeout(() => {
    intro.classList.add("hide");
    site.classList.add("visible");
  }, 2000);
});

// ===== Bertie Bott Beans =====
const flavours = ["Chocolate 🍫","Grass 🌱","Earwax 🤢","Caramel 🍯","Soap 🧼","Strawberry 🍓"];
document.getElementById("bean").addEventListener("mouseenter", () => {
  const flavour = flavours[Math.floor(Math.random()*flavours.length)];
  document.getElementById("bean-flavour").textContent = `Flavour: ${flavour}`;
});

// ===== Chocolate Frog =====
// ===== Chocolate Frog =====
const frog = document.getElementById("frog");
const card = document.getElementById("frog-card");
const sparkleContainer = document.getElementById("sparkle-container");

const frogCards = [
  { name: "Albus Dumbledore", desc: "Headmaster of Hogwarts. Master of the Elder Wand." },
  { name: "Minerva McGonagall", desc: "Transfiguration expert and fierce protector of Hogwarts." },
  { name: "Godric Gryffindor", desc: "Founder of Gryffindor. Known for bravery and honor." },
  { name: "Salazar Slytherin", desc: "Cunning founder who valued ambition and blood purity." },
  { name: "Rowena Ravenclaw", desc: "The most brilliant witch of her time." },
  { name: "Helga Hufflepuff", desc: "Kind, loyal, and fair. Welcomed all students." },
  { name: "Merlin", desc: "Legendary wizard from ages past. Only the worthy find him.", rare:true },
  { name: "The Boy Who Lived", desc: "Harry Potter — only appears once in a blue moon.", rare:true }
];

// Create sparkles
function createSparkle(x, y) {
  const s = document.createElement("div");
  s.className = "sparkle";
  s.style.left = x + "px";
  s.style.top = y + "px";
  sparkleContainer.appendChild(s);
  setTimeout(() => s.remove(), 800);
}

frog.addEventListener("click", () => {
  frog.classList.add("frog-jump");

  setTimeout(() => {
    frog.classList.remove("frog-jump");

    const isRare = Math.random() < 0.01;
    const pool = isRare ? frogCards.filter(c => c.rare) : frogCards.filter(c => !c.rare);
    const wizard = pool[Math.floor(Math.random() * pool.length)];


    // Show card
    card.innerHTML = `<h3>${wizard.name}${isRare ? " ✨" : ""}</h3><p>${wizard.desc}</p>`;
    card.style.display = "block";
    card.style.opacity = 0;
    card.style.transform = "translateY(-20px)";
    requestAnimationFrame(() => {
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
      card.style.boxShadow = isRare
        ? "0 0 25px 5px rgba(255,255,255,0.9)"
        : "0 0 15px 3px rgba(180,140,255,0.6)";
    });

  }, 500);
});


// ===== House sweet unlock =====
function unlockSweet(house) {
  const text = {
    Gryffindor:"🔥 A spicy cinnamon chocolate unlocks!",
    Slytherin:"🐍 A dark mint serpent sweet appears!",
    Ravenclaw:"🦅 Blueberry wisdom drops unlock!",
    Hufflepuff:"🦡 Honeycomb fudge revealed!"
  };
  setTimeout(()=>alert(text[house]), 800);
}

// ================= QUIZ QUESTION 4 =================
// ================= CHARACTER QUIZ =================

// All question blocks
const questions = document.querySelectorAll("#character-quiz .question");

// Result elements
const resultBox = document.getElementById("character-result");
const characterName = document.getElementById("character-name");
const characterDesc = document.getElementById("character-desc");

// House scores
const scores = {
  gryffindor: 0,
  slytherin: 0,
  ravenclaw: 0,
  hufflepuff: 0
};

// Traits chosen in last question
let chosenTraits = [];

// Character pools
const characterPool = {
  gryffindor: [
    { name: "Harry Potter", traits: ["brave"], desc: "You face fear even when your hands shake." },
    { name: "Hermione Granger", traits: ["clever"], desc: "Your mind is your greatest spell." },
    { name: "Sirius Black", traits: ["chaotic"], desc: "Wild heart. Fierce loyalty." }
  ],
  slytherin: [
    { name: "Severus Snape", traits: ["ambitious"], desc: "Complex, driven, deeply loyal beneath silence." },
    { name: "Draco Malfoy", traits: ["ambitious"], desc: "Conflicted, proud, evolving." }
  ],
  ravenclaw: [
    { name: "Luna Lovegood", traits: ["gentle"], desc: "You see truths others miss." },
    { name: "Filius Flitwick", traits: ["clever"], desc: "Soft-spoken brilliance." }
  ],
  hufflepuff: [
    { name: "Cedric Diggory", traits: ["gentle"], desc: "Kindness with courage." },
    { name: "Newt Scamander", traits: ["gentle"], desc: "You care for what others overlook." }
  ]
};

// ================= CLICK HANDLING =================
questions.forEach((question, index) => {
  question.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;

    // Score logic
    const score = btn.dataset.score;
    const trait = btn.dataset.trait;

    if (score && scores[score] !== undefined) {
      scores[score]++;
    }

    if (trait) {
      chosenTraits.push(trait);
    }

    // Hide current question
    question.classList.add("hidden");

    // Show next or reveal result
    const nextQuestion = questions[index + 1];
    if (nextQuestion) {
      nextQuestion.classList.remove("hidden");
    } else {
      revealCharacter();
    }
  });
});

// ================= RESULT LOGIC =================
function revealCharacter() {
  // Determine strongest house
  const topHouse = Object.keys(scores).reduce((a, b) =>
    scores[a] >= scores[b] ? a : b
  );

  const pool = characterPool[topHouse];

  // Match by traits
  let bestMatch = pool[0];
  let highestMatch = -1;

  pool.forEach(char => {
    const matches = char.traits.filter(t => chosenTraits.includes(t)).length;
    if (matches > highestMatch) {
      highestMatch = matches;
      bestMatch = char;
    }
  });

  // Reveal result
  characterName.textContent = bestMatch.name;
  characterDesc.textContent = bestMatch.desc;

  resultBox.classList.remove("hidden");
}
const logoutBtn = document.getElementById("logout-btn");
const overlay = document.getElementById("logout-overlay");

logoutBtn.addEventListener("click", () => {
  overlay.style.display = "block";

  // Small delay to feel intentional
  setTimeout(() => {
    localStorage.removeItem("hogwartsUser");
  }, 1200);

  // Redirect after animation completes
  setTimeout(() => {
    window.location.href = "login.html";
  }, 2600);
});
// ================= FOREST ADVENTURE =================

let danger = 0;
let current = 0;

const scenes = [
  "entry",
  "challenge1",
  "challenge2",
  "challenge3",
  "result"
];

function showScene(id) {
  document.querySelectorAll(".scene").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function enterForest() {
  current = 1;
  showScene(scenes[current]);
}

function turnBack() {
  showScene("result");
  document.getElementById("result-title").textContent = "You Turned Back";
  document.getElementById("result-text").textContent =
    "Wisdom is knowing when not to step into the dark.";
}

function choose(value) {
  danger += value;
  current++;

  if (current < scenes.length - 1) {
    showScene(scenes[current]);
  } else {
    endGame();
  }
}

function endGame() {
  showScene("result");

  if (danger >= 4) {
    document.getElementById("result-title").textContent = "You Were Lost";
    document.getElementById("result-text").textContent =
      "The forest remembers those who underestimate it.";
  } else {
    document.getElementById("result-title").textContent = "You Survived";
    document.getElementById("result-text").textContent =
      "You walked into darkness — and returned changed.";
  }
}
// ================= ROOM OF REFLECTION =================

document.addEventListener("DOMContentLoaded", () => {

  const room = document.getElementById("room-of-reflection");
  const questions = Array.from(document.querySelectorAll(".question"));
  const resultBox = document.getElementById("reflection-result");
  const resultText = resultBox.querySelector(".result-text");
  const exitBtn = document.getElementById("exit-room");

  let chosenTraits = [];

  // Show the room
  room.classList.remove("hidden");

  // Handle button clicks
  questions.forEach((q, index) => {
    const buttons = Array.from(q.querySelectorAll("button"));
    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        if(btn.dataset.trait) chosenTraits.push(btn.dataset.trait);

        q.classList.add("hidden");

        if(questions[index + 1]) {
          questions[index + 1].classList.remove("hidden");
        } else {
          revealReflection();
        }
      });
    });
  });

  function revealReflection() {
    const reflectionMessages = [
      "You carry quiet strength, even when unseen.",
      "Doubt follows you, but it does not define you.",
      "Your heart is honest, though shadows linger.",
      "You survive by adapting, not by fighting.",
      "You see deeply, even when you pretend not to."
    ];

    const randIndex = Math.floor(Math.random() * reflectionMessages.length);
    const message = reflectionMessages[randIndex];

    resultBox.classList.remove("hidden");
    typeText(resultText, message, 0);
  }

  function typeText(element, text, i) {
    if(i < text.length) {
      element.textContent += text.charAt(i);
      setTimeout(() => typeText(element, text, i + 1), 50);
    }
  }

  exitBtn.addEventListener("click", () => {
    room.classList.add("hidden");
    questions.forEach(q => q.classList.add("hidden"));
    questions[0].classList.remove("hidden");
    resultText.textContent = "";
    chosenTraits = [];
    resultBox.classList.add("hidden");
  });

});
const room = document.getElementById("room-of-reflection");
const hogwartsInfo = document.querySelector(".hogwarts-info"); // the section before room

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY + window.innerHeight;
  const triggerPosition = hogwartsInfo.offsetTop + hogwartsInfo.offsetHeight;

  if(scrollPosition >= triggerPosition) {
    room.classList.add("visible");
  } else {
    room.classList.remove("visible");
  }
});

// ================= POTION BREWING =================

const ingredients = document.querySelectorAll(".ingredient");
const brewBtn = document.getElementById("brew-btn");
const potionResult = document.getElementById("potion-result");
const potionText = document.getElementById("potion-text");
const potionDiv = document.querySelector(".potion");
const cauldron = document.querySelector(".cauldron");

let selectedIngredients = [];

ingredients.forEach(ing => {
  ing.addEventListener("click", () => {
    if (selectedIngredients.includes(ing.dataset.name)) {
      selectedIngredients = selectedIngredients.filter(i => i !== ing.dataset.name);
      ing.classList.remove("selected");
    } else {
      if (selectedIngredients.length < 3) {
        selectedIngredients.push(ing.dataset.name);
        ing.classList.add("selected");
      }
    }
    // Change potion color based on selected ingredients
    if(selectedIngredients.length > 0){
      const colors = selectedIngredients.map(i => {
        const ingEl = document.querySelector(`.ingredient[data-name="${i}"]`);
        return ingEl.dataset.color;
      });
      potionDiv.style.background = `linear-gradient(45deg, ${colors.join(", ")})`;
    } else {
      potionDiv.style.background = "#555";
    }
  });
});

brewBtn.addEventListener("click", () => {
  if(selectedIngredients.length < 3){
    alert("Pick 3 ingredients!");
    return;
  }

  // Bubbles animation
  const bubbles = document.createElement("div");
  bubbles.classList.add("bubbles");
  cauldron.appendChild(bubbles);
  setTimeout(() => cauldron.removeChild(bubbles), 1500);

  const effects = [
    "You gain the ability to speak to magical creatures!",
    "A temporary invisibility shroud envelops you.",
    "Your wand glows with a new hidden power.",
    "You feel a surge of courage coursing through you.",
    "The potion fizzes chaotically and bursts! (Oops…)",
    "Your hair turns neon purple for a day.",
    "A mysterious whisper tells you a secret of Hogwarts.",
    "You float a few inches above the ground!",
    "A rainbow spark surrounds you — pure magic!",
    "The potion creates harmless sparkly smoke around you."
  ];

  const effect = effects[Math.floor(Math.random() * effects.length)];
  potionText.textContent = `Ingredients: ${selectedIngredients.join(", ")} → ${effect}`;
  potionResult.classList.remove("hidden");

  // Reset selections
  selectedIngredients = [];
  ingredients.forEach(i => i.classList.remove("selected"));
  potionDiv.style.background = "#555";
});



