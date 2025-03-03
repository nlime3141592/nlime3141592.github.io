function onClickB1()
{
    window.location.href = "../index.html"
}

document.addEventListener("DOMContentLoaded", function() {
    b0 = document.getElementById("b1")
    b0.addEventListener("click", onClickB1)
})