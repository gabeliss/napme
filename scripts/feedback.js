var greatButton = document.getElementById("great");
var greatButtonText = document.getElementById("modal-content-great");

var fineButton = document.getElementById("fine");
var fineButtonText = document.getElementById("modal-content-fine");

var poorButton = document.getElementById("poor");
var poorButtonText = document.getElementById("modal-content-poor");
var x = document.getElementsByClassName("close")[0];

greatButton.onclick = function() {
    greatButtonText.style.display = "block";
    fineButtonText.style.display = "none";
    poorButtonText.style.display = "none";
}
fineButton.onclick = function() {
    fineButtonText.style.display = "block";
    greatButtonText.style.display = "none";
    poorButtonText.style.display = "none";
}
poorButton.onclick = function() {
    poorButtonText.style.display = "block";
    greatButtonText.style.display = "none";
    fineButtonText.style.display = "none";
}
x.onclick = function() {
    modal.style.display = "none";
    greatButtonText.style.display = "none";
    fineButtonText.style.display = "none";
    poorButtonText.style.display = "none";
}
const isButtonOrModal = (target) => {
    return target==poorButtonText || target==greatButtonText || target==fineButtonText || target==fineButton || target==greatButton || target==poorButton;
}
window.onclick = function(event) {
    if (!isButtonOrModal(event.target)) {
        greatButtonText.style.display = "none";
        fineButtonText.style.display = "none";
        poorButtonText.style.display = "none";
    }
}