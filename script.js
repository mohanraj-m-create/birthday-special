// ==========================================
// SCRIPT.JS - PART 1
// Intro → Password → Access → Birthday
// ==========================================

// Password
const correctPassword = "kunji";

// Sections
const intro = document.getElementById("intro");
const lockScreen = document.getElementById("lockScreen");
const accessGranted = document.getElementById("accessGranted");
const birthday = document.getElementById("birthday");

// Buttons
const startBtn = document.getElementById("startBtn");
const unlockBtn = document.getElementById("unlockBtn");
const continueBtn = document.getElementById("continueBtn");

// Inputs
const passwordInput = document.getElementById("password");
const error = document.getElementById("error");

// ------------------------------------------
// Initial Screen
// ------------------------------------------

intro.style.display = "flex";
lockScreen.style.display = "none";
accessGranted.style.display = "none";
birthday.style.display = "none";

// ------------------------------------------
// Open Password Screen
// ------------------------------------------

startBtn.addEventListener("click", () => {

    intro.style.display = "none";
    lockScreen.style.display = "flex";

});

// ------------------------------------------
// Unlock Button
// ------------------------------------------

unlockBtn.addEventListener("click", checkPassword);

// Enter Key Support

passwordInput.addEventListener("keypress", function(e){

    if(e.key === "Enter"){

        checkPassword();

    }

});

// ------------------------------------------
// Password Check
// ------------------------------------------

function checkPassword(){

    const enteredPassword = passwordInput.value.trim();

    if(enteredPassword === correctPassword){

        error.innerHTML = "";

        lockScreen.style.display = "none";

        accessGranted.style.display = "flex";

        // Confetti (if available)
        if(typeof fireConfetti === "function"){
            fireConfetti();
        }

        // Birthday Screen
        setTimeout(()=>{

            accessGranted.style.display = "none";

            birthday.style.display = "flex";

        },2000);

    }

    else{

        error.innerHTML = "❌ Wrong Password";

        error.style.color = "#ff8080";

        passwordInput.value = "";

    }

}
// ==========================================
// SCRIPT.JS - PART 2
// Gallery + Music + Hearts + Confetti
// ==========================================

// Gallery Elements
const gallery = document.getElementById("gallery");
const galleryNextBtn = document.getElementById("galleryNextBtn");

const galleryImage = document.getElementById("galleryImage");
const photoTitle = document.getElementById("photoTitle");
const photoCaption = document.getElementById("photoCaption");

// Buttons
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Images
const images = [
    "image1.jpg.jpeg",
    "image2.jpg.jpeg",
    "image3.jpg.jpeg",
    "image4.jpg.jpeg",
    "image5.jpg.jpeg",
    "image6.jpg.jpeg",
    "image7.jpg.jpeg",
    "image8.jpg.jpeg",
    "image9.jpg.jpeg",
    "image10.jpg.jpeg"
];

// Captions
const captions = [
    "Our First Memory ❤️",
    "You Make Me Smile 😊",
    "Our Beautiful Journey 💖",
    "Forever Together ❤️",
    "Sweet Moments 🌹",
    "My Happiness 💕",
    "My Favorite Person 💗",
    "Our Love Story 💞",
    "soulmate ❤️",
    "Happy Birthday My Love 🎂"
];

let currentPhoto = 0;

// Show Current Photo
function showPhoto(){

    galleryImage.src = images[currentPhoto];

    photoTitle.innerHTML = "Memory " + (currentPhoto + 1);

    photoCaption.innerHTML = captions[currentPhoto];

}

// Birthday → Gallery
continueBtn.addEventListener("click",()=>{

    birthday.style.display = "none";

    gallery.style.display = "flex";

    showPhoto();

});

// Next Photo
nextBtn.addEventListener("click",()=>{

    currentPhoto++;

    if(currentPhoto >= images.length){

        currentPhoto = 0;

    }

    showPhoto();

});

// Previous Photo
prevBtn.addEventListener("click",()=>{

    currentPhoto--;

    if(currentPhoto < 0){

        currentPhoto = images.length - 1;

    }

    showPhoto();

});

// =====================
// Background Music
// =====================

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let playing = false;

musicBtn.addEventListener("click",()=>{

    if(!playing){

        music.play();

        musicBtn.innerHTML = "🔇";

        playing = true;

    }else{

        music.pause();

        musicBtn.innerHTML = "🔊";

        playing = false;

    }

});

