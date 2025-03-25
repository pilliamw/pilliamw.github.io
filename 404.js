/* Path Replacement */

/*const path = window.location.pathname.replace(/^\//, "");

const [mainPath, ...restParts] = path.split("/");
const extraPath = restParts.join("/");

if (mainPath != mainPath.toLowerCase()) {
    window.location.href = `/${mainPath.toLowerCase()}${extraPath ? `/${extraPath}` : ""}`;
} else {
    document.getElementById("fourohfour").style.visibility = "visible";
}*/

/* Image Onload */

function chooseRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
}

const time = (new Date()).getHours();
var bgSource = "blueberryArch.png";

if (time >= 6 && time <= 9) {
    bgSource = chooseRandom(["passionfruitCat.png", "passionfruitPicnic.png", "passionfruitPools.png"]);
} else if (time >= 10 && time <= 14) {
    bgSource = chooseRandom(["blueberryArch.png", "blueberryCoast.png", "blueberryPinwheel.png", "blueberryPools.png"]);
} else if (time >= 15 && time <= 18) {
    bgSource = chooseRandom(["mangoBalloons.png", "mangoPools.png", "mangoPoolsUnderground.png"]);
} else if (time >= 19 && time <= 23) {
    bgSource = chooseRandom(["starfruitGirders.png", "starfruitLab.png", "starfruitSatellite.png"]);
} else {
    bgSource = chooseRandom(["raspberryForest.png", "raspberryMoon.png", "raspberryPicnic.png"]);
}

const bg = document.getElementById('fourohfour_bg');
bg.src = `/assets/images/404/${bgSource}`;

bg.onload = function() {
    document.getElementById('fourohfour_bg').classList.add('loaded');
};

/* Toggle Buttons */

if (window.history.length > 1) {
    document.getElementById("btn_return").style.display = "block";
}

if (mainPath == "rapidfire") {
    document.getElementById("btn_rapidfire").style.display = "block";
}