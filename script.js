var scrollPos, 
    docElem = document.documentElement,
    body = document.body,
    zoomGIF = document.getElementById("gif-zoom");

window.addEventListener("scroll", function(event){
    scrollPos = body.scrollTop || docElem.scrollTop;

    zoomGIF.className = ( scrollPos > 1 ) ? "zoom" : "normal";
})

const imgSection = document.querySelector(".img-translate")

const options = {}

const observer = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry => {
        console.log(entry)
    })
}, options)

observer.observe(imgSection)