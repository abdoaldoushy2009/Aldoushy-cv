


// كود JavaScript

// إضافة class active إلى الهيدر عند التمرير
let header = document.querySelector("header");

window.onscroll = function () {
    if (this.scrollY >= 50) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
};

let nav_links = document.getElementById("links");

function Open_colose_Menu() {
    nav_links.classList.toggle("active");
}

// فتح الروابط في علامات تبويب جديدة
document.getElementById("openFacebookProfile").addEventListener("click", function () {
    window.open("https://www.facebook.com/aldoushy.mahdy", "_blank");
});

document.getElementById("openinstagramProfile").addEventListener("click", function () {
    window.open("https://www.instagram.com/aldoushy/", "_blank");
});

// التمرير السلس إلى العناصر
document.getElementById("education-nav").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("education").scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById("Former-nav").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("Former").scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById("some-nav").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("some").scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById("some-nav").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("some").scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById("Contact_nav").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("contact-forms").scrollIntoView({
        behavior: 'smooth'
    });
});



// تهيئة EmailJS
