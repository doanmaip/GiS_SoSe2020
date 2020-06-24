namespace Aufgabe09 {
    let formData: FormData;

    let HTMLbutton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("HTMLbutt");
    HTMLbutton.addEventListener("click", HTMLbutts);

    let JSONbutton: HTMLButtonElement = <HTMLButtonElement> document.getElementById("JSONbutt");
    JSONbutton.addEventListener("click", JSONbutts);


    async function HTMLbutts(): Promise<void> {
        formData = new FormData(document.forms[0]);
        let serverURL: string = "https://mifungaa.herokuapp.com/";
        //let url: string = "http://localhost:8100";
        serverURL += "/html";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        serverURL += "?" + query.toString();
       
        let response: Response = await fetch(serverURL) ;
        let responseString: string = await response.text(); 
        let serverResponse: HTMLElement = <HTMLElement> document.getElementById("serverResponse");
        serverResponse.innerHTML = responseString;
    }

    async function JSONbutts(): Promise<void> {
        formData = new FormData(document.forms[0]);
        let serverURL: string = "https://mifungaa.herokuapp.com/";
        //let url: string = "http://localhost:8100";
        serverURL += "/json";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        serverURL += "?" + query.toString();

        let response: Response = await fetch(serverURL);
        let responseString: string = await response.json();
        console.log(responseString);
    }
        
}
