var question = document.getElementById("question");
var yesBtn = document.getElementsByClassName("btn-yes")[0];
var noBtn = document.getElementsByClassName("btn-no")[0];
var gifContainer = document.getElementsByClassName("gif-container")[0];
var yesSize = 16;
var noNameIndex = 0;
var noNames = ["Sure?", "Sure najud?", "Pag Oo na ba!", "Sige naghud, dika malooy sa akoa?", "Sure najud na?", "Basin madala ra ba", "sige na Idol ba", "di lagi ka mag mahay", "mag hilak lagi ko karon nawa", "sumbong takang papa huhu", "buotan bitaw ko", "ka hilakon najud ko promise :(", "sakit kaayu", "kalain nimo  uy tsr", "pag yes nalang ghud", "dijud ka mag mahay lagi ", "Please langga ba", "kaisa ra bitaw", "bahala ka", "dijud ka kita sako", "sayang", "lamion baya ko", "e try ghud", "dijud ka mag mahay"];

const fallingWords = ["tama jud kag desesyon!", "Yieeeeeee!", "Thankyou!", "Yay!", "HAHAHA!", "maayu kag napili"];

function increaseYesSize() {
    yesSize += 40;
    yesBtn.style.fontSize = yesSize + "px";
}

function changeNoName() {
    noBtn.innerHTML = noNames[noNameIndex];
    noNameIndex = (noNameIndex + 1) % noNames.length;
    increaseYesSize();
}

function createFallingElement() {
    // Create a new element
    const fallingElement = document.createElement("div");
    fallingElement.className = "falling-element";
    document.body.appendChild(fallingElement);

    // Set initial position and animation
    const startPosition = Math.random() * window.innerWidth;
    fallingElement.style.left = startPosition + "px";
    fallingElement.style.top = "0";
    fallingElement.textContent = fallingWords[Math.floor(Math.random() * fallingWords.length)];
    fallingElement.style.animationDuration = Math.random() * 2 + 1 + "s";

    // Remove the element after animation completes
    fallingElement.addEventListener("animationend", () => {
        fallingElement.remove();
    });
}

function showGif() {
    question.style.display = "none";
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
    gifContainer.style.display = "block";
    document.querySelector('.header-image').style.display = 'none';

    // Add party effect class to the gif container
    gifContainer.classList.add("party-effect");

    // Create and append falling elements
    for (let i = 0; i < 20; i++) {
        createFallingElement();
    }
}
