let enteredPin = "";

// Add number to the pin input
function addNumber(number) {
    const passcodeInput = document.getElementById("passcodeInput");
    if (enteredPin.length < 8) {
        enteredPin += number;
        passcodeInput.value = enteredPin;
    }
}

// Clear the pin input
function clearPin() {
    enteredPin = "";
    document.getElementById("passcodeInput").value = "";
    document.getElementById("passcodeError").textContent = "";
}

// Submit and check the pin
function submitPin() {
    const correctPin = "07092024";
    //const correctPin = "123";
    if (enteredPin === correctPin) {
        document.getElementById("backgroundMusic").play();
        document.getElementById("passcodeScreen").classList.add("hidden");
        document.getElementById("confessionPage").classList.remove("hidden");
    } else {
        document.getElementById("passcodeError").textContent = "Incorrect passcode. Please try again.";
        clearPin();
    }
}

function sendResponse(response) {
    const url = "https://script.google.com/macros/s/AKfycbzI-5o42cTICVch4kqziIdJqITltbNMfxmxbGw3mocsYQhjNjrKOWmaZAPp3hANJU3GKw/exec"; // Replace with your web app URL
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ response: response })
    })
    .then(response => response.json())
    .then(data => console.log("Success:", data))
    .catch(error => console.error("Error:", error));
}


function revealConfession() {
    document.getElementById("initialMessage").style.display = "none";
    document.getElementById("revealButton").style.display = "none";
    document.getElementById("confessionContainer").classList.remove("hidden");
}

function handleNoClick() {
    sendResponse("Engga");
    const container = document.getElementById("confessionPage");
    
    // Add the shake effect class
    container.classList.add("shake-effect");
    displayRandomText()

    // Remove the shake effect class after the animation completes
    setTimeout(() => {
        document.body.style.transition = "background-color 1s ease";
        document.body.style.backgroundColor = "black";
        document.body.style.opacity = "0.5";

        document.querySelectorAll("button").forEach(btn => btn.disabled = true);
    }, 500);
}

function displayRandomText() {
    const randomTexts = [
        "Hmmm, tapi please",
        "Yakin nih? 💕",
        "Kayaknya kita cocok ga sih ❤️",
        "Engga?? Beneran nih? 😢",
        "Please dong!",
        "Bisa pikirin lagi ga? 😊",
        "Ga nyerah sih aku ayo klik iya!",
        "Aku cuman mau sama kamu 💞",
        "Hmmmm",
        "Aaaaa jangan dong ~",
        "dua tiga tutup botol",
        "Pernah kukira cinta hanya dalam dongeng, tapi sekarang kurasakan cintaku padamu.",
        "Pernah kusimpan rasa ini lama.",
        "Kaulah cinta sejati yang membuat hatiku berdebar.",
        "Kamu adalah segalanya bagiku.",
        "Aku tak bisa hidup tanpamu.",
        "Aku ingin bersamamu selamanya",
        "Setiap detik tanpamu terasa hampa",
        "Kaulah yang membuat hatiku berdebar",
        "Cinta kita seperti bintang",
        "Hidupku tak lengkap tanpamu",
        "Katakanlah ya",
        "Aku rela melakukan apapun untuk membuatmu bahagia",
        "Setiap detik bersamamu adalah kenangan berharga bagiku",
        "Matahariku, kau membuat dunia menjadi indah",
        "Aku tak bisa membayangkan hidup tanpamu",
    ];
    
    const randomText = randomTexts[Math.floor(Math.random() * randomTexts.length)];
    const randomTextElement = document.getElementById("randomText");
    
    randomTextElement.innerText = randomText;
    randomTextElement.style.opacity = 1;
    randomTextElement.style.display = "block";

    setTimeout(() => {
        randomTextElement.style.opacity = 0;
    }, 1000);
}

let currentPage = 1;

function nextPage() {
    // Hide the current page
    document.getElementById(`page${currentPage}`).classList.add("hidden");

    // Move to the next page
    currentPage++;

    // Show the next page or the final confession if it's the last page
    const nextPage = document.getElementById(`page${currentPage}`);
    if (nextPage) {
        nextPage.classList.remove("hidden");
    } else {
        document.getElementById("confessionContainer").classList.remove("hidden");
    }
}

function showYesMessage() {
    sendResponse("Mau");
    // Display the final "yes" message
   //document.querySelector("#confessionContainer h1.title").classList.add("hidden");
    document.getElementById("statement1").classList.add("hidden");
    document.getElementById("statement2").classList.add("hidden");
    document.getElementById("statement3").classList.add("hidden");
    document.getElementById("message").classList.remove("hidden-message");
    document.querySelector(".button-group").style.display = "none";
    // Generate multiple floating emojis
    setInterval(createFloatingEmoji, 12);
}

function createFloatingEmoji() {
    const emoji = document.createElement("div");
    emoji.classList.add("emoji");
    emoji.innerText = "❤️";

    // Randomize position and size
    emoji.style.left = `${Math.random() * 100}vw`;
    emoji.style.top = `${Math.random() * 100}vh`;
    emoji.style.fontSize = `${Math.random() * 1 + 1}rem`;

    // Add to the body
    document.body.appendChild(emoji);

    // Remove the emoji after animation ends
    emoji.addEventListener("animationend", () => {
        emoji.remove();
    });
}


