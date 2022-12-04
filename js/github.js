"use strict";
(function () {
    const anchors = document.querySelectorAll('#tab-nav li  a');
    anchors.forEach(a => {
        a.addEventListener('click', function handleClick(event) {
            let target = event.currentTarget;
            let elem = document.querySelector("li.nav-item a.nav-link.active");
            elem.classList.remove('active');
            elem.classList.remove('fw-bolder');
            elem.classList.remove('text-body');
            target.classList.add('active');
            target.classList.add('fw-bolder');
            target.classList.add('text-body');
        });
    });
}())

