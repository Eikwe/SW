function loadNavigation() {
  document.getElementById("navigation").innerHTML = `
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
}

document.addEventListener("DOMContentLoaded", loadNavigation);


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
    <link rel="icon" type="image/png" href="Icon.jpg">
    
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
