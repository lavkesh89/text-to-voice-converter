// let speech = new SpeechSynthesisUtterance();

// let voices = [];

// let voiceSelect = document.querySelector("select");

// window.speechSynthesis.onvoiceschanged = () => {
//     voices = window.speechSynthesis.getVoices();
//     speech.voice = voices[0];


//     voices.forEach((voice,i) =>  {
//         voiceSelect.options[i] = new Option(
//         voice.name,i);
//     });
// };


// voiceSelect.addEventListener("change", () => {
//     speech.voices = voices[voiceSelect.value];
// });

// document.querySelector("button").addEventListener("click", () => {
//     speech.text = document.querySelector("textarea").value;
//     window.speechSynthesis.speak(speech);
// });

let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0]; // Change speech.voices to speech.voice

    // // Clear options before adding new ones
    // voiceSelect.innerHTML = "";
    
    voices.forEach((voice, i) => {
        voiceSelect.options[i] = new Option(voice.name, i);
    });
};

voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value]; // Change speech.voices to speech.voice
});

document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});