// =====================
// Floating Hearts
// =====================

setInterval(()=>{

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random()*100 + "vw";

    heart.style.animationDuration = (4 + Math.random()*4) + "s";

    document.querySelector(".hearts").appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },8000);

},500);

// =====================
// Confetti Function
// =====================

function fireConfetti(){

    confetti({

        particleCount:200,

        spread:180,

        origin:{y:0.6}

    });

}

// Gallery → Love Letter
galleryNextBtn.addEventListener("click",()=>{

    gallery.style.display = "none";

    loveLetter.style.display = "flex";

    startTyping();

});
// ==========================================
// SCRIPT.JS - PART 3
// Love Letter + Reasons + Gift
// ==========================================

// Sections
const loveLetter = document.getElementById("loveLetter");
const reasons = document.getElementById("reasons");
const giftSection = document.getElementById("giftSection");

// Elements
const typingText = document.getElementById("typingText");
const nextLoveBtn = document.getElementById("nextLoveBtn");

const giftBtn = document.getElementById("giftBtn");
const giftBox = document.getElementById("giftBox");
const giftMessage = document.getElementById("giftMessage");

// ==========================================
// Love Letter
// ==========================================

const letter = `Happy Birthday My Love ❤️

Every day with you is the best gift in my life.

Your smile makes my world brighter.

Thank you for always supporting me.

I wish your life is filled with happiness,
success and endless smiles.

No matter what happens,
I will always be there for you.

Happy Birthday Once Again ❤️

Forever Yours,
Mohanraj ❤️`;

let letterIndex = 0;

function startTyping(){

    typingText.innerHTML = "";

    letterIndex = 0;

    typeLetter();

}

function typeLetter(){

    if(letterIndex < letter.length){

        typingText.innerHTML += letter.charAt(letterIndex);

        letterIndex++;

        setTimeout(typeLetter,35);

    }

}

// ==========================================
// Love Letter → Reasons
// ==========================================

nextLoveBtn.addEventListener("click",()=>{

    loveLetter.style.display = "none";

    reasons.style.display = "flex";

});

// ==========================================
// Reasons → Gift
// ==========================================

giftBtn.addEventListener("click",()=>{

    reasons.style.display = "none";

    giftSection.style.display = "flex";

});

// ==========================================
// Open Gift
// ==========================================

giftBox.addEventListener("click",()=>{

    giftBox.style.display = "none";

    giftMessage.style.display = "block";

    fireConfetti();

});
// ==========================================
// SCRIPT.JS - PART 4 (FINAL)
// Countdown + Final + Restart
// ==========================================

// Sections
const countdownSection = document.getElementById("countdownSection");
const finalSection = document.getElementById("finalSection");

// Buttons
const countdownBtn = document.getElementById("countdownBtn");
const finalBtn = document.getElementById("finalBtn");
const restartBtn = document.getElementById("restartBtn");

// ==========================================
// Gift → Countdown
// ==========================================

countdownBtn.addEventListener("click",()=>{

    giftSection.style.display = "none";

    countdownSection.style.display = "flex";

});

// ==========================================
// Countdown
// ==========================================

// Next Birthday (5 August)
let targetYear = new Date().getFullYear();

let targetDate = new Date(targetYear,7,5,0,0,0); // Month 7 = August

if(new Date() > targetDate){

    targetDate = new Date(targetYear + 1,7,5,0,0,0);

}

function updateCountdown(){

    const now = new Date();

    const distance = targetDate - now;

    const days = Math.floor(distance/(1000*60*60*24));

    const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));

    const minutes = Math.floor((distance%(1000*60*60))/(1000*60));

    const seconds = Math.floor((distance%(1000*60))/1000);

    document.getElementById("days").innerHTML = days;

    document.getElementById("hours").innerHTML = hours;

    document.getElementById("minutes").innerHTML = minutes;

    document.getElementById("seconds").innerHTML = seconds;

}

updateCountdown();

setInterval(updateCountdown,1000);

// ==========================================
// Countdown → Final
// ==========================================

finalBtn.addEventListener("click",()=>{

    countdownSection.style.display = "none";

    finalSection.style.display = "flex";

    fireConfetti();

});

// ==========================================
// Restart Website
// ==========================================

restartBtn.addEventListener("click",()=>{

    location.reload();

});