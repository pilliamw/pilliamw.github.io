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

};

