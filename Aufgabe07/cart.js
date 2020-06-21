"use strict";
var aufgabe07;
(function (aufgabe07) {
    console.log(localStorage);
    let gesamtsumme = Number(localStorage.getItem("anzahlArtikel"));
    for (let i = 0; i < (gesamtsumme); i++) {
        let divCart = document.createElement("div");
        divCart.setAttribute("class", "items");
        divCart.id = "div" + i;
        document.getElementById("cartProdukte")?.appendChild(divCart);
        let bild = document.createElement("img");
        bild.setAttribute("src", "" + localStorage.getItem("artikel_bild" + i));
        bild.setAttribute("width", 200);
        bild.setAttribute("height", 200);
        divCart.appendChild(bild);
        let artikelname = document.createElement("p");
        artikelname.innerHTML = localStorage.getItem("artikel_name" + i);
        divCart.appendChild(artikelname);
        let preisDiv = document.createElement("div");
        preisDiv.setAttribute("preis", "" + localStorage.getItem("artikel_preis" + i));
        divCart.appendChild(preisDiv);
        let preis = document.createElement("p");
        divCart.appendChild(preis).innerHTML = "" + localStorage.getItem("artikel_preis" + i) + " €";
        let button = document.createElement("button");
        button.innerHTML = "Artikel entfernen";
        divCart.appendChild(button);
        button.addEventListener("click", handleDeleteItem);
        //Summe anzeigen
        let gesamtsumme = document.getElementById("gesamtsumme");
        let summe = localStorage.getItem("summe");
        gesamtsumme.innerText = summe + "€";
    }
    //funktion zum Entfernen einzelner Artikel
    function handleDeleteItem(_event) {
        localStorage.removeItem('image');
        let preisString = _event.currentTarget.parentElement.getAttribute("preis");
        gesamtsumme = gesamtsumme - parseFloat(preisString);
        gesamtsumme.innerHTML = "Gesamtsumme: ";
        gesamtsumme.toFixed(2) + "€";
        //Summe anzeigen
        let gesamtsumme = document.getElementById("gesamtsumme");
        let summe = localStorage.getItem("summe");
        gesamtsumme.innerText = summe + "€";
    }
})(aufgabe07 || (aufgabe07 = {}));
//# sourceMappingURL=cart.js.map