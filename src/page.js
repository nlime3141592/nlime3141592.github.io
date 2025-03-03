function onClickB1()
{
    document.html = fetch("../index.html")
    .then(resp => resp.text())
    .then(html => document.documentElement.innerHtml = html)
}

document.addEventListener("DOMContentLoaded", function() {
    b0 = document.getElementById("b1")
    b0.addEventListener("onclick", onClickB1)
})