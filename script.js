// let titles = document.getElementsByClassName("links");
// console.log(titles);

// $(".links").addEventListener ("mouseover", function () {
//     $(".links").style.backgroundColor = "white"
// });

const links = $(".links")

links[i].addEventListener('mouseover', function() {
for (i = 0 ; i < links.length; i++){ 
        links.style.backgroundColor = "white";
}
