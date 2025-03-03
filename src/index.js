function onClickB0()
{
    window.location.href = "../page.html"
}

document.addEventListener("DOMContentLoaded", function() {
    b0 = document.getElementById("b0")
    b0.addEventListener("click", onClickB0)
})