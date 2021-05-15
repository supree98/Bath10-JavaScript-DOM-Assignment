var isLinkNull = true;

function createEl() {
    if(isLinkNull) {
    var res = document.createElement("a");
    res.href = "https://www.facebook.com";
    res.innerHTML = "go to facebook";
    res.style.color = "blue";
    document.body.append(res);
    }
    isLinkNull = false;
}

function deleteEl() {
    document.body.removeChild(document.body.lastChild);
}