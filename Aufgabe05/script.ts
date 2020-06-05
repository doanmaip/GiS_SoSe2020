interface Produkt {
    bild: string;
    artikelname: string;
    source: string;
    preis: string;
    action: string;
}

//Wohntextilien
//Kissen


let artikel1: Produkt = { 
    bild: "Pillow3.jpeg", 
    artikelname: "\"Brada – Gestreiftes Kissen\"", 
    source: "urbanoutfitters.com", 
    preis: "49,00€",
    action: "https://www.urbanoutfitters.com/de-de/shop/brada-stripe-throw-cushion?color=085&currency=EUR&language=de-DE&quantity=1&ref=languageSelect&size=ONE%20SIZE&type=REGULAR"
};
let artikel2: Produkt = { 
    bild: "Pillow1.jpg", 
    artikelname: "\"Tegan Embroidered Pillow\"", 
    source: "lonefox.com", 
    preis: "$37,00",
    action: "https://lonefox.com/collections/throw-pillows/products/tegan-embroidered-pillow"
};
let artikel3: Produkt = { 
    bild: "illow2.jpg", 
    artikelname: "\"Emmit Kilim Pillow\"", 
    source: "lonefox.com", 
    preis: "$39,00",
    action: "https://lonefox.com/collections/throw-pillows/products/emmit-kilim-pillow"
};

let kissen: Produkt[] = [artikel1, artikel2, artikel3];

//Sonstiges

let artikel4: Produkt = { 
    bild: "Decor3.jpeg", 
    artikelname: "\"Badematte mit der Gestalt einer Frau\"", 
    source: "urbanoutfitters.com", 
    preis: "35,00€",
    action: "https://www.urbanoutfitters.com/de-de/shop/female-form-bath-mat?category=homeware&color=066&type=REGULAR&size=ONE%20SIZE&quantity=1"
};
let artikel5: Produkt = { 
    bild: "Decor4.jpeg", 
    artikelname: "\"Makramee-Wandbehang im Bohostil mit Mondmotiv\"", 
    source: "urbanoutfitters.com", 
    preis: "29,00€",
    action: "https://www.urbanoutfitters.com/de-de/shop/lunar-macrame-wall-hanging?category=SEARCHRESULTS&color=012&searchparams=q%3Dmakramee&type=REGULAR&size=ONE%20SIZE&quantity=1"
};
let artikel6: Produkt = { 
    bild: "Tray1.jpg", 
    artikelname: "\"Medium Havana Coral Bow\"", 
    source: "lonefox.com", 
    preis: "$49,00",
    action: "https://lonefox.com/collections/trays-bowls/products/medium-coral-bowl"
 };

let sonstiges: Produkt[] = [artikel4, artikel5, artikel6];

 
//Wohnaccesoires
//Art-Prints
let artikel7: Produkt = { 
    bild: "Print1.jpg", 
    artikelname: "\"Retro Sunset Art Print\"", 
    source: "lonefox.com", 
    preis: "$22,00€",
    action: "https://lonefox.com/collections/art-prints/products/retro-sunset-art-prin"
};
let artikel8: Produkt = { 
    bild: "Print2.jpg", 
    artikelname: "\"Visual Interest Art Print\"", 
    source: "lonefox.com", 
    preis: "$22,00",
    action: "https://lonefox.com/collections/art-prints/products/visual-interest-art-print"
};
let artikel9: Produkt = { 
    bild: "Print3.jpg", 
    artikelname: "\"Sand to Sea Art Print\"", 
    source: "lonefox.com", 
    preis: "$22,00",
    action: "https://lonefox.com/collections/art-prints/products/sand-sea-art-print"
 };

let artprints: Produkt[] = [artikel7, artikel8, artikel9];

//Deko

let artikel10: Produkt = { 
    bild: "Decor1.jpeg", 
    artikelname: "\"Sierra Vase\"", 
    source: "anthropology.com", 
    preis: "100,00€",
    action: "https://www.anthropologie.com/de-de/shop/sierra-vase?category=room-wall-decor&color=012&type=REGULAR&size=L&quantity=1"
};
let artikel11: Produkt = { 
    bild: "Decor2.jpeg", 
    artikelname: "\"Mia Schminkspiegel\"", 
    source: "lanthropology.com", 
    preis: "55,00€",
    action: "https://www.anthropologie.com/de-de/shop/mia-tabletop-vanity-mirror?category=room-wall-decor&color=027&type=REGULAR&size=One%20Size&quantity=1"
};
let artikel12: Produkt = { 
    bild: "Decor5.jpeg", 
    artikelname: "\"Keramiktasse mit zarten Streifen\"", 
    source: "urbanoutfitters.com", 
    preis: "16,00€",
    action: "https://www.urbanoutfitters.com/de-de/shop/soft-stripe-ceramic-mug?category=kitchen-bar&color=000&type=REGULAR&size=ONE%20SIZE&quantity=1" };

let deko: Produkt[] = [artikel10, artikel11, artikel12];

//for-schleifen für Wohntextilien
//Kissen

