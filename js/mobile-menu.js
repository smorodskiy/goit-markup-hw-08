(() => {
  // Open menu handle
  const menuOpenBtnRef = document.querySelector("[data-menu-open]");
  // Close menu handle
  const menuCloseBtnRef = document.querySelector("[data-menu-close]");
  // Menu handle
  const mobileMenuRef = document.querySelector("[data-menu]");

  const toggleFunc = () => {

    // Check attr aria-expanded and set to const True or False
    const expanded = mobileMenuRef.getAttribute("aria-expanded") === "true" || false;
    console.log(expanded);

    mobileMenuRef.classList.toggle("is-open");
    mobileMenuRef.setAttribute("aria-expanded", !expanded);

    const scrollLock = !expanded
    ? 'hidden'
    : '';
    document.body.style.overflow = scrollLock;
  }

  // Add event on the Buttons click
  menuOpenBtnRef.addEventListener("click", toggleFunc);
  menuCloseBtnRef.addEventListener("click", toggleFunc);
  
})();
