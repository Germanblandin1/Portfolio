(function () {
  var track = document.querySelector("[data-skills-track]");
  if (!track) return;

  var isDragging = false;
  var startX = 0;
  var startScrollLeft = 0;

  track.addEventListener("mousedown", function (e) {
    e.preventDefault();
    isDragging = true;
    track.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = track.scrollLeft;
  });

  window.addEventListener("mouseup", function () {
    isDragging = false;
    track.classList.remove("dragging");
  });

  window.addEventListener("mousemove", function (e) {
    if (!isDragging) return;
    e.preventDefault();
    var movedBy = e.pageX - startX;
    track.scrollLeft = startScrollLeft - movedBy;
  });

  document.querySelectorAll("[data-scroll]").forEach(function (button) {
    button.addEventListener("click", function () {
      var direction = button.getAttribute("data-scroll") === "left" ? -1 : 1;
      track.scrollBy({ left: direction * 200, behavior: "smooth" });
    });
  });
})();
