// --- 1. SCRIPT DE NOTIFICACIÓN (TOAST) ---
function showToast() {
    var x = document.getElementById("toast");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
}
var comingSoonBtns = document.querySelectorAll(".coming-soon");
comingSoonBtns.forEach(btn => {
    btn.addEventListener("click", function(e) {
        e.preventDefault();
        showToast();
    });
});

// --- 2. SCRIPT DE MODALES (VENTANAS) ---

// MODAL 1: PANTALLAS
var modal1 = document.getElementById("catalogModal");
var btn1 = document.getElementById("openCatalogBtn");
var span1 = document.getElementsByClassName("close-screen")[0];

if (btn1) btn1.onclick = function() { modal1.style.display = "block"; }
if (span1) span1.onclick = function() { modal1.style.display = "none"; }

// MODAL 2: SERVICIOS / REPARACIONES
var modal2 = document.getElementById("servicesModal");
var btn2 = document.getElementById("openServicesBtn");
var span2 = document.getElementsByClassName("close-service")[0];

if (btn2) btn2.onclick = function() { modal2.style.display = "block"; }
if (span2) span2.onclick = function() { modal2.style.display = "none"; }

// CERRAR SI CLICKEA AFUERA
window.onclick = function(event) {
    if (event.target == modal1) { modal1.style.display = "none"; }
    if (event.target == modal2) { modal2.style.display = "none"; }
}

// --- 3. SCRIPT ACORDEON (FUNCIONA PARA AMBOS MODALES) ---
var acc = document.getElementsByClassName("accordion-btn");
for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) panel.style.maxHeight = null;
        else panel.style.maxHeight = panel.scrollHeight + "px";
    });
}

// --- 4. SCRIPT SCROLL AUTOMÁTICO ---
function autoScroll(id) {
    const container = document.getElementById(id);
    if (!container) return; // Evitar errores si no existe el contenedor
    
    let step = 1;
    function scrollStep() {
        container.scrollLeft += step;
        if (container.scrollLeft >= (container.scrollWidth - container.clientWidth)) container.scrollLeft = 0;
    }
    let interval = setInterval(scrollStep, 35);
    container.addEventListener('mouseover', () => clearInterval(interval));
    container.addEventListener('touchstart', () => clearInterval(interval));
    container.addEventListener('mouseout', () => interval = setInterval(scrollStep, 35));
    container.addEventListener('touchend', () => interval = setInterval(scrollStep, 35));
}
autoScroll('scroll1');
autoScroll('scroll2');
