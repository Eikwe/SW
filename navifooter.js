


function loadENavigation() {
  document.getElementById("Enavigation").innerHTML = `
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-GE34BCJEDH"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'G-GE34BCJEDH');
    </script>
    <link href="style.css" rel="stylesheet">
    <link rel="icon" type="image/png" href="Solar-IconD.png">
    
    <div class="titelcontainer">
      <h3> Eikwe-Schweinfurt</h3>
      <nav>
        <ul>
          <li><a href="englisch.html">start</a></li>
          <li><a href="eprojects.html">projects</a>
            <ul>
              <li><a href="eSolarprojekt.html">solar project</a></li> 
              <li><a href="eartproject.html">art project</a></li>  
            </ul>
          </li>
          <li><a href="eaktuell.html">currently</a>
            <ul>
              <li><a href="ekabelsammlung.html">cable collection</a></li>
              <li><a href="ekompakt.html"> information cable </a></li>
              <li><a href="eexhibition.html">exhibition</a></li>
              
            </ul>
          </li>
          <li><a href="ePartnerschaft.html">partnership</a></li> 
          <li><a href="index.html"><img class="englisch" src="deutsch.png"></a></li>
        </ul>
      </nav>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", loadENavigation);




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

document.addEventListener("DOMContentLoaded", loadefooter);



function loadfooter() {
  document.getElementById("footer").innerHTML = `
  <footer> 
  <div> <a href="kontakt.html"> Kontakt </a> <br>
  <a  href="Impressum.html">Impressum</a></div>
  <a href="index.html"> <img src="LogoRathenau.jpg">
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