for (let i: number = 0; i < kissen.length; i++) {
    //neues div erstellen; neues div an "flexKissen" adden
    let div: HTMLDivElement = document.createElement("div");
    div.id = "divKissen" + i;
    document.getElementById("flexKissen")?.appendChild(div);

    //bild
    let img: HTMLImageElement = document.createElement("img");
    img.src = kissen[i].bild;
    document.getElementById("divKissen" + i)?.appendChild(img);

    //artikelname
    let artikelname: HTMLParagraphElement = document.createElement("p");
    artikelname.innerHTML = kissen[i].artikelname;
    document.getElementById("divKissen" + i)?.appendChild(artikelname);

    //source
    let source: HTMLParagraphElement = document.createElement("p");
    source.innerHTML = kissen[i].source;
    document.getElementById("divKissen" + i)?.appendChild(source);

    //preis
    let preis: HTMLParagraphElement = document.createElement("p");
    preis.innerHTML = kissen[i].preis;
    document.getElementById("divKissen" + i)?.appendChild(preis);

    //kaufen button
    let kaufen: HTMLFormElement = document.createElement("form");
    kaufen.action = kissen[i].action;
    kaufen.target = "blank";
    document.getElementById("divKissen" + i)?.appendChild(kaufen);

    let input: HTMLInputElement = document.createElement("input");
    input.type = "submit";
    input.className = "button";
    input.value = "Kaufen";
    kaufen.appendChild(input);
}

//Sonstiges

for (let i: number = 0; i < sonstiges.length; i++) {
     //neues div erstellen; neues div an "flexSonstiges" adden
     let div: HTMLDivElement = document.createElement("div");
     div.id = "divSonstiges" + i;
     document.getElementById("flexSonstiges")?.appendChild(div);
 
     //bild
     let img: HTMLImageElement = document.createElement("img");
     img.src = sonstiges[i].bild;
     document.getElementById("divSonstiges" + i)?.appendChild(img);
 
     //artikelname
     let artikelname: HTMLParagraphElement = document.createElement("p");
     artikelname.innerHTML = sonstiges[i].artikelname;
     document.getElementById("divSonstiges" + i)?.appendChild(artikelname); 

     //source
     let source: HTMLParagraphElement = document.createElement("p");
     source.innerHTML = sonstiges[i].source;
     document.getElementById("divSonstiges" + i)?.appendChild(source);
 
     //preis
     let preis: HTMLParagraphElement = document.createElement("p");
     preis.innerHTML = sonstiges[i].preis;
     document.getElementById("divSonstiges" + i)?.appendChild(preis);
 
     //kaufen button
     let kaufen: HTMLFormElement = document.createElement("form");
     kaufen.action = sonstiges[i].action;
     kaufen.target = "blank";
     document.getElementById("divSonstiges" + i)?.appendChild(kaufen);
 
     let input: HTMLInputElement = document.createElement("input");
     input.type = "submit";
     input.className = "button";
     input.value = "Kaufen";
     kaufen.appendChild(input);
 }

 //Wohnaccesoires
 //Art-Prints


for (let i: number = 0; i < artprints.length; i++) {
    //neues div erstellen; neues div an "flexPrints" adden
    let div: HTMLDivElement = document.createElement("div");
    div.id = "divPrints" + i;
    document.getElementById("flexPrints")?.appendChild(div);

    //bild
    let img: HTMLImageElement = document.createElement("img");
    img.src = artprints[i].bild;
    document.getElementById("divPrints" + i)?.appendChild(img);

    //artikelname
    let artikelname: HTMLParagraphElement = document.createElement("p");
    artikelname.innerHTML = artprints[i].artikelname;
    document.getElementById("divPrints" + i)?.appendChild(artikelname);  
    
    //source
    let source: HTMLParagraphElement = document.createElement("p");
    source.innerHTML = artprints[i].source;
    document.getElementById("divPrints" + i)?.appendChild(source);

    //preis
    let preis: HTMLParagraphElement = document.createElement("p");
    preis.innerHTML = artprints[i].preis;
    document.getElementById("divPrints" + i)?.appendChild(preis);

    //kaufen button
    let kaufen: HTMLFormElement = document.createElement("form");
    kaufen.action = artprints[i].action;
    kaufen.target = "blank";
    document.getElementById("divPrints" + i)?.appendChild(kaufen);

    let input: HTMLInputElement = document.createElement("input");
    input.type = "submit";
    input.className = "button";
    input.value = "Kaufen";
    kaufen.appendChild(input);
}

//Deko

for (let i: number = 0; i < deko.length; i++) {
    //neues div erstellen; neues div an "flexDeko" adden
    let div: HTMLDivElement = document.createElement("div");
    div.id = "divDeko" + i;
    document.getElementById("flexDeko")?.appendChild(div);

    //bild
    let img: HTMLImageElement = document.createElement("img");
    img.src = deko[i].bild;
    document.getElementById("divDeko" + i)?.appendChild(img);

    //artikelname
    let artikelname: HTMLParagraphElement = document.createElement("p");
    artikelname.innerHTML = deko[i].artikelname;
    document.getElementById("divDeko" + i)?.appendChild(artikelname);    
    
    //source
    let source: HTMLParagraphElement = document.createElement("p");
    source.innerHTML = deko[i].source;
    document.getElementById("divDeko" + i)?.appendChild(source);

    //preis
    let preis: HTMLParagraphElement = document.createElement("p");
    preis.innerHTML = deko[i].preis;
    document.getElementById("divDeko" + i)?.appendChild(preis);

    //kaufen button
    let kaufen: HTMLFormElement = document.createElement("form");
    kaufen.action = deko[i].action;
    kaufen.target = "blank";
    document.getElementById("divDeko" + i)?.appendChild(kaufen);

    let input: HTMLInputElement = document.createElement("input");
    input.type = "submit";
    input.className = "button";
    input.value = "Kaufen";
    kaufen.appendChild(input);
}