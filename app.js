document.getElementById('commandeForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const nom = document.getElementById("nom").value;
    const adresse = document.getElementById("adresse").value;
    const commande = {nom, adresse};

    try{
        const response = await fetch('http://localhost:3000/commande', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(commande)
        });
        const data = await response.json();
        alert(`Commande enregistrée: ${data.message}`);
    }catch(err){
        console.error('Erreur:', err);
    }
})