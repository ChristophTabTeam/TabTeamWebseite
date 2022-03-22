# Informationen zur TabTeam Webseite

dies ist das Repository von der TabTeam Webseite

## Start des Development Prozesses

um auf eine funktionierende development Webseite zu kommen führe im Haupt-Directory den Befehlt

### `npm run build`

aus. Hierbei wird von dem React-Front-End eine productionready Version erstellt und alle für das Front-End benötigten npm packages installiert.
Sobald das erledigt ist führe zunächst den Befehlt

### `npm install`

aus um die benötigten npm packages für den Server zu installieren. Wenn das erledigt ist, führe den Befehl

### `npm run server`

aus. Hier wird der Development Server unter http://localhost:3001 gestartet und man kann das Backend der Webseite bearbeiten.
Die Information aus der `config.js` Datei findest du in der E-Mail. Du musst die Datei selber im Haupt-Directory anlegen.

## Änderungen am Front-End

solltest du am Front-End Änderungen vornehmen wollen, musst du diese im "src" Ordner im "client" Directory und in den `index.js` Dateien machen. Wenn du die Änderungen auf der Webseite unter localhost sehen willst musst du den bereits erstellten "build" Ordner löschen und im Terminal 

### `cd client` 

und anschließend den Befehl 

### `npm run build`

ausführen.
Beachte, wenn du den build-Befehl im "client" Directory ausführst dass dann nur die Build Version erstellt wird und die npm packages nicht mitinstalliert werden. 
Wenn du die npm packages aus dem "client" Directory installieren möchstes, musst du dort 

### `npm install`

ausführen oder du gehst ein paar Schritte zurück zum Punkt "Start des Development Prozesses"