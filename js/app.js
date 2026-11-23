
/* ==============================
   Banner Slider
================================ */

let currentSlide = 0;
const slides = document.querySelectorAll(".slider-img");

function showSlide(index) {

    slides.forEach(function (slide) {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
}

function nextSlide() {

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);
}

if (slides.length > 0) {
    setInterval(nextSlide, 3000);
}


/* ==============================
   Password Show / Hide
================================ */

const eyeBtn = document.querySelector(".eyeBtn");
const passwordInput = document.querySelector("#password");

if (eyeBtn && passwordInput) {

    eyeBtn.addEventListener("click", function () {

        if (passwordInput.type === "password") {

            passwordInput.type = "text";
            eyeBtn.innerHTML = '<i class="bi bi-eye-slash"></i>';

        } else {

            passwordInput.type = "password";
            eyeBtn.innerHTML = '<i class="bi bi-eye"></i>';

        }

    });

}


/* ==============================
   Product Quantity Counter
================================ */

const incrementBtn = document.querySelector("#plusBtn");
const decrementBtn = document.querySelector("#minusBtn");
const quantityInput = document.querySelector("#quantity");

if (incrementBtn && quantityInput) {

    incrementBtn.addEventListener("click", function () {

        quantityInput.value = Number(quantityInput.value) + 1;

    });

}

if (decrementBtn && quantityInput) {

    decrementBtn.addEventListener("click", function () {

        if (Number(quantityInput.value) > 1) {

            quantityInput.value = Number(quantityInput.value) - 1;

        }

    });

}


/* ==============================
   Mouse Trail
================================ */

let trailCount = 10;
let trailDots = [];

for (let i = 0; i < trailCount; i++) {

    let dot = document.createElement("div");

    dot.className = "mouse-trail";

    document.body.appendChild(dot);

    trailDots.push({
        element: dot,
        x: 0,
        y: 0
    });

}

let mouseX = 0;
let mouseY = 0;

document.addEventListener("mousemove", function (e) {

    mouseX = e.clientX;
    mouseY = e.clientY;

});

function animateTrail() {

    let x = mouseX;
    let y = mouseY;

    trailDots.forEach(function (dot) {

        dot.x += (x - dot.x) * 0.35;
        dot.y += (y - dot.y) * 0.35;

        dot.element.style.left = dot.x + "px";
        dot.element.style.top = dot.y + "px";

        x = dot.x;
        y = dot.y;

    });

    requestAnimationFrame(animateTrail);

}

animateTrail();


/* ==============================
   Add To Cart
================================ */

let cartCount = 0;

const cartCountElement = document.querySelector(".cart-count");
const addCartButtons = document.querySelectorAll(".add-cart-btn");

if (cartCountElement) {

    addCartButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            cartCount++;

            cartCountElement.textContent = cartCount;

        });

    });

}


/* ==============================
   Sidebar
================================ */

const sidebarToggle = document.querySelector("#sidebarToggle");
const sidebarClose = document.querySelector("#sidebarClose");
const sidebar = document.querySelector("#sidebar");
const sidebarOverlay = document.querySelector("#sidebarOverlay");

if (sidebarToggle && sidebar && sidebarOverlay) {

    sidebarToggle.addEventListener("click", function () {

        sidebar.classList.add("active");
        sidebarOverlay.classList.add("active");

    });

}

function closeSidebar() {

    if (sidebar && sidebarOverlay) {

        sidebar.classList.remove("active");
        sidebarOverlay.classList.remove("active");

    }

}

if (sidebarClose) {
    sidebarClose.addEventListener("click", closeSidebar);
}

if (sidebarOverlay) {
    sidebarOverlay.addEventListener("click", closeSidebar);
}


/* ==============================
   Register Password Toggle
================================ */

function setupPasswordToggle(buttonId, inputId) {

    const button = document.getElementById(buttonId);
    const input = document.getElementById(inputId);

    if (!button || !input) return;

    button.addEventListener("click", function () {

        const isHidden = input.type === "password";

        input.type = isHidden ? "text" : "password";

        button.innerHTML = isHidden
            ? '<i class="bi bi-eye-slash"></i>'
            : '<i class="bi bi-eye"></i>';

        button.setAttribute(
            "aria-label",
            isHidden ? "Hide password" : "Show password"
        );

    });

}

setupPasswordToggle("togglePassword", "registerPassword");

setupPasswordToggle("toggleConfirmPassword", "confirmPassword");


/* Register Form Validation */

