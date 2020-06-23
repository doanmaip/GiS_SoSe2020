"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    function createArtikel() {
        for (let i = 0; i < Aufgabe07.produkte.length; i++) {
            if (Aufgabe07.produkte[i].category == "kissen") {
                let newDiv = document.createElement("div");
                newDiv.id = "div" + i;
                document.getElementById("flexKissen")?.appendChild(newDiv);
                newDiv.setAttribute("index", i.toString());
            }
            if (Aufgabe07.produkte[i].category == "sonstiges") {
                let newDiv = document.createElement("div");
                newDiv.id = "div" + i;
                document.getElementById("flexSonstiges")?.appendChild(newDiv);
                newDiv.setAttribute("index", i.toString());
            }
            if (Aufgabe07.produkte[i].category == "prints") {
                let newDiv = document.createElement("div");
                newDiv.id = "div" + i;
                document.getElementById("flexPrints")?.appendChild(newDiv);
                newDiv.setAttribute("index", i.toString());
            }
            if (Aufgabe07.produkte[i].category == "deko") {
                let newDiv = document.createElement("div");
                newDiv.id = "div" + i;
                document.getElementById("flexDeko")?.appendChild(newDiv);
                newDiv.setAttribute("index", i.toString());
            }
            let imgElement = document.createElement("img");
            imgElement.src = Aufgabe07.produkte[i].bild;
            imgElement.classList.add("articlepictures");
            document.getElementById("div" + i)?.appendChild(imgElement);
            let artikelname = document.createElement("p");
            artikelname.innerHTML = Aufgabe07.produkte[i].artikelname;
            document.getElementById("div" + i)?.appendChild(artikelname);
            let source = document.createElement("p");
            source.innerHTML = Aufgabe07.produkte[i].source;
            document.getElementById("div" + i)?.appendChild(source);
            let preis = document.createElement("p");
            preis.innerHTML = Aufgabe07.produkte[i].preis + " €";
            document.getElementById("div" + i)?.appendChild(preis);
            let kaufen = document.createElement("button");
            kaufen.innerHTML = "Zum Warenkorb hinzufügen";
            kaufen.addEventListener("click", addtoCart);
            document.getElementById("div" + i)?.appendChild(kaufen);
            kaufen.setAttribute("preis", Aufgabe07.produkte[i].preis.toString());
        }
    }
    Aufgabe07.createArtikel = createArtikel;
    //Aufgabe 1
    let artikelSumme = 0;
    let produktCounter = 0;
    let cartDiv = document.createElement("div");
    cartDiv.id = "cart_count";
    let count = 0;
    let cartProdukte = [];
    function addtoCart(_event) {
        if (produktCounter >= 0) {
            document.getElementById("cart_count")?.appendChild(cartDiv);
        }
        produktCounter += 1;
        cartDiv.innerHTML = produktCounter + "";
        artikelSumme += parseInt(_event.currentTarget?.getAttribute("preis"));
        if (_event.currentTarget?.getAttribute("preis")) {
            artikelSumme = count + parseInt(_event.currentTarget?.getAttribute("preis"));
            count = artikelSumme;
        }
        console.log(artikelSumme.toFixed(0));
        let indexButton = _event.currentTarget.parentElement.getAttribute("index");
        let indexNr = parseInt(indexButton);
        cartProdukte.push(Aufgabe07.produkte[indexNr]);
        localStorage.setItem("cart", JSON.stringify(Aufgabe07.produkte));
        /*
        localStorage.setItem("artikel_bild" + (cartProdukte.length - 1), produkte[indexNr].bild);
        localStorage.setItem("artikel_name" + (cartProdukte.length - 1), produkte[indexNr].artikelname);
        localStorage.setItem("artikel_description" + (cartProdukte.length - 1), produkte[indexNr].source);
        localStorage.setItem("artikel_preis" + (cartProdukte.length - 1), produkte[indexNr].preis.toString());
        localStorage.setItem("anzahlArtikel", cartProdukte.length.toString());*/
    }
    // Aufgabe 2
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
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=script.js.map