"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    let carticles = JSON.parse(localStorage.getItem("cart"));
    console.log(carticles);
    let warenkorbsumme = 0;
    let gesamtSumme = document.createElement("h2");
    gesamtSumme.innerText = "Gesamtsumme: " + warenkorbsumme.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
    document.getElementById("gesamtsumme")?.appendChild(gesamtSumme);
    if (carticles[0] !== undefined) {
        erstelleWarenkorb();
    }
    function erstelleWarenkorb() {
        for (let i = 0; i < carticles.length; i++) {
            let divCart = document.createElement("div");
            divCart.setAttribute("class", "items");
            divCart.id = "div" + i;
            document.getElementById("cartProdukte")?.appendChild(divCart);
            let bild = document.createElement("img");
            bild.setAttribute("src", carticles[i].bild);
            bild.classList.add("articlepictures");
            divCart.appendChild(bild);
            let artikelname = document.createElement("p");
            artikelname.innerText = carticles[i].artikelname;
            divCart.appendChild(artikelname);
            let preis = document.createElement("p");
            preis.innerText = carticles[i].preis.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
            divCart.appendChild(preis);
            let button = document.createElement("button");
            button.innerText = "Artikel entfernen";
            button.classList.add("button");
            button.setAttribute("index", i.toString());
            divCart.appendChild(button);
            button.addEventListener("click", handleDeleteItem);
            //Summe anzeigen
            warenkorbsumme = warenkorbsumme + carticles[i].preis;
            gesamtSumme.innerText = "Gesamtsumme: " + warenkorbsumme.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
        }
    }
    //funktion zum Entfernen einzelner Artikel
    function handleDeleteItem(_event) {
        let aktuellertIndex = parseInt(_event.target.getAttribute("index"));
        warenkorbsumme = warenkorbsumme - carticles[aktuellertIndex].preis;
        gesamtSumme.innerText = "Gesamtsumme: " + warenkorbsumme.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
        (_event.target.parentElement?.remove());
    }
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=cart.js.map