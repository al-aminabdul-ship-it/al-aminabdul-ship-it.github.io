const menuToggle = document.querySelector(".menu-toggle");
const siteMenu = document.querySelector("#site-menu");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = lightbox.querySelector("img");
const lightboxCaption = lightbox.querySelector("p");

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  siteMenu.classList.toggle("is-open", !isOpen);
});

siteMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.setAttribute("aria-expanded", "false");
    siteMenu.classList.remove("is-open");
  });
});

document.querySelectorAll("[data-lightbox]").forEach((button) => {
  button.addEventListener("click", () => {
    lightboxImage.src = button.dataset.lightbox;
    lightboxImage.alt = button.querySelector("img").alt;
    lightboxCaption.textContent = button.dataset.caption;
    lightbox.showModal();
  });
});

lightbox.querySelector(".lightbox-close").addEventListener("click", () => lightbox.close());
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) lightbox.close();
});

const checkoutPreview = document.querySelector(".checkout-preview");
if (checkoutPreview) {
  const cart = [];
  const cartView = checkoutPreview.querySelector(".checkout-cart");
  const products = checkoutPreview.querySelector(".checkout-products");
  const count = checkoutPreview.querySelector(".cart-count");
  const items = checkoutPreview.querySelector(".checkout-items");
  const total = checkoutPreview.querySelector(".checkout-total");
  const message = checkoutPreview.querySelector(".demo-message");
  const renderCart = () => {
    count.textContent = cart.length;
    items.textContent = cart.length ? cart.map((item) => item.name).join(", ") : "Your cart is empty.";
    total.textContent = `Total: $${cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}`;
  };
  checkoutPreview.querySelectorAll(".checkout-product").forEach((button) => {
    button.addEventListener("click", () => {
      cart.push({ name: button.dataset.product, price: Number(button.dataset.price) });
      renderCart();
      message.textContent = `${button.dataset.product} added!`;
    });
  });
  checkoutPreview.querySelector(".checkout-toggle").addEventListener("click", () => {
    const showingCart = !cartView.hidden;
    cartView.hidden = showingCart;
    products.hidden = !showingCart;
    message.textContent = "";
  });
  checkoutPreview.querySelector(".cancel-action").addEventListener("click", () => {
    cart.length = 0;
    renderCart();
    message.textContent = "Cart cleared.";
  });
  checkoutPreview.querySelector(".checkout-action").addEventListener("click", () => {
    message.textContent = cart.length ? "Checkout successful!" : "Add an item first.";
  });
}

const musicPreview = document.querySelector(".music-preview");
if (musicPreview) {
  const heading = musicPreview.querySelector(".music-heading");
  const songs = musicPreview.querySelector(".music-song-list");
  const tabSongs = {
    Home: ["Iris", "Slide", "Black Balloon"],
    Explore: ["Broadway", "Dizzy"],
    Library: ["Iris", "Slide", "Black Balloon", "Broadway", "Dizzy"]
  };
  musicPreview.querySelectorAll(".music-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      const name = tab.dataset.tab;
      heading.textContent = name === "Home" ? "Featured Songs" : `${name} Songs`;
      songs.textContent = tabSongs[name].join(" · ");
      musicPreview.querySelectorAll(".music-tab").forEach((item) => item.classList.toggle("is-active", item === tab));
    });
  });
}

const calculatorPreview = document.querySelector(".calculator-preview");
if (calculatorPreview) {
  const display = calculatorPreview.querySelector(".calculator-display");
  let value = "";
  let stored = null;
  let operator = null;
  calculatorPreview.querySelectorAll("[data-calc]").forEach((button) => {
    button.addEventListener("click", () => {
      const key = button.dataset.calc;
      if (key === "C") {
        value = "";
        stored = null;
        operator = null;
      } else if (key === "=" && operator && stored !== null) {
        const current = Number(value);
        if (operator === "+") stored += current;
        if (operator === "-") stored -= current;
        if (operator === "*") stored *= current;
        if (operator === "/") stored = current === 0 ? "Error" : stored / current;
        value = String(stored);
        operator = null;
      } else if (["+", "-", "*", "/"].includes(key)) {
        stored = Number(value || 0);
        operator = key;
        value = "";
      } else {
        value += key;
      }
      display.textContent = value || "0";
    });
  });
}

const updateGreeting = () => {
  const now = new Date();
  document.querySelector(".live-time").textContent = `Time: ${now.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })}`;
  document.querySelector(".live-date").textContent = `Date: ${now.toLocaleDateString()}`;
};
updateGreeting();
setInterval(updateGreeting, 1000);
