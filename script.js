// =========================
// ТЕМНАЯ ТЕМА
// =========================

const themeButton = document.getElementById("themeButton");

if (themeButton) {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme");
        themeButton.textContent = "☀️";
    }

    themeButton.addEventListener("click", function () {

        document.body.classList.toggle("dark-theme");

        if (document.body.classList.contains("dark-theme")) {

            localStorage.setItem("theme", "dark");
            themeButton.textContent = "☀️";

        } else {

            localStorage.setItem("theme", "light");
            themeButton.textContent = "🌙";

        }

    });

}


// =========================
// МОБИЛЬНОЕ МЕНЮ
// =========================

const menuButton = document.getElementById("menuButton");
const navigation = document.querySelector("nav");

if (menuButton && navigation) {

    menuButton.addEventListener("click", function () {

        navigation.classList.toggle("mobile-open");

    });

}


// =========================
// COOKIE
// =========================

const cookieBanner = document.getElementById("cookieBanner");
const cookieAccept = document.getElementById("cookieAccept");

if (cookieBanner && cookieAccept) {

    const cookiesAccepted =
        localStorage.getItem("cookiesAccepted");

    if (cookiesAccepted === "true") {

        cookieBanner.style.display = "none";

    }

    cookieAccept.addEventListener("click", function () {

        localStorage.setItem("cookiesAccepted", "true");

        cookieBanner.style.display = "none";

    });

}