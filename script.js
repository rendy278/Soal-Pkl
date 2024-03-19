// button next & prev logic
document.addEventListener("DOMContentLoaded", function () {
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  const productsContainer = document.querySelector(".list-product");
  const products = document.querySelectorAll(".products");
  let currentIndex = 0;

  function showProducts() {
    products.forEach((product, index) => {
      if (index >= currentIndex && index < currentIndex + 3) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  }

  showProducts();

  prevButton.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex -= 3;
      showProducts();
    }
  });

  nextButton.addEventListener("click", function () {
    if (currentIndex + 3 < products.length) {
      currentIndex += 3;
      showProducts();
    }
  });
});

// count up cart logic
document.addEventListener("DOMContentLoaded", function () {
  const addToCartButtons = document.querySelectorAll(".btn-to-cart");
  const cartButton = document.querySelector(".cart");

  let cartItemCount = 0;

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function () {
      cartItemCount++;
      updateCartButtonText();
      // Tambahkan alert di sini
      alert("Item added to cart!");
    });
  });

  function updateCartButtonText() {
    cartButton.textContent = `Cart ( ${cartItemCount} )`;
  }
});
// footer years logic
document.addEventListener("DOMContentLoaded", function () {
  const currentYear = new Date().getFullYear();
  const currentYearSpan = document.getElementById("currentYear");
  currentYearSpan.textContent = currentYear;
});
