document.addEventListener("DOMContentLoaded", function() {
  const ouvrirModalButtons = document.querySelectorAll(".ouvrir-modal");
  const fermerModalButtons = document.querySelectorAll(".fermer-modal");
  const modals = document.querySelectorAll(".modal");

  ouvrirModalButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      const modalId = button.getAttribute("data-modal-target");
      const modal = document.getElementById(modalId);
      modal.style.display = "flex";
    });
  });

  fermerModalButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      const modal = button.closest(".modal");
      modal.style.display = "none";
    });
  });

  modals.forEach(function(modal) {
    modal.addEventListener("click", function(event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });
});
