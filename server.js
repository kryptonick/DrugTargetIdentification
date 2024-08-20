const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));

app.post('/api/centrality', (req, res) => {
    const { interactions } = req.body;
    const drugCentrality = {};
    const proteinCentrality = {};

    // Calculate degree centrality
    interactions.forEach(({ drug, proteins }) => {
        drugCentrality[drug] = (drugCentrality[drug] || 0) + proteins.length;
        proteins.forEach(protein => {
            proteinCentrality[protein] = (proteinCentrality[protein] || 0) + 1;
        });
    });
    let sortedProteins = Object.entries(proteinCentrality)
        .sort((a, b) => b[1] - a[1])
        .reduce((acc, [protein, cnt]) => {
            acc[protein] = cnt;
            return acc;
        }, {});
    res.json({ drugCentrality, sortedProteins });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
