"use strict";
(function () {
    document.addEventListener('click', function handleClick(event) {
        var elem = document.querySelector("li.nav-item a.nav-link.active")
        elem.classList.remove('active');
        event.target.classList.add('active');
    });
}())

