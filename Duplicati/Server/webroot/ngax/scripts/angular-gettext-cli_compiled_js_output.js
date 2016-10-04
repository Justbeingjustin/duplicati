angular.module('backupApp').run(['gettextCatalog', function (gettextCatalog) {
/* jshint -W100 */
    gettextCatalog.setStrings('da', {"- pick an option -":"- vælg en indstilling -","About":"Danish TEST - About","About {{appname}}":"Danish TEST - About {{appname}}","Access to user interface":"Adgang til brugerinterface"});
    gettextCatalog.setStrings('de', {"- pick an option -":"- Option auswählen -","About":"Über","About {{appname}}":"Über {{appname}}","Access Key":"Zugriffsschlüssel","Access to user interface":"Zugriff auf die Bedienoberfläche","Account name":"Account-Name","Activate":"Aktivieren","Activate failed:":"Aktivierung fehlgeschlagen:","Add advanced option":"Option für Profis hinzufügen","Add filter":"Filter hinzufügen","Add new backup":"Neues Backup hinzufügen","Adjust bucket name?":"Bucket-Name anpassen?","Adjust path name?":"Pfad anpassen?","Advanced Options":"Optionen für Profis","Advanced options":"Einstellungen für Profis","Advanced:":"Fortgeschritten:","All usage reports are sent anonymously and do not contain any personal information. They contain information about hardware and operating system, the type of backend, backup duration, overall size of source data and similar data. They do not contain paths, filenames, usernames, passwords or similar sensitive information.":"Alle Nutzungsberichte werden anonym verschickt und enthalten keine personenbezogenen oder personenbeziehbaren Daten. Sie enthalten Daten über Hardware, Betriebssystem, das verwendete Backend, die Backupdauer, die Gesamtgröße des BAckups und ähnliuche Daten. Sie enthalten NICHT Pfade, Dateinamen, benutzernamen, Passwörter oder andere sensible Informationen.","Allow remote access (requires restart)":"Fernzugriff erlauben (Neustart notwendig)","Allowed days":"Erlaubte Tage","An existing file was found at the new location":"An dem angegebenen Ort wurde eine bereits vorhandene Datenbank gefunden.","An existing file was found at the new location\nAre you sure you want the database to point to an existing file?":"Eine vorhandene Datenbank wurde gefunden.\nSoll diese Datenbank von nun an verwendet werden?","An existing local database for the storage has been found.\nRe-using the database will allow the command-line and server instances to work on the same remote storage.\n\n Do you wish to use the existing database?":"Eine lokale Datenbank für den Onlinespeicher wurde gefunden.\nMit dieser Datenbank können die GUI und die Kommandozeile auf dem gleichen Onlinespeicher arbeiten.\n\nSoll die lokale Datenbank genutzt werden?","Anonymous usage reports":"Anonyme Nutzungsberichte","As Command-line":"als Befehl für Kommandozeile","Autogenerated passphrase":"Generiertes Passwort","Automatically run backups.":"Backups automatisch ausführen.","Back":"Zurück","Backend modules:":"Backend-Module:","Backups are currently paused,":"Backup sind momentan pausiert,","Browse":"Anzeigen","Bucket Name":"Bucket-Name","Bucket name":"Bucket-Name","Building list of files to restore ...":"Dateiliste erstellen...","Building partial temporary database ...":"Temporäre Datenbank wird erstellt...","Cancel":"Abbrechen","Changelog":"Änderungen","Check failed:":"Prüfung fehlgeschlagen:","Check for updates now":"Aktualisierung suchen","Checking for updates ...":"Suche Aktualisierung...","Compact now":"Backup komprimieren","Compacting remote data ...":"Backupdaten verkleinern...","Completing backup ...":"Backup fertigstellen...","Completing previous backup ...":"Vorheriges BAckup fertigstellen...","Compression modules:":"Kompression:","Configuration file:":"Konfigurationsdatei:","Configuration:":"Konfiguration:","Confirm delete":"Löschen bestätigen","Confirmation required":"Bestätigung erfolderlich","Connect":"Verbinden","Connect now":"Jetzt verbinden","Connecting...":"Verbinden...","Connection lost":"Verbindung verloren","Connnecting to server ...":"Verbinde mit Server...","Container name":"Container-Name","Continue":"Fortfahren","Continue without encryption":"Ohne Verschlüsselung fortfahren","Crashes only":"Nur Abstürze","Create bug report ...":"Fehlerbericht erstellen...","Created new limited user":"Nutzer mit eingeschränkten Rechten anlegen","Creating bug report ...":"Fehlerbericht wird erstellt...","Creating new user with limited access ...":"Nutzer mit eingeschränkten Rechten wird erstellt...","Creating target folders ...":"Zielverzeichnisse erstellen...","Creating user...":"Nutzer anlegen...","Days":"Tage","Default options":"Standard-Optionen","Delete":"Löschen","Deleting unwanted files ...":"Veraltete Daten löschen...","Disabled":"Deaktiviert","Dismiss":"Verwerfen","Donate":"Spenden","Donate with Bitcoins":"Spenden per Bitcoin","Donate with PayPal":"Spenden per PayPal","Donation messages":"Spenden-Links","Donation messages are hidden, click to show":"Spenden-Links werden versteckt, klicken um anzuzeigen","Donation messages are visible, click to hide":"Spendenlinks werden angezeigt, klicken zum verstecken","Download":"Herunterladen","Downloading ...":"Herunterladen...","Downloading files ...":"Dateien herunterladen...","Edit ...":"Bearbeiten...","Edit as text":"Als Text bearbeiten","Empty":"Leer","Encrypt file":"Datei verschlüsseln","Encryption":"Verschlüsselung","Encryption changed":"Verschlüsselung geändert","Encryption modules:":"Verschlüsselungen:","Enter access key":"Zugriffsschlüssel angeben","Enter account name":"Account-Name angeben","Enter backup passphrase, if any":"Paswort für Backup","Enter container name":"Container-Name angeben","Enter encryption passphrase":"Verschlüsselungspasswort angeben","Enter expression here":"Ausdruck hier einfügen","Enter one option per line in command-line format, eg. {0}":"Gib eine Option pro Zeile an im Kommandozeilen-Format, z.B. {0}","Enter the destination path":"Ziel-Pfad angeben","Error":"Fehler","Error!":"Fehler!","Errors and crashes":"Fehler und Abstürze","Exclude":"Ausschließen","Existing file found":"Vorhandene Datenbank gefunden","Export":"Exportieren","Export ...":"Exportieren...","Export backup configuration":"Backup-Konfiguration exportieren","Exporting ...":"Expotieren...","FTP (Alternative)":"FTP (Alternativ)","Failed to delete:":"Löschen fehlgeschlagen:","Failed to read backup defaults:":"Konnte Standard-Einstellungen nicht lesen:","Failed to save:":"Fehler beim Speichern:","Fetching path information ...":"Pfad-Infos werden ermittelt...","Files larger than:":"Dateien größer als:","Filters":"Filter","Finished!":"Fertiggestellt!","Folders":"Ordner","Fri":"Fr","General":"Allgemein","General options":"Allgemeine Einstellungen","Generate":"Erzeugen","Hidden files":"Versteckte Dateien","Hours":"Stunden","How do you want to handle existing files?":"Wie sollen bestehende Dateien behandelt werden?","If a date was missed, the job will run as soon as possible.":"Wurde ein Zeitpunkt verpasst, startet das Backup so bald wie möglich.","If you do not enter a path, all files will be stored in the login folder.\nAre you sure this is what you want?":"Ohne Pfad werden alle Dateien im Login-Verzeichnis gespeichert.\nMöchtest du das?","Import":"Importieren","Import backup configuration":"Konfigurationsdatei importieren","Import configuration from a file ...":"Konfigurationsdatei importieren...","Importing ...":"Importieren...","Individual builds for developers only.":"Individuelle Versionen für Entwickler.","Install":"Installieren","Install failed:":"Installation fehlgeschlagen:","It is possible to connect to some FTP without a password.\nAre you sure your FTP server supports password-less logins?":"Manche FTP-Server erlauben einen Login ohne Passwort.\nBist Du sicher, dass Dein FTP-Server dazu gehört?","Keep backups":"Backups speichern","Last month":"Letzter Monat","Last successful run:":"Letztes erfolgreiches Backup:","Latest":"Neuste","Libraries":"Bibliotheken","Listing backup dates ...":"BAckups werden aufgelistet...","Loading ...":"Laden...","Local database for":"Lokale Datenbank für","Local database path:":"Lokale Datenbank:","Local storage":"Lokaler Speicher","Location":"Ort","Log data":"Log-Meldungen","Maintenance":"Wartung","Manage database ...":"Datenbank verwalten...","Manually type path":"Pfad eingeben","Minutes":"Minuten","Missing destination":"Ziel fehlt","Missing name":"Name fehlt","Missing passphrase":"Passwort fehlt","Missing sources":"Quelle fehlt","Mon":"Mo","Months":"Monate","Move existing database":"Datenbank verschieben","My Photos":"Meine Fotos","Never":"Nie","Next":"Weiter","Next scheduled run:":"Nächstes Backup geplant:","Next scheduled task:":"Nächste geplante Aufgabe:","Next task:":"Nächste Aufgabe:","Next time":"Nächstes Backup","No":"Nein","No encryption":"Keine Verschlüsselung","No items selected":"Nichts ausgewählt","No items to restore, please select one or more items":"Es wurde nichts für die Wiederherstellung ausgewählt. Wähle eine Datei oder einen Ordner aus.","No passphrase entered":"Kein Passwort angegeben","No scheduled tasks, you can manually start a task":"Kein Backup geplant. Backup von Hand starten.","Non-matching passphrase":"Passwort-Fehler","None / disabled":"Keine / deaktiviert","Operation failed:":"Fehlgeschlagen:","Operations:":"Operationen:","Optional authentication password":"Passwort für Anmeldung (optional)","Optional authentication username":"Benutzername für Anmeldung (optional)","Options":"Optionen","Original location":"Ursprünglicher Speicherort","Others":"Weitere","Overwrite":"Überschreiben","Passphrase":"Paswort","Passphrase (if encrypted)":"Passwort (falls verschlüsselt)","Passphrase changed":"Passwort gändert","Passphrases are not matching":"Die Passwörter stimmen nicht überein","Password":"Passwort","Passwords do not match":"Die Passwörter stimmen nicht überein","Patching files with local blocks ...":"Dateien mit vorhandenen Daten aufbauen...","Path not found":"Pfad nicht gefunden","Path or subfolder in the bucket":"Pfad oder Unterverzeichnis im Bucket","Pause after startup or hibernation":"Pause nach dem Aufwachen des PCs","Pause controls":"Pause","Permissions":"Berechtigungen","Pick location":"Speicherort auswählen","Previous":"Zurück","Proprietary":"Proprietär","Rebuilding local database ...":"Lokale Datenbank wieder aufbauen...","Recreate (delete and repair)":"Wiederherstellen (löschen und reparieren)","Recreating database ...":"Datenbank wird neu erstellt...","Relative paths not allowed":"Relative Pfade sind nicht möglich","Remove":"Entfernen","Remove option":"Option entfernen","Repair":"Reparieren","Reparing ...":"Reparieren...","Repeat Passphrase":"Passwort wiederholen","Reset":"Zurücksetzen","Restore":"Wiederherstellen","Restore backup":"Backup wiederherstellen","Restore files":"Dateien wiederherstellen","Restore files ...":"Dateien wiederherstellen...","Restore from":"Wiederherstellen von","Restore options":"Wiederherstellungsoptionen","Restore read/write permissions":"Scheib- und Leserechter wiederherstellen","Restoring files ...":"Dateien werden wiederhergestellt...","Resume now":"Jetzt starten","Run again every":"Wiederholen alle","Run now":"Jetzt sichern","Running ...":"Läuft...","Running task":"Backup läuft","Running task:":"Backup läuft:","S3 Compatible":"S3 Kompatibel","Sat":"Sa","Save":"Speichern","Save and repair":"Speichern und reparieren","Save different versions with timestamp in file name":"Mehrere Versionen mit Zeitstempel im Dateinamen speichern","Scanning existing files ...":"Vorhandene Dateien scannen...","Scanning for local blocks ...":"Vorhandene Daten scannen...","Schedule":"Zeitplan","Search for files":"Dateien suchen","Seconds":"Sekunden","Select a log level and see messages as they happen:":"Wähle ein Log-Level und sehe live die Meldungen:","Settings":"Einstellungen","Show":"Zeigen","Show advanced editor":"Profi-Modus anzeigen","Show hidden folders":"Zeige versteckte Ordner","Show log":"Logfile anzeigen","Show log ...":"Log-Datei anzeigen...","Some OpenStack providers allow an API key instead of a password and tenant name":"Some OpenStack providers allow an API key instead of a password and tenant name","Source Data":"Quell-Daten","Source folders":"Quell-Verzeichnisse","Source:":"Quelle:","Specific builds for developers only.":"Spezielle Versionen für Entwickler.","Standard protocols":"Standardprotokolle","Starting ...":"Los geht\\'s...","Starting the restore process ...":"Wiederherstellung wird gestartet...","Stored":"Gespeichert","Strong":"Stark","Sun":"So","System files":"Systemdateien","System info":"System-Informationen","System properties":"System-Eigenschaften","Temporary files":"Temporäre Dateien","Test connection":"Verbindung prüfen","Testing permissions...":"Rechte werden geprüft...","The bucket name should be all lower-case, convert automatically?":"Der Bucket sollte klein geschrieben sein. Jetzt klein schreiben?","The bucket name should start with your username, prepend automatically?":"Der Bucket-Name sollte mit Deinem Benutzernamen beginnen. Benutzername hinzufügen?","The path does not appear to exist, do you want to add it anyway?":"Der Pfad scheint nicht zu existieren. Möchtest Du ihn trotzdem hinzufügen?","The path does not end with a '{0}' character, which means that you include a file, not a folder.\n\nDo you want to include the specified file?":"Ohne das abschließende '{0}' fügst du eine Datei hinzu und kein Verzeichnis.\n\nMöchtest du diese Datei hinzufügen?","The storage class affects the availability and price for a stored file":"The storage class affects the availability and price for a stored file","The target folder contains encrypted files, please supply the passphrase":"Das Ziel enthält verschlüsselte Dateien. Wir benötigen ein Passwort!","The user has too many permissions. Do you want to create a new limited user, with only permissions to the selected path?":"Der Nutzer hat zu viele Rechte. Möchtest Du einen Nutzer mit eingeschränkten Berechtigungen für den gewählten Pfad erstellen?","This month":"Dieser Monat","This week":"Diese Woche","Thu":"Do","To File":"als Datei","To export without a passphrase, uncheck the \"Encrypt file\" box":"Um ohne Passwort zu exprotieren, entferne den Haken für die Verschlüsselung","Today":"Heute","Tue":"Di","Type to highlight files":"Tippen, um Dateien zu markieren","Unknown":"Unbekannt","Update channel":"Update-Kanal","Updating with existing database":"Datenbank wird aktualisiert","Upload volume size":"Dateigröße beim Upload","Uploading verification file ...":"Prüfdatei hochladen...","Usage statistics":"Nutzungsstatistiken","Usage statistics, warnings, errors, and crashes":"Nutzungsberichte, Warnungen, Fehler und Abstürze","Use existing database?":"Bestehende Datenbank nutzen?","Use weak passphrase":"Schwaches Passwort nutzen","Useless":"Nutzlos","User has too many permissions":"Nutzer hat zu viele Rechte","Username":"Benutzername","Verify files":"Backup prüfen","Verifying ...":"Prüfen...","Verifying remote data ...":"Backupdaten prüfen...","Verifying restored files ...":"Wiederhergestellte Dateien prüfen...","Very strong":"Sehr stark","Very weak":"Sehr schwach","Visit us on":"Besuche uns auf","Waiting for task to begin":"Warte darauf, loslegen zu können","Waiting for upload ...":"Auf den Upload warten...","Warnings, errors and crashes":"Warnungen, Fehler und Abstürze","We recommend that you encrypt all backups stored outside your system":"Wir empfehlen, alle Backups auf Onlinespiechern zu verschlüsseln.","Weak":"Schwach","Weak passphrase":"Schwaches Passwort","Wed":"Mi","Weeks":"Wochen","Where do you want to restore the files to?":"Wohin sollen die Dateien wiederhergestellt werden?","Years":"Jahre","Yes":"Ja","Yes, I have stored the passphrase safely":"Ja, ich habe das Passwort sicher gespeichert","Yes, please break my backup!":"Ja, mach das Backup kaputt!","Yesterday":"Gestern","You are changing the database path away from an existing database.\nAre you sure this is what you want?":"Du änderst gerade den Pfad zur lokalen Datenbank.\nWeißt Du, was Du da tust?","You have changed the encryption mode. This may break stuff. You are encouraged to create a new backup instead":"Du hast die Verschlüsselung geändert. Dadurch kann das bestehende Backup unbenutzbar sein. Erstelle lieber ein neues Backup.","You have changed the passphrase, which is not supported. You are encouraged to create a new backup instead.":"Du hast das Passwort geändert. Dadurch kann das bestehende BAckup unbenutzbar sein. Erstelle lieber ein neues Backup.","You have chosen not to encrypt the backup. Encryption is recommended for all data stored on a remote server.":"Alle Backups auf Onlinespeichern sollten verschlüsselt werden.","You have generated a strong passphrase. Make sure you have made a safe copy of the passphrase, as the data cannot be recovered if you loose the passphrase.":"Du hast ein starkes Passwort generiert. Kannst Du Dir das merken? Sonst schreib es lieber auf. Denn ohne Passwort kannst Du Dein Backup nicht wiederherstellen.","You must choose at least one source folder":"Du musst schon ein Quellverzeichnis wählen","You must enter a destination where the backups are stored":"Du musst ein Ziel angeben, in dem das Backup gespeichert ist","You must enter a name for the backup":"Gib einen Namen für das Backup an","You must enter a passphrase or disable encryption":"Gib das Passwort ein, um die Verschlüsselung zu deaktivieren","You must enter a tenant name if you do not provide an API Key":"Gib einen Kundennamen an, wenn Du keinen API-Key hast.","You must enter either a password or an API Key":"Gib einen API-Key oder ein Passwort ein.","You must enter either a password or an API Key, not both":"Gib einen API-Key oder ein Passwort an. Aber nicht beides!","You must fill in the password":"Gib ein Passwort an!","You must fill in the path":"Gib einen Pfad an!","You must fill in the server name or address":"Gib einen Server-Namen oder eine Adresse ein!","You must fill in the username":"Gib einen Benutzernamen an!","You must select or fill in the AuthURI":"AuthURI auswählen oder eintragen","You must select or fill in the server":"Server auswählen oder eintragen","Your files and folders have been restored successfully.":"Dateien und Ordner erfolgreich wiederhergestellt.","Your passphrase is easy to guess. Consider changing passphrase.":"Dein Passwort is leicht zu erraten. Nimm lieber etwas Komplizierteres.","a specific number":"eine Anzahl","click to resume now":"Jetzt starten","custom":"benutzerdefiniert","for a specific time":"eine Dauer","forever":"immer","resume now":"Jetzt starten","resuming in":"starte in"});
/* jshint +W100 */
}]);