




function loadefooter() {
  document.getElementById("efooter").innerHTML = `
    <footer> 
      <div>
        <a href="econtact.html">contact</a> <br>
        <a href="eimprint.html">imprint</a>
      </div>
      <a href="englisch.html"><img src="LogoRathenau.jpg"></a>
    </footer>
  `;
}






document.addEventListener("DOMContentLoaded", loadfooter);

function loadfenster() {
  document.getElementById("fenster").innerHTML = `
    <div id="popup" class="popup">
      <div class="popup-content">
        <span class="close">&times;</span>
        <h3>Sie haben Fragen zu unseren Projekten?</h3>
        Gerne können Sie uns, das P-Seminar, über das Kontaktformular erreichen. <br> <br>
        <div class="container">
          <button class="button-eckig"><a href="kontakt.html">Zum Kontaktformular</a></button>
          <button class="button-eckig"><span class="close-button">Nicht jetzt</span></button>
        </div>
      </div>
    </div>
  `;
}

// Popup-Fenster nach 30 Sekunden anzeigen
setTimeout(function() {
  document.getElementById("popup").classList.add("show");
}, 30000); // 30 Sekunden in Millisekunden: 30 * 1000

// Popup-Fenster laden, wenn das DOM vollständig geladen ist
document.addEventListener("DOMContentLoaded", function() {
  loadfenster();

  document.querySelector(".close").addEventListener("click", function() {
    document.getElementById("popup").style.display = "none";
    localStorage.setItem("popupClosed", "true"); // Popup wurde geschlossen
  });

  document.querySelector(".close-button").addEventListener("click", function() {
    document.getElementById("popup").style.display = "none";
    localStorage.setItem("popupClosed", "true"); // Popup wurde geschlossen
  });
});
