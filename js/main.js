// const h3 = document.getElementById("name1");
// const caption1 = document.getElementById("caption1");

// caption1.style.display = "none";

// function toggleList() {
//     if (caption1.style.display === "none") {
//         caption1.style.display = "block";
//     } else {
//         caption1.style.display = "none";
//     }
// }

// h3.addEventListener("click", toggleList);


let member = {
    ceo : {
        // name: "Apple Grace Gesalan",
        bio: "Apple Grace Gesalan is the mastermind behind the delicious taste of   Swerve milk drink. She is a planning powerhouse, always ahead of the game and implementing strategies that keep Swerve on top. With her blend of brains, creativity, and humor, Swerve milk drink is in good hands."
    },

    humanresourcemanager : {
        // name: "Peaches Grant",
        bio: "Peaches Grant is the heart and soul of the brand's employee relations. She is the go-to person for boosting morale and keeping everyone happy. Peaches is a master at handling delicate HR matters with tact and grace, making sure everyone feels heard and valued."
    },
    
}

let heroButtons = document.querySelectorAll("#members a"),
    lightbox = document.querySelector('#lightbox');

function loadHeroData() {
    // debugger;
    lightbox.querySelector(".name").textContent = member[this.dataset.member].name;
    lightbox.querySelector(".bio").textContent = member[this.dataset.member].bio;

    // heroes[this.datase.member].headline 
}


heroButtons.forEach(hero => hero.addEventListener('click', loadHeroData));