var accusationsDiv = document.getElementById("accusationsDiv");
var friends = ["Ross", "Rachel", "Phoebe", "Chandler", "Joey"];
var locations = ["Central Perk", "Central Park", "Subway", "Bedroom", "Living Room", "Kitchen", "Shower", "Balcony", "Lobby", "Office" ]
var weapons = ["Banana Peel", "Spork", "Gnasher", "Lancer", "Torque Bow", "LongShot", "Knife", "Pistol", "Car", "Sheppards Pie", "Ovaltine", "Lamp", "Rope", "Boltok", "Clock", "iPhone", "Monitor", "Laptop", "Fan", "Chair" ];

for(var i = 0; i < 100; i++){

    addH3(i)
}

function addH3(i){
    var elm = document.createElement("h3");
    elm.id="accusation" + i;
    var title = "Accusation " + (i + 1); 
    elm.innerHTML = title;
    elm.addEventListener("click", displayAccusation.bind(i+1, getRandomFriend(), getRandomWeapon(), getRandomLocation()));
    accusationsDiv.appendChild(elm)    
    return elm;
}

function getRandomFriend(){
    var i = getRandomNumber(4);
    return friends[i];
}

function getRandomWeapon(){
    var i = getRandomNumber(19);
    return weapons[i];
}

function getRandomLocation(){
    var i = getRandomNumber(9);
    return locations[i];
}


function displayAccusation(friend, weapon, location){
    var accusationText = "Accusation " + this +  ": I accuse " + friend + ", with the " + weapon + " in the " + location + "!";
    alert(accusationText);
}

function getRandomNumber(max){   
    if (max == 0){
        return 0;
    }
    var digitsOffset = 10;
    if (max > 10){
        digitsOffset = 100;
    }
    var r = Math.trunc(Math.random() * digitsOffset);
    while (r > max){
        r = Math.trunc(Math.random() * digitsOffset);
    }
    return r; 
}
