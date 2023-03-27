const h3 = document.getElementById("name1");
const caption1 = document.getElementById("caption1");

caption1.style.display = "none";

function toggleList() {
    if (caption1.style.display === "none") {
        caption1.style.display = "block";
    } else {
        caption1.style.display = "none";
    }
}

h3.addEventListener("click", toggleList);




