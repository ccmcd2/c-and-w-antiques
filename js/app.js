
/*
    Menu Toggler
    1. Listen for a click on .navbar-toggler
    2. Store the value of the attribute "data-target"
    3. Toggle the ".open" class for the navigation element
*/

let toggler = document.querySelector(".navbar-toggler");

toggler.onclick = function(){
    let attribute = this.getAttribute("data-target");
    let navigation = document.querySelector(attribute);
    navigation.classList.toggle("open");
}

/* Dropdown Toggler
1. Listen for a click on .dropdown > a
2. Toggle the ".open" class for the navigation
*/

let dropdownToggler = document.querySelectorAll(".dropdown > a");

dropdownToggler.forEach(function(dropdown){
    dropdown.onclick = function(e){
        e.preventDefault();
        this.closest(".dropdown").classList.toggle("open");
    }
});