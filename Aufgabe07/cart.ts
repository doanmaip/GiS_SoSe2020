namespace Aufgabe07 {


    let carticles: Produkt[] = JSON.parse(localStorage.getItem("cart")!);
    console.log(carticles);

    let warenkorbsumme: number = 0;
    let gesamtSumme: HTMLHeadingElement = document.createElement("h2");
    gesamtSumme.innerText = "Gesamtsumme: " + warenkorbsumme.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
    document.getElementById("gesamtsumme")?.appendChild(gesamtSumme);
    if (carticles[0] !== undefined) {
        erstelleWarenkorb();
    }
    function erstelleWarenkorb(): void {
        for (let i: number = 0; i < carticles.length; i++) {

            let divCart: HTMLDivElement = document.createElement("div");
            divCart.setAttribute("class", "items");
            divCart.id = "div" + i;
            document.getElementById("cartProdukte")?.appendChild(divCart);

            let bild: HTMLElement = document.createElement("img");
            bild.setAttribute("src", carticles[i].bild);
            bild.classList.add("articlepictures");
            divCart.appendChild(bild);

            let artikelname: HTMLElement = document.createElement("p");
            artikelname.innerText = carticles[i].artikelname;
            divCart.appendChild(artikelname);

            let preis: HTMLElement = document.createElement("p");
            preis.innerText = carticles[i].preis.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
            divCart.appendChild(preis);

            let button: HTMLElement = document.createElement("button");
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
    function handleDeleteItem(_event: Event): void {
        let aktuellertIndex: number = parseInt(<string>(<HTMLElement>_event.target).getAttribute("index")!);
        warenkorbsumme = warenkorbsumme - carticles[aktuellertIndex].preis;
        gesamtSumme.innerText = "Gesamtsumme: " + warenkorbsumme.toLocaleString("de-DE", { style: "currency", currency: "EUR" });

        ((<HTMLDivElement>_event.target).parentElement?.remove());

    }

    let removeallButton: HTMLButtonElement = document.createElement("button");
    (<HTMLButtonElement>document.getElementById("removeall")).appendChild(removeallButton);
    removeallButton.innerText = "Warenkorb leeren";
    removeallButton.addEventListener("click", handleRemoveAll);
    removeallButton.classList.add("button");

    //funktion zum Entfernen aller Artikel
    function handleRemoveAll(_event: Event): void {
        for (let i: number = 0; i < carticles.length; i++) {
            (<HTMLDivElement>document.getElementById("div" + i)).remove();
        }
        warenkorbsumme = 0;
        gesamtSumme.innerText = "Gesamtsumme: " + warenkorbsumme.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
        localStorage.clear();

    }



}