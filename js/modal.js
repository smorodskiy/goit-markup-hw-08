(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    inputName: document.getElementById("input-name"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    
    // refs.inputName.focus();
    // console.log(refs.inputName);
  }

  refs.modal.addEventListener("click", (e) => {
    const event = e.target;
    if (event.classList == "modal") toggleModal();
  });
})();