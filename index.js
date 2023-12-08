//toggle
const menuBtn = document.getElementById("menu-btn");
const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
});



//ปุ่ม top
const scrollUpButton = document.getElementById("scroll-up-btn");
function checkScroll() {
    if (window.scrollY > 100) {
        scrollUpButton.classList.remove("hide");
    } else {
        scrollUpButton.classList.add("hide");
    }
}

checkScroll();
window.addEventListener("scroll", checkScroll);
scrollUpButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});




//เมนู active
const menuButtons = document.querySelectorAll(".menu-btn");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.clientHeight;
        if (pageYOffset >= sectionTop && pageYOffset <= sectionBottom) {
            menuButtons.forEach((button) => {
                button.classList.remove("active");
            });
            const correspondingButton = document.querySelector(`.menu-btn[href="#${section.id}"]`);
            correspondingButton.classList.add("active");
        }
    });
});
