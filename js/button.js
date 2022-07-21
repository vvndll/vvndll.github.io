'use strict';

const btn1 = document.querySelector(".btn1");

btn1.addEventListener("click", () => {
    btn1.classList.toggle("active");

    const replace = document.querySelector(".btn2");

    if (replace.style.display) {
        replace.style.display = "none";
    }else {
        replace.style.display = "block";
    }
});