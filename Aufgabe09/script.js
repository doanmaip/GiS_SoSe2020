"use strict";
var Aufgabe09;
(function (Aufgabe09) {
    let formData;
    let HTMLbutton = document.getElementById("HTMLbutt");
    HTMLbutton.addEventListener("click", HTMLbutts);
    let JSONbutton = document.getElementById("JSONbutt");
    JSONbutton.addEventListener("click", JSONbutts);
    async function HTMLbutts() {
        formData = new FormData(document.forms[0]);
        let serverURL = "https://mifungaa.herokuapp.com/";
        //let url: string = "http://localhost:8100";
        serverURL += "/html";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        serverURL += "?" + query.toString();
        let response = await fetch(serverURL);
        let responseString = await response.text();
        let serverResponse = document.getElementById("serverResponse");
        serverResponse.innerHTML = responseString;
    }
    async function JSONbutts() {
        formData = new FormData(document.forms[0]);
        let serverURL = "https://mifungaa.herokuapp.com/";
        //let url: string = "http://localhost:8100";
        serverURL += "/json";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        serverURL += "?" + query.toString();
        let response = await fetch(serverURL);
        let responseString = await response.json();
        console.log(responseString);
    }
})(Aufgabe09 || (Aufgabe09 = {}));
//# sourceMappingURL=script.js.map