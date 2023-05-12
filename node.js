const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/dein-server-endpunkt', (req, res) => {
  // Daten vom Formular abrufen
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  
  // Hier kannst du die erhaltenen Daten weiterverarbeiten, z.B. per E-Mail senden oder in einer Datenbank speichern
  
  // Beispiel: Einfache Konsolenausgabe der Daten
  console.log('Name:', name);
  console.log('E-Mail:', email);
  console.log('Nachricht:', message);
  
  res.sendStatus(200); // Erfolgsstatus senden
});

app.listen(3000, () => {
  console.log('Server läuft auf Port 3000');
});
