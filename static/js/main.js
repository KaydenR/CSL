window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    let windowPosition = window.scrollY > 0;
    header.classList.toggle("scrolling-active", windowPosition);
})

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}

function xFunction(x) {
    x.classList.toggle("change");
    myFunction();
}



