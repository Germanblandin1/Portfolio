(function () {
  document.querySelectorAll(".project").forEach(function (card) {
    var dialog = card.querySelector(".project-modal");
    if (!dialog) return;

    // Toda la tarjeta abre el modal, salvo que el click haya sido sobre un
    // link real (Repositorio/Demo) o dentro del modal ya abierto.
    card.addEventListener("click", function (e) {
      if (e.target.closest("a")) return;
      if (e.target.closest("dialog")) return;
      dialog.showModal();
    });

    dialog.querySelectorAll("[data-project-modal-close]").forEach(function (closeButton) {
      closeButton.addEventListener("click", function () {
        dialog.close();
      });
    });

    dialog.addEventListener("click", function (e) {
      if (e.target === dialog) {
        dialog.close();
      }
    });
  });
})();
