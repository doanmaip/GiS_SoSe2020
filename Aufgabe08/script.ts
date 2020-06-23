namespace Aufgabe08 {
    let formData: FormData;
    let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("button");
    button.addEventListener("click", communiacate);

    async function communiacate(): Promise<void> {
        formData = new FormData(document.forms[0]);
        let url: string = "https://mifungaa.herokuapp.com/";
        //let url: string = "http://localhost:8100";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();
       
        let response: Response = await fetch(url, { method: "get" });
        let responseString: string = await response.text(); 
        console.log(responseString);

        for (let entry of query) {
            console.log(entry);
            console.log("name: " + entry[0]);
            console.log("value: " + entry[1]);
        }
    }
}