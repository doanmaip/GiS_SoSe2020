"use strict";
var Aufgabe08;
(function (Aufgabe08) {
    let formData;
    let myButton = document.getElementById("button");
    myButton.addEventListener("click", buttonHandler);
    async function addToURL() {
        formData = new FormData(document.forms[0]);
        let url = "https://mifungaa.herokuapp.com/";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        return url;
    }
    async function buttonHandler() {
        getResponse(await addToURL());
    }
    async function getResponse(_url) {
        let response = await fetch(_url, { method: "get" });
        let resp2 = await response.text();
        console.log(resp2);
    }
})(Aufgabe08 || (Aufgabe08 = {}));
//# sourceMappingURL=script.js.map