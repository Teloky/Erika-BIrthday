const normal = document.getElementById("Normal")
const mad = document.getElementById("Mad")

document.getElementById("Pon").addEventListener("click", function() {
    let number = Math.floor(Math.random() * 4)
        document.getElementById("Pon").textContent = number
    if (number <= 2) {
        normal.onplay();
    } else {
        mad.onplay();
    }
}