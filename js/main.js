

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

    lightbox.style.display = 'block';
    
}


heroButtons.forEach(hero => hero.addEventListener('click', loadHeroData));