window.speechSynthesis.onvoiceschanged = function () {
  var voices = speechSynthesis.getVoices();
  var voiceSelect = document.getElementById("voiceSelect");
  voices.forEach(function (voice, index) {
    var option = document.createElement("option");
    option.value = index;
    option.text = voice.name + " (" + voice.lang + ")";
    voiceSelect.add(option);
  });
};
function speakText() {
  var inputText = document.getElementById("inputText").value;
  var voiceSelect = document.getElementById("voiceSelect");
  var selectedVoiceIndex = voiceSelect.value;
  var utterance = new SpeechSynthesisUtterance(inputText);
  utterance.voice = speechSynthesis.getVoices()[selectedVoiceIndex];
  speechSynthesis.speak(utterance);
}
