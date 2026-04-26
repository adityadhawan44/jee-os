(() => {
  const defaults = {
    brandName: "JEE Execution OS",
    tagline: "A practical score-improvement system for serious JEE aspirants.",
    supportEmail: "hello@example.com",
    supportLabel: "Email for Questions",
    checkoutUrl: "",
    checkoutLabel: "Buy Now",
  };

  const config = { ...defaults, ...(window.JEE_OS_CONFIG || {}) };
  const hasCheckout = typeof config.checkoutUrl === "string" && config.checkoutUrl.trim().length > 0;
  const supportHref = `mailto:${config.supportEmail}`;

  document.title = `${config.brandName} | JEE Rank Accelerator Bundle`;

  const footerBrand = document.getElementById("footer-brand");
  const footerTagline = document.getElementById("footer-tagline");
  const footerContact = document.getElementById("footer-contact");
  const contactLink = document.getElementById("contact-link");
  const checkoutNote = document.getElementById("checkout-note");

  if (footerBrand) footerBrand.textContent = config.brandName;
  if (footerTagline) footerTagline.textContent = config.tagline;

  [footerContact, contactLink].forEach((link) => {
    if (!link) return;
    link.href = supportHref;
    link.textContent = config.supportLabel;
  });

  document.querySelectorAll("[data-checkout-link]").forEach((link) => {
    if (!(link instanceof HTMLAnchorElement)) return;

    if (hasCheckout) {
      link.href = config.checkoutUrl;
      link.target = "_blank";
      link.rel = "noreferrer";
    } else {
      link.href = "#checkout";
    }
  });

  if (checkoutNote) {
    checkoutNote.textContent = hasCheckout
      ? "Checkout is configured. Buyers will be sent directly to your payment page."
      : "Payment link not configured yet. Add your public checkout URL in config.js before launch.";
  }
})();
