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

/* PORTFOLIO SCROLL BTNS */

const PORT_LEFT_BTN = document.getElementById("c_port_lbtn");
const PORT_RIGHT_BTN = document.getElementById("c_port_rbtn");
var PORT_SCROLL_IDX = 0;
const PORT_ITEMS = document.querySelectorAll(".c_portbox");
const PORT_LEFT_LIMIT = -1 * (Math.floor(PORT_ITEMS.length / 2));
const PORT_RIGHT_LIMIT = PORT_ITEMS.length + PORT_LEFT_LIMIT - 1;

function buildPortfolioUI() {
    const items = document.querySelectorAll(".c_portbox");
    const portUI = document.getElementById("c_port_ui");
    
    let idx = PORT_LEFT_LIMIT;
    items.forEach(item => {
        let buttonEle = document.createElement("button");
        buttonEle.id = `c_port_ui_b${idx}`;
        
        const eleIdx = idx;
        buttonEle.onclick = function() { scrollPortfolio(eleIdx) };
        
        portUI.appendChild(buttonEle);
        
        idx++;
    });
}

function scrollPortfolio(idx) {
    document.getElementById(`c_port_ui_b${PORT_SCROLL_IDX}`).classList = "";
    document.getElementById(`c_port_ui_b${idx}`).classList = "selected";
    
    PORT_SCROLL_IDX = idx;

    const items = document.querySelectorAll(".c_portbox");
    items.forEach(item => {
        item.style.transform = `translateX(${-1*idx*(item.offsetWidth+20)}px)`;
    });

    if (idx <= PORT_LEFT_LIMIT) PORT_LEFT_BTN.setAttribute("disabled", "");
    else PORT_LEFT_BTN.removeAttribute("disabled", "");

    if (idx >= PORT_RIGHT_LIMIT) PORT_RIGHT_BTN.setAttribute("disabled", "");
    else PORT_RIGHT_BTN.removeAttribute("disabled", "");
}

document.addEventListener("DOMContentLoaded", function() {
    buildPortfolioUI();
    scrollPortfolio(0);

    PORT_LEFT_BTN.onclick = function() {
        scrollPortfolio(PORT_SCROLL_IDX - 1);
    };

    PORT_RIGHT_BTN.onclick = function() { 
        scrollPortfolio(PORT_SCROLL_IDX + 1);
    };
});

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