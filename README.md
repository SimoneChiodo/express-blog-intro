# Esercizio Server Express per Blog

## Descrizione

Realizzazione di un semplice server HTTP con Express.js che espone due endpoint:

- `/` — pagina Home che risponde con un semplice messaggio testuale ("Server del mio blog").
- `/bacheca` — endpoint JSON che restituisce un oggetto contenente il numero totale di post e la lista completa dei post.

I post sono definiti in un array di oggetti, ognuno con proprietà: titolo, contenuto, immagine, tag.

Il server serve anche contenuti statici dalla cartella `public`, utile per caricare immagini o altri asset.

---

## Funzionalità principali

- Configurazione di Express e ascolto sulla porta 3000.
- Middleware `express.static` per servire risorse statiche.
- Definizione di route GET per la Home e la Bacheca.
- Struttura dati dei post con informazioni testuali e immagini.
- Log in console dei post caricati all’avvio.

---

## Possibile estensione (commentata nel codice)

Funzione per aggiungere dinamicamente oggetti post a un array, duplicando oggetti con spread operator.

---

## Esempio d’uso

- Visita `http://localhost:3000/` per il messaggio di benvenuto.
- Visita `http://localhost:3000/bacheca` per ottenere in JSON i dati dei post.
