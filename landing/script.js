const texts = ["Lock in.", "Grind.", "Ee sem MRD nimde."];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector("#typed-text").textContent = letter;
    if (letter.length === currentText.length) {
        setTimeout(() => {
            setTimeout(() => {
                document.querySelector("#typed-text").textContent = "";
                index = 0;
                count++;
                type();
            }, 1000);  // Pause before starting to delete
        }, 2000); // Pause after typing the full sentence
    } else {
        setTimeout(type, 100);
    }
})();
