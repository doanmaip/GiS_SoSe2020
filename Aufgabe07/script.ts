namespace Aufgabe07 {


    export function createArtikel(): void {
        for (let i: number = 0; i < produkte.length; i++) {

            if (produkte[i].category == "kissen") {
                let newDiv: HTMLDivElement = document.createElement("div");
                newDiv.id = "div" + i;
                document.getElementById("flexKissen") ?.appendChild(newDiv);
                newDiv.setAttribute("index", i.toString());
            }

            if (produkte[i].category == "sonstiges") {
                let newDiv: HTMLDivElement = document.createElement("div");
                newDiv.id = "div" + i;
                document.getElementById("flexSonstiges") ?.appendChild(newDiv);
                newDiv.setAttribute("index", i.toString());
            }

            if (produkte[i].category == "prints") {
                let newDiv: HTMLDivElement = document.createElement("div");
                newDiv.id = "div" + i;
                document.getElementById("flexPrints") ?.appendChild(newDiv);
                newDiv.setAttribute("index", i.toString());
            }

            if (produkte[i].category == "deko") {
                let newDiv: HTMLDivElement = document.createElement("div");
                newDiv.id = "div" + i;
                document.getElementById("flexDeko") ?.appendChild(newDiv);
                newDiv.setAttribute("index", i.toString());
            }

            let imgElement: HTMLImageElement = document.createElement("img");
            imgElement.src = produkte[i].bild;
            imgElement.classList.add("articlepictures");
            document.getElementById("div" + i) ?.appendChild(imgElement);

            let artikelname: HTMLParagraphElement = document.createElement("p");
            artikelname.innerHTML = produkte[i].artikelname;
            document.getElementById("div" + i) ?.appendChild(artikelname);

            let source: HTMLParagraphElement = document.createElement("p");
            source.innerHTML = produkte[i].source;
            document.getElementById("div" + i) ?.appendChild(source);

            let preis: HTMLElement = document.createElement("p");
            preis.innerHTML = produkte[i].preis + " €";
            document.getElementById("div" + i) ?.appendChild(preis);

            let kaufen: HTMLButtonElement = document.createElement("button");
            kaufen.innerHTML = "Zum Warenkorb hinzufügen";
            kaufen.addEventListener("click", addtoCart);
            document.getElementById("div" + i) ?.appendChild(kaufen);
            kaufen.setAttribute("preis", produkte[i].preis.toString());
        }

    }

    //Aufgabe 1

    let artikelSumme: number = 0;
    let produktCounter: number = 0;
    let cartDiv: HTMLDivElement = document.createElement("div");
    cartDiv.id = "cart_count";
    let count: number = 0;

    let cartProdukte: Produkt[] = [];

    function addtoCart(_event: Event): void {

        if (produktCounter >= 0) {
            document.getElementById("cart_count") ?.appendChild(cartDiv);
        }

        produktCounter += 1;
        cartDiv.innerHTML = produktCounter + "";

        artikelSumme += parseInt((<HTMLElement>_event.currentTarget) ?.getAttribute("preis")!);

        


        if ((<HTMLButtonElement>_event.currentTarget) ?.getAttribute("preis")) {
            artikelSumme = count + parseInt((<HTMLButtonElement>_event.currentTarget) ?.getAttribute("preis")!);
            count = artikelSumme;
        }
        console.log(artikelSumme.toFixed(0));

        let indexButton: string = (<HTMLDivElement>(<HTMLElement>_event.currentTarget).parentElement).getAttribute("index")!;
        let indexNr: number = parseInt(indexButton);

        cartProdukte.push(produkte[indexNr]);
        localStorage.setItem("cart", JSON.stringify(produkte));
        /*
        localStorage.setItem("artikel_bild" + (cartProdukte.length - 1), produkte[indexNr].bild);
        localStorage.setItem("artikel_name" + (cartProdukte.length - 1), produkte[indexNr].artikelname);
        localStorage.setItem("artikel_description" + (cartProdukte.length - 1), produkte[indexNr].source);
        localStorage.setItem("artikel_preis" + (cartProdukte.length - 1), produkte[indexNr].preis.toString());
        localStorage.setItem("anzahlArtikel", cartProdukte.length.toString());*/


    }

    // Aufgabe 2

    let startseite: HTMLAnchorElement = document.createElement("a");
    startseite.id = "home";
    startseite.innerHTML = "home";
    startseite.addEventListener("click", handleKategorie);
    document.getElementById("home") ?.appendChild(startseite);

    let textilienCategory: HTMLAnchorElement = document.createElement("a");
    textilienCategory.id = "textilien";
    textilienCategory.innerHTML = "wohntextilien";
    textilienCategory.addEventListener("click", handleKategorie);
    document.getElementById("wohntextilien") ?.appendChild(textilienCategory);

    let accessoiresCategory: HTMLAnchorElement = document.createElement("a");
    accessoiresCategory.id = "accessoires";
    accessoiresCategory.innerHTML = "wohnaccessoires";
    accessoiresCategory.addEventListener("click", handleKategorie);
    document.getElementById("wohnaccessoires") ?.appendChild(accessoiresCategory);

    function handleKategorie(_event: Event): void {

        if ((<HTMLDivElement>_event.currentTarget).getAttribute("id") == "home") {
            (<HTMLDivElement>document.getElementById("textilBlock")).style.display = "block";
            (<HTMLDivElement>document.getElementById("accessoiresBlock")).style.display = "block";
        } else if ((<HTMLDivElement>_event.currentTarget).getAttribute("id") == "textilien") {
            (<HTMLDivElement>document.getElementById("textilBlock")).style.display = "block";
            (<HTMLDivElement>document.getElementById("accessoiresBlock")).style.display = "none";
        } else if ((<HTMLDivElement>_event.currentTarget).getAttribute("id") == "accessoires") {
            (<HTMLDivElement>document.getElementById("textilBlock")).style.display = "none";
            (<HTMLDivElement>document.getElementById("accessoiresBlock")).style.display = "block";
        }
    }

}
