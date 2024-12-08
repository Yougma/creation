const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Utilise body-parser pour gérer les données JSON envoyées dans le corps de la requête
app.use(bodyParser.json());

// Route pour afficher le formulaire (optionnel si tu veux aussi afficher la page en GET)
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html'); // Serve ton fichier HTML
});

// Route pour recevoir la commande
app.post('/commande', (req, res) => {
    const { nom, adresse } = req.body;

    if (!nom || !adresse) {
        return res.status(400).json({ message: "Nom et adresse sont requis." });
    }

    // Simule l'ajout de la commande (tu pourrais la sauvegarder dans une base de données)
    console.log(`Commande reçue : Nom = ${nom}, Adresse = ${adresse}`);

    // Répond avec un message de succès
    res.status(200).json({ message: `Commande ajoutée avec succès !`, commande: { nom, adresse } });
});

// Démarrer le serveur
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
