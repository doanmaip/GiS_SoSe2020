namespace aufgabe07 {

    let gesamtsumme: number = Number(localStorage.getItem("AnzahlItems"));

    for (let i: number = 0; i < (localStorage.length); i++) {

        let divCart: HTMLDivElement = document.createElement("div");
        divCart.setAttribute("class", "items");
        divCart.id = "div" + i;
        document.getElementById("cartProdukte")?.appendChild(divCart);
        
        let bild: HTMLElement = document.createElement("img");
        bild.setAttribute("src", "" + localStorage.getItem("bild" + i));
        divCart.appendChild(bild);

        let artikelname: HTMLElement = document.createElement("p");
        artikelname.innerHTML = localStorage.getItem("artikelname" + i)!;
        divCart.appendChild(artikelname);

        let preis: HTMLElement = document.createElement("p");
        divCart.appendChild(preis).innerHTML = "" + localStorage.getItem("preis" + i) + " €";
        
        let button: HTMLElement = document.createElement("button");
        button.innerHTML = "Artikel entfernen";
        divCart.appendChild(button);
        button.addEventListener("click", handleDeleteItem);

        //funktion zum Entfernen einzelner Artikel
        function handleDeleteItem(_event: Event): void {
            let preisString: string = (<HTMLParagraphElement>(<HTMLElement>_event.currentTarget).parentElement).getAttribute("preis")!;
            gesamtsumme = gesamtsumme - parseFloat(preisString);
            gesamtsumme.innerHTML = "Gesamtsumme: " gesamtsumme.toFixed(2) + "€";
            setGesamtpreis();


           

        //Summe anzeigem
        let gesamtsumme: HTMLElement = document.getElementById("gesamtsumme");
        let summe: string = localStorage.getItem("Summe")
        gesamtsumme.innerText = summe;

        
