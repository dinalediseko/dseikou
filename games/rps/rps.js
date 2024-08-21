// Get DOM elements
const gameContainer = document.querySelector(".container"),
  userResult = document.querySelector(".user_result img"),
  cpuResult = document.querySelector(".cpu_result img"),
  result = document.querySelector(".result"),
  optionImages = document.querySelectorAll(".option_image"),
  userScoreElement = document.getElementById("user-score"),
  cpuScoreElement = document.getElementById("cpu-score"),
  restartButton = document.getElementById("restart-btn");

// Initialize scores
let userScore = 0;
let cpuScore = 0;

// Update the scores
function updateScore(winner) {
  if (winner === "You") {
    userScore++;
    userScoreElement.textContent = userScore;
  } else if (winner === "D'SEIKOU") {
    cpuScore++;
    cpuScoreElement.textContent = cpuScore;
  }
}

// Restart the game
restartButton.addEventListener("click", () => {
  userScore = 0;
  cpuScore = 0;
  userScoreElement.textContent = userScore;
  cpuScoreElement.textContent = cpuScore;
  userResult.src = cpuResult.src = "images/rock.png";
  result.textContent = "Make your choice!";
  optionImages.forEach(image => image.classList.remove("active"));
  gameContainer.classList.remove("start");
  restartButton.style.display = "none"; // Hide the restart button after restarting
});

// Loop through each option image element
optionImages.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    image.classList.add("active");

    userResult.src = cpuResult.src = "images/rock.png";
    result.textContent = "Wait...";
    restartButton.style.display = "block"; // Show the restart button when the game starts

    optionImages.forEach((image2, index2) => {
      index !== index2 && image2.classList.remove("active");
    });

    gameContainer.classList.add("start");

    let time = setTimeout(() => {
      gameContainer.classList.remove("start");

      let imageSrc = e.target.querySelector("img").src;
      userResult.src = imageSrc;

      let randomNumber = Math.floor(Math.random() * 3);
      let cpuImages = ["images/rock.png", "images/paper.png", "images/scissors.png"];
      cpuResult.src = cpuImages[randomNumber];

      let cpuValue = ["R", "P", "S"][randomNumber];
      let userValue = ["R", "P", "S"][index];

      let outcomes = {
        RR: "Draw",
        RP: "D'SEIKOU",
        RS: "You",
        PP: "Draw",
        PR: "You",
        PS: "D'SEIKOU",
        SS: "Draw",
        SR: "D'SEIKOU",
        SP: "You",
      };

      let outComeValue = outcomes[userValue + cpuValue];
      result.textContent = userValue === cpuValue ? "Match Draw" : `${outComeValue} Won!!`;

      // Update score based on the outcome
      updateScore(outComeValue);
    }, 2500);
  });
});


// ===== NAV BAR ===== \\

// search-box open close js code

// sidebar open close js code
let navbar = document.querySelector(".navbar");
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}
// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function() {
 navLinks.classList.toggle("show1");
}
let moreArrow = document.querySelector(".more-arrow");
moreArrow.onclick = function() {
 navLinks.classList.toggle("show2");
}
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function() {
 navLinks.classList.toggle("show3");
}
let aboutArrow = document.querySelector(".about-arrow");
aboutArrow.onclick = function() {
 navLinks.classList.toggle("show4");
}
let contactArrow = document.querySelector(".contact-arrow");
contactArrow.onclick = function() {
 navLinks.classList.toggle("show5");
}