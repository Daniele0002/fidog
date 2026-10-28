# 🐾 Fidog — Piattaforma di adozione cani

Progetto scolastico sviluppato in **PHP + MySQL** per la gestione e la ricerca di cani da adottare tramite canili convenzionati sul territorio italiano.

## Struttura del progetto

```
/admin/      → Dashboard di amministrazione (accesso riservato)
/public/     → Sito pubblico con ricerca cani
```

## Funzionalità

**Admin**
- Login con autenticazione a database
- Gestione cani (inserimento, modifica, eliminazione)
- Gestione canili con riferimento geografico (regione / provincia)
- Gestione razze, categorie attributi e valori
- Gestione utenti

**Pubblico**
- Ricerca cani per razza, regione e attributi
- Scheda dettaglio singolo cane

## Tecnologie

- PHP 8
- MySQL / phpMyAdmin
- Bootstrap 5 (Hope UI template)
- HTML, CSS, JavaScript

## Database

Lo schema include le tabelle: `user`, `cane`, `canile`, `razza`, `attributo`, `appartenenza`, `cane_attributo`, `user_attributo`, `user_razza`, `region`, `state`, `city`, `country`.

Importare il file `pawmatch.sql` da phpMyAdmin prima di avviare il progetto.

## Avvio locale

1. Copia la cartella in `htdocs` (XAMPP) o `www` (WAMP)
2. Importa `pawmatch.sql` in phpMyAdmin
3. Configura le credenziali DB in `inc/config.php`
4. Apri `http://localhost/fidog/admin/` per la dashboard