const express = require("express");
const app = express();
const port = 3000;

// Dichiarazione oggetto Post
let post = {
    titolo: "",
    contenuto: "",
    immagine: "",
    tag: [],
};

// Pagina: Home
app.get("/", (req, res) => {
    res.type("html").send("Server del mio blog");
});

// Pagina: Bacheca
app.get("/bacheca", (req, res) => {
    res.type("json").send({
        totalePost: posts.length,
        listaPost: posts,
    });
});

app.listen(port, () => {
    console.log(`App Express listening on port ${port}`);
});

// Array di post
let posts = [];
for (let i = 0; i < 5; i++) {
    addObjectToArray(posts, post);
}

console.log(posts);

/**
 * Funzione che aggiunge un oggetto a un array un oggetti.
 *
 * @param {Array} array array a cui aggiugere l'oggetto
 * @param {Object} object oggetto da aggiungere
 */
function addObjectToArray(array, object) {
    array.push({ ...object });
}
