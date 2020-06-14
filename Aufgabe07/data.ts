namespace Aufgabe07 {
    export interface Produkt {
        bild: string;
        artikelname: string;
        source: string;
        preis: number;
        category: string;
    }

    export let produkte: Produkt[];
    loadArtikel("array.json");

    async function loadArtikel(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        let jsonArray: JSON = await response.json();
        produkte = await JSON.parse(JSON.stringify(jsonArray));
        createArtikel();
    }
}