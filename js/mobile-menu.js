(() => {
  // Button handle
  const menuBtnRef = document.querySelector("[data-menu-button]");
  // Menu handle
  const mobileMenuRef = document.querySelector("[data-menu]");

  // Add event on the Button click
  menuBtnRef.addEventListener("click", () => {

    // Check attr aria-expanded and set to const True or False
    const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    
    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
    
  });
})();
