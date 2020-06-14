"use strict";
var aufgabe07;
(function (aufgabe07) {
    let gesamtsumme = Number(localStorage.getItem("AnzahlItems"));
    for (let i = 0; i < (localStorage.length); i++) {
        let divCart = document.createElement("div");
        divCart.setAttribute("class", "items");
        divCart.id = "div" + i;
        document.getElementById("cartProdukte")?.appendChild(divCart);
        let bild = document.createElement("img");
        bild.setAttribute("src", "" + localStorage.getItem("bild" + i));
        divCart.appendChild(bild);
        let artikelname = document.createElement("p");
        artikelname.innerHTML = localStorage.getItem("artikelname" + i);
        divCart.appendChild(artikelname);
        let preis = document.createElement("p");
        divCart.appendChild(preis).innerHTML = "" + localStorage.getItem("preis" + i) + " €";
        let button = document.createElement("button");
        button.innerHTML = "Artikel entfernen";
        divCart.appendChild(button);
        button.addEventListener("click", handleDeleteItem);
        //funktion zum Entfernen einzelner Artikel
        function handleDeleteItem(_event) {
            let preisString = _event.currentTarget.parentElement.getAttribute("preis");
            gesamtsumme = gesamtsumme - parseFloat(preisString);
            gesamtsumme.innerHTML = "Gesamtsumme: ";
            gesamtsumme.toFixed(2) + "€";
            setGesamtpreis();
            //Summe anzeigem
            let gesamtsumme = document.getElementById("gesamtsumme");
            let summe = localStorage.getItem("Summe");
            gesamtsumme.innerText = summe;
        }
    }
})(aufgabe07 || (aufgabe07 = {}));
//# sourceMappingURL=cart.js.map