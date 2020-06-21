namespace aufgabe07 {

    console.log(localStorage);
    let gesamtsumme: number = Number(localStorage.getItem("anzahlArtikel"));


    for (let i: number = 0; i < (gesamtsumme); i++) {

        let divCart: HTMLDivElement = document.createElement("div");
        divCart.setAttribute("class", "items");
        divCart.id = "div" + i;
        document.getElementById("cartProdukte") ?.appendChild(divCart);

        let bild: HTMLElement = document.createElement("img");
        bild.setAttribute("src", "" + localStorage.getItem("artikel_bild" + i));
        bild.setAttribute("width", 200);
        bild.setAttribute("height", 200);
        divCart.appendChild(bild);

        let artikelname: HTMLElement = document.createElement("p");
        artikelname.innerHTML = localStorage.getItem("artikel_name" + i)!;
        divCart.appendChild(artikelname);

        let preisDiv: HTMLElement = document.createElement("div");
        preisDiv.setAttribute("preis", "" + localStorage.getItem("artikel_preis" + i));
        divCart.appendChild(preisDiv);

        let preis: HTMLElement = document.createElement("p");
        divCart.appendChild(preis).innerHTML = "" + localStorage.getItem("artikel_preis" + i) + " €";

        let button: HTMLElement = document.createElement("button");
        button.innerHTML = "Artikel entfernen";
        divCart.appendChild(button);
        button.addEventListener("click", handleDeleteItem);


        //Summe anzeigen
        let gesamtsumme: HTMLElement = document.getElementById("gesamtsumme");
        let summe: string = localStorage.getItem("summe")!;
        gesamtsumme.innerText = summe + "€";
    }


    //funktion zum Entfernen einzelner Artikel
    function handleDeleteItem(_event: Event): void {


        localStorage.removeItem('image');

        let preisString: string = (<HTMLParagraphElement>(<HTMLElement>_event.currentTarget).parentElement).getAttribute("preis")!;
        gesamtsumme = gesamtsumme - parseFloat(preisString);
        gesamtsumme.innerHTML = "Gesamtsumme: " gesamtsumme.toFixed(2) + "€";


        //Summe anzeigen
        let gesamtsumme: HTMLElement = document.getElementById("gesamtsumme");
        let summe: string = localStorage.getItem("summe")!;
        gesamtsumme.innerText = summe + "€";

    }






}