document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.querySelector(".nav-menu");

    if (hamburger) {
        hamburger.addEventListener("click", function () {
            navMenu.classList.toggle("active");
        });
    }

    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            navMenu.classList.remove("active");
        });
    });

    const contactSelect = document.getElementById("contact-method");
    if (contactSelect) {
        contactSelect.addEventListener("change", function () {
            const value = this.value;
            if (value) {
                const methods = {
                    qq: "QQ: 89580036",
                    email: "邮箱: 89580036@qq.com",
                };
                alert("联系方式：" + methods[value]);
                this.value = "";
            }
        });
    }

    const navbar = document.querySelector(".navbar");
    let lastScroll = 0;
    window.addEventListener("scroll", function () {
        const currentScroll = window.pageYOffset;
        if (currentScroll > 100) {
            navbar.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.1)";
        } else {
            navbar.style.boxShadow = "0 2px 12px rgba(0, 0, 0, 0.08)";
        }
        lastScroll = currentScroll;
    });
});