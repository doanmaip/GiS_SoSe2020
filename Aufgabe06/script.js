"use strict";
let artikel1 = {
    bild: "Pillow3.jpeg",
    artikelname: "\"Brada – Gestreiftes Kissen\"",
    source: "urbanoutfitters.com",
    preis: 49.00,
    category: "kissen"
};
let artikel2 = {
    bild: "Pillow1.jpg",
    artikelname: "\"Tegan Embroidered Pillow\"",
    source: "lonefox.com",
    preis: 37.00,
    category: "kissen"
};
let artikel3 = {
    bild: "Pillow2.jpg",
    artikelname: "\"Emmit Kilim Pillow\"",
    source: "lonefox.com",
    preis: 39.00,
    category: "kissen"
};
let artikel4 = {
    bild: "Decor3.jpeg",
    artikelname: "\"Badematte mit der Gestalt einer Frau\"",
    source: "urbanoutfitters.com",
    preis: 35.00,
    category: "sonstiges"
};
let artikel5 = {
    bild: "Decor4.jpeg",
    artikelname: "\"Makramee-Wandbehang im Bohostil mit Mondmotiv\"",
    source: "urbanoutfitters.com",
    preis: 29.00,
    category: "sonstiges"
};
let artikel6 = {
    bild: "Tray1.jpg",
    artikelname: "\"Medium Havana Coral Bow\"",
    source: "lonefox.com",
    preis: 49.00,
    category: "sonstiges"
};
let artikel7 = {
    bild: "Print1.jpg",
    artikelname: "\"Retro Sunset Art Print\"",
    source: "lonefox.com",
    preis: 22.00,
    category: "prints"
};
let artikel8 = {
    bild: "Print2.jpg",
    artikelname: "\"Visual Interest Art Print\"",
    source: "lonefox.com",
    preis: 22.00,
    category: "prints"
};
let artikel9 = {
    bild: "Print3.jpg",
    artikelname: "\"Sand to Sea Art Print\"",
    source: "lonefox.com",
    preis: 22.00,
    category: "prints"
};
let artikel10 = {
    bild: "Decor1.jpeg",
    artikelname: "\"Sierra Vase\"",
    source: "anthropology.com",
    preis: 100.00,
    category: "deko"
};
let artikel11 = {
    bild: "Decor2.jpeg",
    artikelname: "\"Mia Schminkspiegel\"",
    source: "lanthropology.com",
    preis: 55.00,
    category: "deko"
};
let artikel12 = {
    bild: "Decor5.jpeg",
    artikelname: "\"Keramiktasse mit zarten Streifen\"",
    source: "urbanoutfitters.com",
    preis: 16.00,
    category: "deko"
};
let produkte = [artikel1, artikel2, artikel3, artikel4, artikel5, artikel6, artikel7, artikel8, artikel9, artikel10, artikel11, artikel12];
for (let i = 0; i < produkte.length; i++) {
    if (produkte[i].category == "kissen") {
        let newDiv = document.createElement("div");
        newDiv.id = "div" + i;
        document.getElementById("flexKissen")?.appendChild(newDiv);
    }
    if (produkte[i].category == "sonstiges") {
        let newDiv = document.createElement("div");
        newDiv.id = "div" + i;
        document.getElementById("flexSonstiges")?.appendChild(newDiv);
    }
    if (produkte[i].category == "prints") {
        let newDiv = document.createElement("div");
        newDiv.id = "div" + i;
        document.getElementById("flexPrints")?.appendChild(newDiv);
    }
    if (produkte[i].category == "deko") {
        let newDiv = document.createElement("div");
        newDiv.id = "div" + i;
        document.getElementById("flexDeko")?.appendChild(newDiv);
    }
    let imgElement = document.createElement("img");
    imgElement.src = produkte[i].bild;
    document.getElementById("div" + i)?.appendChild(imgElement);
    let artikelname = document.createElement("p");
    artikelname.innerHTML = produkte[i].artikelname;
    document.getElementById("div" + i)?.appendChild(artikelname);
    let source = document.createElement("p");
    source.innerHTML = produkte[i].source;
    document.getElementById("div" + i)?.appendChild(source);
    let preis = document.createElement("p");
    preis.innerHTML = produkte[i].preis + " €";
    document.getElementById("div" + i)?.appendChild(preis);
    let kaufen = document.createElement("button");
    kaufen.innerHTML = "Zum Warenkorb hinzufügen";
    kaufen.addEventListener("click", addtoCart);
    document.getElementById("div" + i)?.appendChild(kaufen);
    kaufen.setAttribute("preis", produkte[i].preis.toString());
}
let summe = 0;
let count = 0;
let produktCounter = 0;
let cartDiv = document.createElement("div");
function addtoCart(_event) {
    if (produktCounter >= 0) {
        document.getElementById("cart_count")?.appendChild(cartDiv);
    }
    produktCounter++;
    cartDiv.innerHTML = produktCounter + "";
    if (_event.currentTarget?.getAttribute("preis")) {
        summe = count + parseInt(_event.currentTarget?.getAttribute("preis"));
        count = summe;
    }
    console.log("total: " + summe.toFixed(0) + "€");
}
let startseite = document.createElement("a");
startseite.id = "home";
startseite.innerHTML = "home";
startseite.addEventListener("click", handleKategorie);
document.getElementById("home")?.appendChild(startseite);
let textilienCategory = document.createElement("a");
textilienCategory.id = "textilien";
textilienCategory.innerHTML = "wohntextilien";
textilienCategory.addEventListener("click", handleKategorie);
document.getElementById("wohntextilien")?.appendChild(textilienCategory);
let accessoiresCategory = document.createElement("a");
accessoiresCategory.id = "accessoires";
accessoiresCategory.innerHTML = "wohnaccessoires";
accessoiresCategory.addEventListener("click", handleKategorie);
document.getElementById("wohnaccessoires")?.appendChild(accessoiresCategory);
function handleKategorie(_event) {
    if (_event.currentTarget.getAttribute("id") == "home") {
        document.getElementById("textilBlock").style.display = "block";
        document.getElementById("accessoiresBlock").style.display = "block";
    }
    else if (_event.currentTarget.getAttribute("id") == "textilien") {
        document.getElementById("textilBlock").style.display = "block";
        document.getElementById("accessoiresBlock").style.display = "none";
    }
    else if (_event.currentTarget.getAttribute("id") == "accessoires") {
        document.getElementById("textilBlock").style.display = "none";
        document.getElementById("accessoiresBlock").style.display = "block";
    }
}
//# sourceMappingURL=script.js.map