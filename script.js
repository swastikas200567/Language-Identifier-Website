async function detectLanguage() {
    const text = document.getElementById("inputText").value;

    if (!text) {
        alert("Please enter some text!");
        return;
    }

    try {
        // Call LibreTranslate API
        const response = await fetch("https://libretranslate.de/detect", {
            method: "POST",
            body: JSON.stringify({ q: text }),
            headers: { "Content-Type": "application/json" }
        });

        const data = await response.json();
        const languageCode = data[0].language;

        // Map codes to names + flags
        const languageNames = {
            en: "English 🇬🇧",
            fr: "French 🇫🇷",
            de: "German 🇩🇪",
            hi: "Hindi 🇮🇳",
            bn: "Bengali 🇧🇩",
            es: "Spanish 🇪🇸",
            it: "Italian 🇮🇹",
            ta: "Tamil 🇮🇳",
            te: "Telugu 🇮🇳"
        };

        const detectedLanguage = languageNames[languageCode] || languageCode;

        document.getElementById("result").innerHTML =
            `Detected Language: <b>${detectedLanguage}</b>`;
    } catch (error) {
        document.getElementById("result").innerHTML =
            "Error detecting language. Please try again.";
    }
}
