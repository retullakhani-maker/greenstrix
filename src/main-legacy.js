document.addEventListener("DOMContentLoaded", function () {
  // Scroll Top Button Logic
  const scrollTopBtn = document.querySelector(".scroll-top-btn");
  if (scrollTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        scrollTopBtn.classList.add("visible");
      } else {
        scrollTopBtn.classList.remove("visible");
      }
    });

    scrollTopBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  // Product Slider Thumbnails Sync
  const carousels = document.querySelectorAll(".carousel");
  carousels.forEach((carousel) => {
    carousel.addEventListener("slide.bs.carousel", function (e) {
      const thumbNav = this.querySelector(".product-thumb-nav");
      if (thumbNav) {
        const thumbs = thumbNav.querySelectorAll(".thumb-item");
        thumbs.forEach((t) => t.classList.remove("active"));
        if (thumbs[e.to]) {
          thumbs[e.to].classList.add("active");
        }
      }
    });
  });

  // --- Flipkart-style Image Zoom Logic ---

  function imageZoom() {
    const showcaseCards = document.querySelectorAll(".product-showcase-card");
    const lightboxModalEl = document.getElementById("productLightboxModal");
    let lightboxModal;

    if (lightboxModalEl && typeof bootstrap !== "undefined") {
      lightboxModal = new bootstrap.Modal(lightboxModalEl);
    }
    const lightboxImage = document.getElementById("lightboxImage");

    showcaseCards.forEach((card) => {
      const zoomTrigger = card.querySelector(".carousel-inner");
      if (!zoomTrigger) return;

      // Create lens inside the trigger area
      let lens = zoomTrigger.querySelector(".img-zoom-lens");
      if (!lens) {
        lens = document.createElement("div");
        lens.className = "img-zoom-lens";
        zoomTrigger.appendChild(lens);
      }

      let result = card.querySelector(".img-zoom-result");
      if (!result) {
        result = document.createElement("div");
        result.className = "img-zoom-result";
        card.appendChild(result);
      }

      zoomTrigger.addEventListener("mouseenter", function () {
        if (window.innerWidth < 992) return;

        const activeItem = zoomTrigger.querySelector(
          ".carousel-item.active img",
        );
        if (!activeItem) return;

        lens.style.display = "block";
        result.style.display = "block";
        result.style.backgroundImage = `url("${activeItem.src}")`;

        // Pause carousel
        const carouselEl = zoomTrigger.closest(".carousel");
        if (carouselEl && typeof bootstrap !== "undefined") {
          const carouselInstance = bootstrap.Carousel.getInstance(carouselEl);
          if (carouselInstance) carouselInstance.pause();
        }
      });

      zoomTrigger.addEventListener("mouseleave", function () {
        lens.style.display = "none";
        result.style.display = "none";

        // Resume carousel
        const carouselEl = zoomTrigger.closest(".carousel");
        if (carouselEl && typeof bootstrap !== "undefined") {
          const carouselInstance = bootstrap.Carousel.getInstance(carouselEl);
          if (carouselInstance) carouselInstance.cycle();
        }
      });

      zoomTrigger.addEventListener("mousemove", function (e) {
        if (window.innerWidth < 992 || lens.style.display === "none") return;

        const activeItem = zoomTrigger.querySelector(
          ".carousel-item.active img",
        );
        if (!activeItem) return;

        const { left, top, width, height } =
          zoomTrigger.getBoundingClientRect();

        let x = e.clientX - left;
        let y = e.clientY - top;

        if (x > width - lens.offsetWidth / 2) {
          x = width - lens.offsetWidth / 2;
        }
        if (x < lens.offsetWidth / 2) {
          x = lens.offsetWidth / 2;
        }
        if (y > height - lens.offsetHeight / 2) {
          y = height - lens.offsetHeight / 2;
        }
        if (y < lens.offsetHeight / 2) {
          y = lens.offsetHeight / 2;
        }

        lens.style.left = x - lens.offsetWidth / 2 + "px";
        lens.style.top = y - lens.offsetHeight / 2 + "px";

        const cx = result.offsetWidth / lens.offsetWidth;
        const cy = result.offsetHeight / lens.offsetHeight;

        result.style.backgroundSize = width * cx + "px " + height * cy + "px";
        result.style.backgroundPosition =
          "-" +
          (x - lens.offsetWidth / 2) * cx +
          "px -" +
          (y - lens.offsetHeight / 2) * cy +
          "px";
      });

      // Lightbox on click
      zoomTrigger.addEventListener("click", function (e) {
        const activeItem = zoomTrigger.querySelector(
          ".carousel-item.active img",
        );
        if (activeItem && lightboxModal && lightboxImage) {
          lightboxImage.src = activeItem.src;
          lightboxModal.show();
        }
      });
    });
  }

  imageZoom();

  // --- Tooltip Initialization ---
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]'),
  );
  tooltipTriggerList.forEach(function (tooltipTriggerEl) {
    if (typeof bootstrap !== "undefined") {
      new bootstrap.Tooltip(tooltipTriggerEl);
    }
  });

  // Close Mobile Navbar on Nav Link / Dropdown Item / GET A QUOTE click
  const menuToggle = document.getElementById("navbarCollapse");
  if (menuToggle) {
    const closeTargets = menuToggle.querySelectorAll(
      ".nav-link:not(.dropdown-toggle), .dropdown-item, .btn-brand",
    );
    closeTargets.forEach((el) => {
      el.addEventListener("click", () => {
        if (window.innerWidth < 992 && menuToggle.classList.contains("show")) {
          const bsCollapse = new bootstrap.Collapse(menuToggle);
          bsCollapse.hide();
        }
      });
    });
  }
});

/**
 * Force file download for PDF documents
 * @param {Event} e - Click event
 * @param {string} url - URL of the file to download
 */
function forceDownload(e, url) {
  e.preventDefault();
  const a = document.createElement("a");
  a.href = url;
  a.download = url.split("/").pop();
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
