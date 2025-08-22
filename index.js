/* LANDING BG IMAGE */

window.addEventListener("load", function() {
    const img = document.getElementById("header_img");
    img.style.opacity = "0"; // Start hidden
    img.style.transition = "opacity 1s ease-out";

    setTimeout(() => {
        img.style.opacity = "1";
    }, 100); // Small delay to ensure transition works
});

/* HEADER SCROLL BTN */

const HEADER_SCROLL_BTN = document.getElementById("header_scrollarrow");
HEADER_SCROLL_BTN.onclick = function() {
    window.scrollTo({ top: window.innerHeight + 1, left: 0, behavior: 'smooth' });
}

/* NAVBAR HASH STYLING */

function updateNavbar() {
    document.querySelectorAll("#navbar a").forEach(el => {
        if (el.getAttribute("href") === location.hash) {
            el.classList.add("active");
        } else {
            el.classList.remove("active");
        }
    });
    if (!location.hash || location.hash == "#") {
        document.getElementById("navbar_a1").classList.add("active");
    }
}

window.addEventListener("hashchange", () => {
    updateNavbar();

    window.scrollTo({
        top: window.innerHeight,
        left: 0,
        behavior: "smooth"
    });
});

document.addEventListener("DOMContentLoaded", updateNavbar);

/* CODEFORCES API */

const CF_COLORS = {
    "unranked": "#aaaaaa",
    "newbie": "#aaaaaa",
    "pupil": "#008000",
    "specialist": "#15aea4", 
    "expert": "#3f76fe",
    "candidate master": "#aa00aa",
    "master": "#ff8c00",
    "international master": "#ff8c00",
    "grandmaster": "#ff0000",
    "international grandmaster": "#ff0000",
    "legendary grandmaster": "#ff0000",
    "tourist": "#ff0000",
    "jiangly": "#ff0000"
};

const CF_TITLES = {
    "unranked": "Unranked",
    "newbie": "Newbie",
    "pupil": "Pupil",
    "specialist": "Specialist", 
    "expert": "Expert",
    "candidate master": "Candidate Master",
    "master": "Master",
    "international master": "International Master",
    "grandmaster": "Grandmaster",
    "international grandmaster": "I. Grandmaster",
    "legendary grandmaster": "L. Grandmaster",
    "tourist": "L. Grandmaster",
    "jiangly": "L. Grandmaster"
}

fetch("https://codeforces.com/api/user.info?handles=SmartyNotchy")
.then(obj => {
    return obj.json();
}).then(json => {
    return json.result[0];
}).then(cf => {
    if (CF_COLORS[cf.rank] == undefined || CF_COLORS[cf.maxRank] == undefined) throw new Error("???");

    document.getElementById("c_cmpbox_cf_icon").style.fill = CF_COLORS[cf.rank];
    document.getElementById("c_cmpbox_cf_title").innerText = `CF ${CF_TITLES[cf.rank]}`;
    document.getElementById("c_cmpbox_cf_subtitle").innerHTML = `Current Rating: <span style='font-weight: bold; color: ${CF_COLORS[cf.rank]}'>${cf.rating}</span><br>Peak Rating: <span style='font-weight: bold; color: ${CF_COLORS[cf.maxRank]}'>${cf.maxRating}</span>`
    
    console.log(cf);
}).catch(error => {
    document.getElementById("c_cmpbox_cf_icon").style.fill = CF_COLORS["expert"];
    document.getElementById("c_cmpbox_cf_title").innerText = `CF ${CF_TITLES["expert"]} (Jul. 2025)`;
    document.getElementById("c_cmpbox_cf_subtitle").innerHTML = `Peak Rating (Jul. 2025): <span style='font-weight: bold; color: ${CF_COLORS["expert"]}'>1639</span><br>Codeforces API is down :(`;
})