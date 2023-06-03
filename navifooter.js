function loadNavigation() {
  // Navigations-HTML-Code
  const navigationHTML = `
  
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-GE34BCJEDH"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-GE34BCJEDH');
</script>
    <link href="style.css" rel="stylesheet">
    <link rel="icon" type="image/png" href="Icon.jpg">

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
          <li><a href="Partnerschaft.html"> Partnerschaft </a></li> 
          <li><a href="englisch.html"> <img class="englisch" src="englisch.png"></a></li>
        </ul>
      </nav>
    </div>
  `;

  // Element mit der ID "navigation" in der index.html suchen
  const navigationContainer = document.getElementById("navigation");

  // Navigations-HTML-Code in das Element einfügen
  navigationContainer.innerHTML = navigationHTML;

  // Aktuellen Seitenpfad ermitteln
  const currentPagePath = window.location.pathname;}


// Funktion aufrufen, um die Navigationsleiste zu laden, wenn das DOM geladen ist
document.addEventListener("DOMContentLoaded", loadNavigation);



function loadENavigation() {
  // Navigations-HTML-Code
  const EnavigationHTML = `
    
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-GE34BCJEDH"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-GE34BCJEDH');
</script>
<link href="style.css" rel="stylesheet">
<link rel="icon" type="image/png" href="Icon.jpg">
  <div class="titelcontainer"  > 
  <h3> Eikwe-Schweinfurt</h3> 
  <nav>
     <ul>
     <li><a href="englisch.html"> start </a></li>
     <li><a href="eprojects.html"> projects </a>
             <ul> <li><a href="eSolarprojekt.html"> solar project </a></li> 
               <li><a href="eartproject.html"> art project </a></li>  
             </ul>
           </li>
           <li><a href="eaktuell.html"> currently </a>
             <ul> <li><a href="ekabelsammlung.html"> cable collection </a></li>
                  <li><a href="eexhibition.html"> exhibition </a></li>
           </ul></li>
         <li><a href="ePartnerschaft.html"> partnership </a></li> 
          <li><a href="index.html"> <img class="englisch" src="deutsch.png" ></a></li>
         
     </ul>

  </nav></div>
  `;

  // Element mit der ID "navigation" in der index.html suchen
  const EnavigationContainer = document.getElementById("Enavigation");

  // Navigations-HTML-Code in das Element einfügen
  EnavigationContainer.innerHTML = EnavigationHTML;
}

// Funktion aufrufen, um die Navigationsleiste zu laden, wenn das DOM geladen ist
document.addEventListener("DOMContentLoaded", loadENavigation);
