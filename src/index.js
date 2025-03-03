function onClickB0()
{
    fetch("../page.html")
    .then(resp => resp.text())
    .then(html => document.documentElement.innerHTML = html)
}

document.addEventListener("DOMContentLoaded", function() {
    b0 = document.getElementById("b0")
    b0.addEventListener("click", onClickB0)
})