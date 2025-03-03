function onClickB1()
{
    fetch("../index.html")
    .then(resp => resp.text())
    .then(html => document.documentElement.innerHTML = html)
}

document.addEventListener("DOMContentLoaded", function() {
    b0 = document.getElementById("b1")
    b0.addEventListener("click", onClickB1)
})