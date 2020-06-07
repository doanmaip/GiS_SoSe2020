interface Produkt {
    bild: string;
    artikelname: string;
    source: string;
    preis: number;
    category: string;
}


let artikel1: Produkt = { 
    bild: "Pillow3.jpeg", 
    artikelname: "\"Brada – Gestreiftes Kissen\"", 
    source: "urbanoutfitters.com", 
    preis: 49.00,
    category: "kissen"
   
};
let artikel2: Produkt = { 
    bild: "Pillow1.jpg", 
    artikelname: "\"Tegan Embroidered Pillow\"", 
    source: "lonefox.com", 
    preis: 37.00,
    category: "kissen"
};
let artikel3: Produkt = { 
    bild: "Pillow2.jpg", 
    artikelname: "\"Emmit Kilim Pillow\"", 
    source: "lonefox.com", 
    preis: 39.00,
    category: "kissen"
};

let artikel4: Produkt = { 
    bild: "Decor3.jpeg", 
    artikelname: "\"Badematte mit der Gestalt einer Frau\"", 
    source: "urbanoutfitters.com", 
    preis: 35.00,
    category: "sonstiges"
};
let artikel5: Produkt = { 
    bild: "Decor4.jpeg", 
    artikelname: "\"Makramee-Wandbehang im Bohostil mit Mondmotiv\"", 
    source: "urbanoutfitters.com", 
    preis: 29.00,
    category: "sonstiges"
};
let artikel6: Produkt = { 
    bild: "Tray1.jpg", 
    artikelname: "\"Medium Havana Coral Bow\"", 
    source: "lonefox.com", 
    preis: 49.00,
    category: "sonstiges" };

let artikel7: Produkt = { 
    bild: "Print1.jpg", 
    artikelname: "\"Retro Sunset Art Print\"", 
    source: "lonefox.com", 
    preis: 22.00,
    category: "prints"
};
let artikel8: Produkt = { 
    bild: "Print2.jpg", 
    artikelname: "\"Visual Interest Art Print\"", 
    source: "lonefox.com", 
    preis: 22.00,
    category: "prints"
};
let artikel9: Produkt = { 
    bild: "Print3.jpg", 
    artikelname: "\"Sand to Sea Art Print\"", 
    source: "lonefox.com", 
    preis: 22.00,
    category: "prints" 
};

let artikel10: Produkt = { 
    bild: "Decor1.jpeg", 
    artikelname: "\"Sierra Vase\"", 
    source: "anthropology.com", 
    preis: 100.00,
    category: "deko"
};
let artikel11: Produkt = { 
    bild: "Decor2.jpeg", 
    artikelname: "\"Mia Schminkspiegel\"", 
    source: "lanthropology.com", 
    preis: 55.00,
    category: "deko"
};
let artikel12: Produkt = { 
    bild: "Decor5.jpeg", 
    artikelname: "\"Keramiktasse mit zarten Streifen\"", 
    source: "urbanoutfitters.com", 
    preis: 16.00,
    category: "deko"
};

let produkte: Produkt[] = [artikel1, artikel2, artikel3, artikel4, artikel5, artikel6, artikel7, artikel8, artikel9, artikel10, artikel11, artikel12];

for (let i: number = 0; i < produkte.length; i++) {


    if (produkte[i].category == "kissen") {
        let newDiv: HTMLDivElement = document.createElement("div");
        newDiv.id = "div" + i;
        document.getElementById("flexKissen")?.appendChild(newDiv); 
        }
    
    if (produkte[i].category == "sonstiges") {
        let newDiv: HTMLDivElement = document.createElement("div");
        newDiv.id = "div" + i;
        document.getElementById("flexSonstiges")?.appendChild(newDiv);
        }
    if (produkte[i].category == "prints") {
        let newDiv: HTMLDivElement = document.createElement("div");
        newDiv.id = "div" + i;
        document.getElementById("flexPrints")?.appendChild(newDiv); 
        }
        
    if (produkte[i].category == "deko") {
        let newDiv: HTMLDivElement = document.createElement("div");
        newDiv.id = "div" + i;
        document.getElementById("flexDeko")?.appendChild(newDiv);
        }    
    
    let imgElement: HTMLImageElement = document.createElement("img");
    imgElement.src = produkte[i].bild;
    document.getElementById("div" + i)?.appendChild(imgElement);

    let artikelname: HTMLParagraphElement = document.createElement("p");
    artikelname.innerHTML = produkte[i].artikelname;
    document.getElementById("div" + i)?.appendChild(artikelname);

    let source: HTMLParagraphElement = document.createElement("p");
    source.innerHTML = produkte[i].source;
    document.getElementById("div" + i)?.appendChild(source);

    let preis: HTMLElement = document.createElement("p");
    preis.innerHTML = produkte[i].preis + " €";
    document.getElementById("div" + i)?.appendChild(preis);

    let kaufen: HTMLButtonElement = document.createElement("button");
    kaufen.innerHTML = "Zum Warenkorb hinzufügen";
    kaufen.addEventListener("click", addtoCart);
    document.getElementById("div" + i)?.appendChild(kaufen);
    kaufen.setAttribute("preis", produkte[i].preis.toString());
}

let summe: number = 0;
let count: number = 0;
let produktCounter: number = 0;
let cartDiv: HTMLDivElement = document.createElement("div");

function addtoCart(_event: Event): void {
    
    if (produktCounter >= 0) {
        document.getElementById("cart_count")?.appendChild(cartDiv);
    }

    produktCounter++;
    cartDiv.innerHTML = produktCounter + "";
 
    if ( (<HTMLButtonElement>_event.currentTarget)?.getAttribute("preis")) {
            summe = count + parseInt((<HTMLButtonElement>_event.currentTarget)?.getAttribute("preis")!);
            count = summe;
        } 
    console.log("total: " + summe.toFixed(0) + "€");

    
}

let startseite: HTMLAnchorElement = document.createElement("a");
startseite.id = "home";
startseite.innerHTML = "home";
startseite.addEventListener("click", handleKategorie);
document.getElementById("home")?.appendChild(startseite);

let textilienCategory: HTMLAnchorElement = document.createElement("a");
textilienCategory.id = "textilien";
textilienCategory.innerHTML = "wohntextilien";
textilienCategory.addEventListener("click", handleKategorie);
document.getElementById("wohntextilien")?.appendChild(textilienCategory);

let accessoiresCategory: HTMLAnchorElement = document.createElement("a");
accessoiresCategory.id = "accessoires";
accessoiresCategory.innerHTML = "wohnaccessoires";
accessoiresCategory.addEventListener("click", handleKategorie);
document.getElementById("wohnaccessoires")?.appendChild(accessoiresCategory);

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



