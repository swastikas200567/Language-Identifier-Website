function detectLanguage() {
    const text = document.getElementById("inputText").value.toLowerCase();
    let detected = "Unknown ❓";

    // Simple rules
    if (/[अ-ह]/.test(text)) {
        detected = "Hindi 🇮🇳";
    } else if (/[অ-ঔক-হ]/.test(text)) {
        detected = "Bengali 🇧🇩";
    } else if (text.includes("bonjour") || text.includes("merci")) {
        detected = "French 🇫🇷";
    } else if (text.includes("wie") || text.includes("heißt") || text.includes("danke")) {
        detected = "German 🇩🇪";
    } else if (/^[a-z\s?.,!]+$/.test(text)) {
        detected = "English 🇬🇧";
    }

    document.getElementById("result").innerHTML = 
        `Detected Language: <b>${detected}</b>`;
}

