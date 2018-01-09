(function() {
  var etat = { scanlines: false, lien: null };
  document.addEventListener("DOMContentLoaded", initialise);

  function initialise() {
    etat.lien = document.getElementById("scanlines-toggle");
    etat.lien.onclick = auClic;
    metsAJourLesScanlines();
  }

  function auClic(evenement) {
    etat.scanlines = !etat.scanlines;
    metsAJourLesScanlines();
    evenement.preventDefault();
  }

  function metsAJourLesScanlines() {
    etat.lien.innerHTML = etat.scanlines ? "on" : "off";
    if (etat.scanlines) {
      document.body.classList.add("scanlines");
    } else {
      document.body.classList.remove("scanlines");
    }
  }
})();
