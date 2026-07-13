// Toggle de tema claro/oscuro — US6 (Priority: P6). Único JS del sitio.
// Contrato con style.css: atributo data-theme en <html>, valores "light"|"dark",
// persistido en localStorage bajo la clave "theme" (contracts/routes.md).
(function () {
  var STORAGE_KEY = "theme";
  var root = document.documentElement;
  var button = document.querySelector("[data-theme-toggle]");

  if (!button) return;

  function currentTheme() {
    return root.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    button.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
  }

  applyTheme(currentTheme());

  button.addEventListener("click", function () {
    var next = currentTheme() === "dark" ? "light" : "dark";
    applyTheme(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch (e) {
      // localStorage no disponible (modo privado, etc.) — el tema no persiste,
      // pero el toggle sigue funcionando durante la sesión.
    }
  });
})();
