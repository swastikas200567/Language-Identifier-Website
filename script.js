function detectLanguage() {
  let text = document.getElementById("textInput").value;
  let result = document.getElementById("result");

  if (text.length === 0) {
    result.innerText = "❌ Please enter some text!";
    return;
  }

  // Simple rule-based language detection (just for demo)
  if (/[अ-ह]/.test(text)) {
    result.innerText = "Detected Language: Hindi 🇮🇳";
  } else if (/[а-яА-Я]/.test(text)) {
    result.innerText = "Detected Language: Russian 🇷🇺";
  } else if (/[éèàùçâêîôû]/.test(text)) {
    result.innerText = "Detected Language: French 🇫🇷";
  } else if (/[äöüß]/.test(text)) {
    result.innerText = "Detected Language: German 🇩🇪";
  } else {
    result.innerText = "Detected Language: English 🇬🇧";
  }
}
