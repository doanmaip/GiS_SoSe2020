"use strict";
var Aufgabe08;
(function (Aufgabe08) {
    let formData;
    let button = document.getElementById("button");
    button.addEventListener("click", communicate);
    async function communicate() {
        formData = new FormData(document.forms[0]);
        let url = "https://mifungaa.herokuapp.com/";
        //let url: string = "http://localhost:8100";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        let response = await fetch(url, { method: "get" });
        let responseString = await response.text();
        console.log(responseString);
        for (let entry of query) {
            console.log(entry);
            console.log("name: " + entry[0]);
            console.log("value: " + entry[1]);
        }
    }
})(Aufgabe08 || (Aufgabe08 = {}));
//# sourceMappingURL=script.js.map