const registerForm = document.querySelector(".register-box form");

if (registerForm) {

    registerForm.addEventListener("submit", function (event) {

        const password = document.getElementById("registerPassword");
        const confirmPassword = document.getElementById("confirmPassword");

        if (!password || !confirmPassword) return;

        if (password.value !== confirmPassword.value) {

            event.preventDefault();

            alert("Passwords do not match!");

        }

    });

}


/* ==============================
   Subscribe Modal
================================ */

const openBtn = document.getElementById("openSubscribeModal");
const modal = document.getElementById("subscribeModal");
const subscribeCloseBtn = document.querySelector(".subscribe-close");
const subscribeForm = document.getElementById("subscribeForm");


if (openBtn && modal) {

    openBtn.addEventListener("click", function (event) {

        event.preventDefault();

        modal.classList.add("active");

    });

}

if (subscribeCloseBtn && modal) {

    subscribeCloseBtn.addEventListener("click", function () {

        modal.classList.remove("active");

    });

}

if (modal) {

    modal.addEventListener("click", function (event) {

        if (event.target === modal) {

            modal.classList.remove("active");

        }

    });

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            modal.classList.remove("active");

        }

    });

}

if (subscribeForm) {

    subscribeForm.addEventListener("submit", function (event) {

        event.preventDefault();

        alert("Thank you for subscribing to Shopneel!");

        subscribeForm.reset();

        if (modal) {
            modal.classList.remove("active");
        }

    });

}


/* ==============================
   Gallery Image Popup
================================ */

const galleryImages = document.querySelectorAll(".popup-img");

const imagePopup = document.getElementById("imagePopup");

const popupImage = document.getElementById("popupImage");

const galleryCloseBtn = document.querySelector(".close-popup");


if (galleryImages.length > 0 && imagePopup && popupImage && galleryCloseBtn) {

    // Open Popup

    galleryImages.forEach(function (img) {

        img.addEventListener("click", function () {

            popupImage.src = this.src;

            imagePopup.style.display = "flex";

            document.body.style.overflow = "hidden";

        });

    });


    // Close Popup Function

    function closeGalleryPopup() {

        imagePopup.style.display = "none";

        popupImage.src = "";

        document.body.style.overflow = "";

    }


    // Close Button

    galleryCloseBtn.addEventListener("click", closeGalleryPopup);


    // Outside Click

    imagePopup.addEventListener("click", function (event) {

        if (event.target === imagePopup) {

            closeGalleryPopup();

        }

    });


    // ESC Key

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            closeGalleryPopup();

        }

    });

}

/* Gallery Popup End */



/* Watch section  start */

const track = document.querySelector('.watch-track');

track.innerHTML += track.innerHTML;


const watchImages = document.querySelectorAll('.watch-item img');

const lightbox = document.getElementById('watchLightbox');
const lightboxImage = document.getElementById('lightboxImage');
const downloadBtn = document.getElementById('watchDownload');

const closeBtn = document.querySelector('.watch-close');
const prevBtn = document.querySelector('.watch-prev');
const nextBtn = document.querySelector('.watch-next');

let currentIndex = 0;

const imageList = [...watchImages].map(img => img.src);

function showWatch(index) {

    currentIndex = (index + imageList.length) % imageList.length;

    lightboxImage.src = imageList[currentIndex];

    downloadBtn.href = imageList[currentIndex];

    downloadBtn.download = `watch-${currentIndex + 1}.avif`;

    lightbox.classList.add('active');
}

// Click image
watchImages.forEach((img, index) => {

    img.addEventListener('click', () => {
        showWatch(index);
    });

});

// Close popup
closeBtn.addEventListener('click', () => {
    lightbox.classList.remove('active');
});

// Previous
prevBtn.addEventListener('click', () => {
    showWatch(currentIndex - 1);
});

// Next
nextBtn.addEventListener('click', () => {
    showWatch(currentIndex + 1);
});

// Click outside image
lightbox.addEventListener('click', (e) => {

    if (e.target === lightbox) {
        lightbox.classList.remove('active');
    }

});

// Keyboard support
document.addEventListener('keydown', (e) => {

    if (!lightbox.classList.contains('active')) return;

    if (e.key === 'Escape') {
        lightbox.classList.remove('active');
    }

    if (e.key === 'ArrowRight') {
        showWatch(currentIndex + 1);
    }

    if (e.key === 'ArrowLeft') {
        showWatch(currentIndex - 1);
    }

});




/* Watch section  End */



