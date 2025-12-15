window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav");
    if (window.scrollY > 50) {
        nav.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
    } else {
        nav.style.boxShadow = "0 2px 8px rgba(0,0,0,0.08)";
    }
});

// Smooth scroll
document.querySelectorAll("nav a").forEach(a => {
    a.addEventListener("click", e => {
        e.preventDefault();
        const id = a.getAttribute("href");
        document.querySelector(id).scrollIntoView({
            behavior: "smooth"
        });
    });
});
