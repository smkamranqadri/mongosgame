var deck = [{ serial: 0, type: "card", picked: false, set: false }];
var a = 100;
var cardnumber = 0;
var lastcard = 0;
var lastclubcard = 0;
var lastdiamondcard = 13;
var lastheartcard = 26;
var lastspadecard = 39;
function lockdeck() {
    for (var L = 1; L <= 13; L++) {
        deck[L] = { serial: L, type: "club", picked: false, set: false };
    }
    for (var L = 14; L <= 26; L++) {
        deck[L] = { serial: L, type: "diamond", picked: false, set: false };
    }
    for (var L = 27; L <= 39; L++) {
        deck[L] = { serial: L, type: "heart", picked: false, set: false };
    }
    for (var L = 40; L <= 52; L++) {
        deck[L] = { serial: L, type: "spade", picked: false, set: false };
    }
}
function resetdeck() {
    var backcard = document.getElementById('back-card');
    var frontcard = document.getElementById('front-card');
    backcard.src = "images/0.png";
    frontcard.src = "images/0.png";
    cardnumber = 0;
    lastcard = 0;
    for (var L = 1; L <= 52; L++) {
        if (deck[L].set) {
            cardnumber = ++cardnumber;
        }
        else {
            deck[L].picked = false;
        }
    }
}
function pickcard() {
    var backcard = document.getElementById('back-card');
    var frontcard = document.getElementById('front-card');
    if (cardnumber == 53) {
        resetdeck();
    }
    if (cardnumber != 52) {
        for (var L = 1; L <= 52; L++) {
            var randomserial = Math.ceil(Math.random() * 52);
            if (deck[randomserial].picked == false) {
                if (deck[randomserial].set == false) {
                    deck[randomserial].picked = true;
                    lastcard = deck[randomserial].serial;
                    cardnumber = ++cardnumber;
                    break;
                }
            }
        }
        frontcard.src = "images/" + lastcard + ".png";
        if (cardnumber == 52) {
            backcard.src = "images/53.png";
            cardnumber = ++cardnumber;
        }
    }
}
function checkcard() {
    var clubcard = document.getElementById('club-card');
    var diamondcard = document.getElementById('diamond-card');
    var heartcard = document.getElementById('heart-card');
    var spadecard = document.getElementById('spade-card');
    var frontcard = document.getElementById('front-card');
    var mangos = document.getElementById('mangos');
    mangos.style.display = "none";
    if (deck[lastcard].type == "club") {
        if ((lastclubcard + 1) == lastcard) {
            setcard(clubcard, lastclubcard, lastcard);
        }
    }
    if (deck[lastcard].type == "diamond") {
        if ((lastdiamondcard + 1) == lastcard) {
            setcard(diamondcard, lastdiamondcard, lastcard);
        }
    }
    if (deck[lastcard].type == "heart") {
        if ((lastheartcard + 1) == lastcard) {
            setcard(heartcard, lastheartcard, lastcard);
        }
    }
    if (deck[lastcard].type == "spade") {
        if ((lastspadecard + 1) == lastcard) {
            setcard(spadecard, lastspadecard, lastcard);
        }
    }
}
function setcard(htmlelement, lasttypecard, lastcard) {
    htmlelement.src = "images/" + lastcard + ".png";
    lasttypecard = lastcard;
    deck[lastcard].set = true;
    pickcard();
}
function checkmangos() {
    var mangos = document.getElementById('mangos');
    var mangoscount = document.getElementById('mangos-count');
    mangos.style.display = "none";
    if (lastcard != 0) {
        switch (deck[lastcard].type) {
            case "club":
                if ((lastclubcard + 1) == lastcard) {
                    setmangos();
                }
                else {
                    pickcard();
                }
                break;
            case "diamond":
                if ((lastdiamondcard + 1) == lastcard) {
                    setmangos();
                }
                else {
                    pickcard();
                }
                break;
            case "heart":
                if ((lastheartcard + 1) == lastcard) {
                    setmangos();
                }
                else {
                    pickcard();
                }
                break;
            case "spade":
                if ((lastspadecard + 1) == lastcard) {
                    setmangos();
                }
                else {
                    pickcard();
                }
                break;
            default:
                break;
        }
    }
    else {
        pickcard();
    }
}
function setmangos() {
    var mangos = document.getElementById('mangos');
    var mangoscount = document.getElementById('mangos-count');
    mangos.style.display = "inline";
    mangoscount.innerText = (Number(mangoscount.innerText) + 1);
}
