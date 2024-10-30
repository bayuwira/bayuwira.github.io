const correctPasscode = "08011999"; // Set your desired passcode here

function checkPasscode() {
    const inputPasscode = document.getElementById("passcodeInput").value;
    const passcodeError = document.getElementById("passcodeError");
    
    if (inputPasscode === correctPasscode) {
        document.getElementById("passcodeScreen").style.display = "none";
        document.getElementById("confessionPage").classList.remove("hidden");
        document.getElementById("backgroundMusic").play(); // Start music here
    } else {
        passcodeError.innerText = "Incorrect passcode. Please try again!";
    }
}

function revealConfession() {
    document.getElementById("initialMessage").style.display = "none";
    document.getElementById("revealButton").style.display = "none";
    document.getElementById("confessionContainer").classList.remove("hidden");
}

function showYesMessage() {
    const message = document.getElementById("message");
    message.classList.add("fade-in");
    message.style.display = "block";
    document.body.style.backgroundColor = "#ffe4e1";
    document.querySelector(".button-group").style.display = "none";
}

function handleNoClick() {
    const container = document.getElementById("confessionPage");
    container.classList.add("shake");
    displayRandomText();
    setTimeout(() => {
        container.classList.remove("shake");
    }, 500);
}

function displayRandomText() {
    const randomTexts = [
        "Hmmm, gua suka banget sama lo...",
        "Yakin nih? 💕",
        "Gue rasa kita cocok deh ❤️",
        "Engga?? Beneran nih? 😢",
        "PLZZZZZ!",
        "Bisa pikirin lagi ga? 😊",
        "Ga nyerah gueee ayo klik iya!",
        "Gua cuman mau sama lo 💞",
        "Gua tunggu deh tapi...tapi gua harap jawabannya iya nnti!"
    ];
    
    const randomText = randomTexts[Math.floor(Math.random() * randomTexts.length)];
    const randomTextElement = document.getElementById("randomText");
    
    randomTextElement.innerText = randomText;
    randomTextElement.style.opacity = 1;
    randomTextElement.style.display = "block";

    setTimeout(() => {
        randomTextElement.style.opacity = 0;
    }, 1500);
}
