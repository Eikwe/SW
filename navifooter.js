function loadNavigation() {
  // Navigations-HTML-Code
  var navigationHTML = `
    <div class="titelcontainer"> 
      <h3> Eikwe-Schweinfurt</h3>
      <nav>
        <ul>
          <li><a href="index.html"> Start </a></li>
          <li><a href="projekte.html"> Projekte </a>
            <ul>
              <li><a href="Solarprojekt.html"> Solarprojekt </a></li> 
              <li><a href="kunstprojekt.html"> Kunstprojekt </a></li>
            </ul>
          </li> 
          <li><a href="aktuelles.html"> Aktuelles </a>
            <ul>
              <li><a href="kabelsammlung.html"> Kabelsammlung </a></li>
              <li><a href="kunstausstellung.html"> Kunstausstellung </a></li>
              <li><a href="kompakt.html"> Infos kompakt</a></li>
            </ul>
          </li>
          <li><a href="Partnerschaft.html"> Über uns </a></li> 
          <li><a href="englisch.html"> <img class="englisch" src="englisch.png"></a></li>
        </ul>
      </nav>
    </div>
  `;

  // Element mit der ID "navigation" in der index.html suchen
  var navigationContainer = document.getElementById("navigation");

  // Navigations-HTML-Code in das Element einfügen
  navigationContainer.innerHTML = navigationHTML;
}

// Funktion aufrufen, um die Navigationsleiste zu laden, wenn das DOM geladen ist
document.addEventListener("DOMContentLoaded", loadNavigation);


