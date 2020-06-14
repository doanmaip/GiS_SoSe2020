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
            gesamtsumme.innerText = "Gesamtsumme: " + summe;
        }
        let cartSum = 0;
        for (let i = 0; i < (localStorage.length / 3); i++) {
            let cartDiv = document.createElement("div");
            cartDiv.id = "" + i;
            cartDiv.setAttribute("class", "charInCart");
            document.getElementById("korbinhalt")?.appendChild(cartDiv);
            let img = document.createElement("img"); //Bild
            img.setAttribute("src", "" + localStorage.getItem("image" + i));
            img.setAttribute("alt", "" + localStorage.getItem("name" + i));
            cartDiv.appendChild(img);
            let h4 = document.createElement("h4"); // Name
            cartDiv.appendChild(h4).innerHTML = "" + localStorage.getItem("name" + i);
            let price = document.createElement("p"); //Preis
            cartDiv.appendChild(price).innerHTML = "" + localStorage.getItem("preis" + i) + " €";
            let button = document.createElement("button"); //Button
            button.innerHTML = "löschen";
            button.setAttribute("index", i.toString());
            button.addEventListener("click", handleDeleteFromCart);
            cartDiv.appendChild(button);
            cartSum += +localStorage.getItem("preis" + i);
            console.log("Im Warenkorb: " + localStorage.getItem("name" + i));
        }
        let summe = document.createElement("h3");
        summe.innerHTML = "Summe: " + cartSum.toFixed(2) + " €";
        document.getElementById("korbinhalt")?.appendChild(summe);
        let buttonAll = document.createElement("button"); //Button
        buttonAll.innerHTML = "alles löschen";
        buttonAll.addEventListener("click", handleDeleteWholeCart);
        document.getElementById("korbinhalt")?.appendChild(buttonAll);
        //Function zum Löschen eines Artikels
        function handleDeleteFromCart(_event) {
            let target = _event.target;
            let addedNum = "" + target.getAttribute("index");
            console.log("Gelöscht: " + localStorage.getItem("name" + addedNum));
            let minusPrice = +localStorage.getItem("preis" + addedNum);
            cartSum = cartSum - minusPrice;
            summe.innerHTML = "Summe: " + cartSum.toFixed(2) + " €";
            localStorage.removeItem("image" + addedNum);
            localStorage.removeItem("name" + addedNum);
            localStorage.removeItem("preis" + addedNum);
            document.getElementById(addedNum)?.remove();
        }
        //Function zum Löschen aller Artikel
        function handleDeleteWholeCart(_event) {
            localStorage.clear();
            console.log("Alles weg");
            location.reload();
        }
    }
})(aufgabe07 || (aufgabe07 = {}));
//# sourceMappingURL=cart.js.map