var allText = document.querySelectorAll("*");
window.setInterval(function (){
    allText.forEach(function (currentElement, index) {
        if (index >= 7)
            currentElement.style.color = randColor();
        console.log(currentElement);
    });
}, 1000);


function randColor () {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return "rgb(" +r+", "+g+", "+b+")";
}

