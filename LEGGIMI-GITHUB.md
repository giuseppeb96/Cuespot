# CueSpot su GitHub (gratis, sempre acceso)

GitHub Pages pubblica l'app gratis e non va mai in sleep. Però GitHub può mostrare solo pagine, non far girare un server: per account condivisi, chat, candidature e locandine AI serve anche il server (guida `LEGGIMI.md`, punto 3, Oracle). Senza server l'app funziona in **modalità demo**: ognuno vede solo i propri dati e i locali di esempio, senza AI.

## 1. Pubblicare l'app
1. Crea l'account su github.com.
2. In alto a destra **+ → New repository**. Nome: `cuespot`. Tienilo **Public** (Pages gratis lo richiede). **Create repository**.
3. Sul tuo PC estrai lo zip `cuespot-github.zip`. Nella pagina del repository clicca **uploading an existing file**, trascina TUTTI i file estratti (index.html, config.js, manifest.json, sw.js e le tre icone) e premi **Commit changes**.
4. **Settings → Pages**: *Source* = **Deploy from a branch**, *Branch* = `main` e cartella `/ (root)` → **Save**.
5. Dopo 1-2 minuti l'app è su `https://IL-TUO-NOME.github.io/cuespot/`. Quello è il link.

## 2. Collegare il server (account, chat, AI)
1. Metti online il server come nel `LEGGIMI.md` (Oracle + DuckDNS): ti darà un indirizzo tipo `https://cuespot.duckdns.org`.
2. Su GitHub apri `config.js`, clicca la matita e scrivi: `window.CS_API='https://cuespot.duckdns.org';`
3. **Commit changes**: dopo un minuto l'app su GitHub parla con il tuo server.

## 3. Attenzione
- Il repository è pubblico: non scrivere MAI chiavi (Anthropic, OpenAI, Pexels) in nessun file di GitHub. Le chiavi vanno solo sul server (`/etc/cuespot.env`).
- Per aggiornare l'app: su GitHub apri `index.html`, matita (o *Add file → Upload files* per sostituirlo) e Commit.
- Su iPhone: apri il link in Safari → Condividi → Aggiungi alla schermata Home.
