import { initScrollReveal } from "./scrollReveal.js";
import { typeWrite } from "./typeWrite.js";
import { menu } from "./menu.js";

try {
    menu();
} catch (e) {
    console.error("Menu error:", e);
}

try {
    //initScrollReveal();
} catch (e) {
    console.error("ScrollReveal error:", e);
}

const typewriterElement = document.querySelector(".typewriter");

if (typewriterElement) {
    try {
        typeWrite(typewriterElement);
    } catch (e) {
        console.error("Typewrite error:", e);
    }
}
