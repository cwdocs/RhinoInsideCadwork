# Willkommen zu Rhino.Inside cadwork

Rhino.Inside cadwork ist ein Tool, welches die Einbettung von Rhino 7 in cadwork
3D ermöglicht. Nutzen Sie die Vorteile des Flächenmodellieres in ihrer cadwork
3D Umgebung.

![beams curve](img/beams_curve.gif "beams curve")

## Add-on Download

[food4Rhino - Rhino.Inside
cadwork](https://www.food4rhino.com/en/app/rhinoinside-cadwork-3d?lang=de)

Food4Rhino ist McNeels Community-Dienst für Plug-ins. Anwender finden hier die
neuesten Rhino-Plug-ins, Grasshopper-Add-ons, Scripts und vieles mehr.
Darüberhinaus können sie mit den Entwicklern Kontakt aufnehmen und ihre
Anwendungen teilen.

<iframe width="560" height="315" src="https://www.youtube.com/embed/vBh1UHg6ZHQ"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>

## Grasshopper

Grasshopper ist ein grafischer Algorithmus-Editor, der in die
Modellierungswerkzeuge von Rhino3D integriert ist. Sie verwenden Grasshopper, um
Algorithmen zu entwerfen, die dann Aufgaben in Rhino3D automatisieren. Der
visuelle "Plug-and-Play"-Stil von Grasshopper gibt Designern die Möglichkeit,
kreative Problemlösungen mit neuartigen Regelsystemen durch die Verwendung einer
fließenden grafischen Oberfläche zu kombinieren.

![Grasshoper component parts](img/process.png
){style="width:500px"}

<span class="bullet-number">1</span> Die drei Eingangsparameter der Komponente
Circle CNR.

<span class="bullet-number">2</span> Der Kreis CNR-Komponentenbereich.

<span class="bullet-number">3</span> Der Ausgangsparameter der Komponente Circle
CNR.

Eine Komponente benötigt Daten, um ihre Aktionen ausführen zu können, und sie
liefert in der Regel auch ein Ergebnis. Aus diesem Grund haben die meisten
Komponenten eine Reihe von verschachtelten Parametern, die als Inputs bzw.
Outputs bezeichnet werden. Die Eingabeparameter befinden sich auf der linken
Seite, die Ausgabeparameter auf der rechten Seite.

Es gibt einige wenige Grasshopper-Komponenten, die Eingänge, aber keine Ausgänge
haben, oder andersherum. Wenn eine Komponente keine Eingänge oder Ausgänge hat,
hat sie eine gezackte Kante.

![Grasshoper component parts](img/components.png){style="width:360px"}

## Run Rhino.Inside cadwork

Rhino.Inside cadwork wird über **Extra -> Rhino Live Link** gestartet.

![Rhino aus cadwork starten](img/run.gif)

## Komponenten

![Components](img/comps.png "Components")

Die Komponenten sind in vier Abschnitte gegliedert:

- Im Abschnitt **Attributes** finden sich Komponenten zum Handling von
  Attributen.

- Im Abschnitt **Select** finden sie alle Komponeten zur Selektierung von
  cadwork Elementen.

- Im Abschnitt **Create Elements** sind die Komponenten zur Erstellung von
  cadwork Elementen zu finden.

- Im letzten Abschnitt **Architecture** sind Komponenten zur Erstellung von
  Architekturelementen zu finden.

### Kontext-Menü

Einige Komponenten bieten Funktionalitäten über das Kontext-Menü an. Das
Kontext-Menü wird mittels Rechtsklick auf das Icon aufgerufen.

Über das Kontext-Menü lassen sich

- Cadwork Elemente oder 3d/3dc auswählen
- Vorschauen starten
- Elemente erstellen

![Elemente referenzieren](img/get_elements.gif "Elemente referenzieren")
