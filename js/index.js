(function () {
  const state = { scanlines: false, link: null };
  document.addEventListener("DOMContentLoaded", initialize);

  function initialize() {
    state.link = document.getElementById("scanlines-toggle");
    state.link.onclick = onclick;
    update();
  }

  function onclick(event) {
    state.scanlines = !state.scanlines;
    update();
    event.preventDefault();
  }

  function update() {
    state.link.innerHTML = state.scanlines ? "oui" : "non";
    if (state.scanlines) {
      document.body.classList.add("with-scanlines");
    } else {
      document.body.classList.remove("with-scanlines");
    }
  }
})();
