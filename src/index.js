function onClickB0()
{
    document.html = fetch("../page.html")
    .then(resp => resp.text())
    .then(html => document.documentElement.innerHtml = html)
}

document.addEventListener("DOMContentLoaded", function() {
    b0 = document.getElementById("b0")
    b0.addEventListener("onclick", onClickB0)
})