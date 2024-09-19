## User Attributes

Für die cadwork Elemente lassen sich User Attribute erstellen. Diese können als
Inputparameter hinzugefügt werden.

![cadwork attributes](../img/cadwork_attributes.jpg "cadwork attributes"){style="width:700px"}

Input               | Beschreibung
:-------------------|:----------------------------------------------------------
`Name`              | Name
`Group`             | Baugruppe
`Subgroup`          | Bauuntergruppe
`Comment`           | Bemerkung
`Edvcode`           | EDV - Code
`User1-99 (Keys)`   | User Attribute<br>**Name des Attributs muss in cadwork vorhanden sein**.<br>Um das Attribut via Grasshopper zu erstellen muss das Prefix `cw_` vorangesetzt werden.
`User1-99 (Values)` | String

Output          | Beschreibung
:---------------|:----------------------------------------
`OutputStdAttr` | Rückgabe der erstellen cadwork Attribute

## Standard Attributes

![standard attributes](../img/standard_attributes.jpg "standard attributes"){style="width:600px"}

Input                     | Beschreibung
:-------------------------|:--------------------------
`Material`                | Materialname
`Color`                   | Farbnummer
`NrProdList`              | Produktionslisten-Nummer
`NrTimberList`            | Stücklisten-Nummer
`NrAssemlbyList`          | Montagelisten-Nummer
`RoundingValueLength`     | Rundungswert Länge [mm]
`RoundingValueWidth`      | Rundungswert Breite [mm]
`RoundingValueHeight`     | Rundungswert Höhe [mm]
`ListOverwidth`           | Breite roh [mm]
`ListOverheight`          | Höhe roh [mm]
`ListOverlength`          | Länge roh [mm]
`ProcessingType`          | Ausgabeart
`ProcessingQuality`       | Bearbeitungsqualität
`ProcessingAddData`       | Zusatzeinstellungen
`RoughOverheightPos`      | Positive Höhenachse [mm]
`RoughOverheightNeg`      | Negative Höhenachse [mm]
`RoughOverwidthPos`       | Positive Breitenachse [mm]
`RoughOverwidthNeg`       | Negative Breitenachse [mm]
`BIMBuilding`             | Gebäude
`BIMStorey`               | Geschoss
`BimStoreyEleveationInMM` | Geschosshöhe in [mm]
`IfcElementType`          | IfcTyp (z.B. IfcMember)

Output         | Beschreibung
:--------------|:----------------------------------------
`OutputCwAttr` | Rückgabe der erstellen cadwork Attribute

## Filter by Attribute

![Filter by attribute](../img/filterbyattribute.jpg "Filter by attribute")  
_Brep's lassen sich über diese Komponente nach definierten Keys/Values filtern._

Input          | Beschreibung
:--------------|:---------------------------------------------------------------
`InputBrep`    | Brep's
`CwAttr`       | cadwork Attribute
`StdAttr`      | Standard Attribute
`FilterKeys`   | Filter Keys<br>Schreibweise beachten<br>:white_check_mark: `CW$_foo_bar`
`FilterValues` | Wert nach dem gefiltert werden soll

Output       | Beschreibung
:------------|:-----------------------------
`OutputBrep` | Rückgabe der gefilterten Brep

## Keys to Values

Attributwerte nach gegebenen Schlüsseln abrufen.

![Keys to values](../img/keystovalues.jpg "Keys to values")  
_Filter nach Standardattribute_

![cadwork keys to values](../img/cwkeystoval.jpg "cadwork keys to values")  
_Filter nach Userattributen_

Input     | Beschreibung
:---------|:--------------------------------------------------------------------
`CwAttr`  | cadwork Attribute
`StdAttr` | Standard Attribute
`Keys`    | Schlüssel nach dem gefiltert werden soll<br>Präfix beachten!<br>:white_check_mark: `StdAttr` `CW$_`<br>:white_check_mark: `CwAttr` `cw_`

Output       | Beschreibung
:------------|:-----------------------------
`OutputBrep` | Rückgabe der gefilterten Brep

## Working with Standard Attributes

### Output Standard-Attribute

Name                         | Rückgabewert
:----------------------------|:------------
`CW$_material`               | String
`CW$_color`                  | Integer
`CW$_number_production_list` | Integer
`CW$_number_timber_list`     | Integer
`CW$_number_assembly_list`   | Integer
`CW$_rounding_value_width`   | Real
`CW$_rounding_value_height`  | Real
`CW$_rounding_value_length`  | Real
`CW$_list_overwidth`         | Real
`CW$_list_overheight`        | Real
`CW$_list_overlength`        | Real
`CW$_processing_type`        | Integer
`CW$_processing_quality`     | Integer
`CW$_processing_add_data`    | Integer
`CW$_xsection_type`          | Integer
`CW$_rough_overheight_pos`   | Real
`CW$_rough_overheight_neg`   | Real
`CW$_rough_overwidth_pos`    | Real
`CW$_rough_overwidth_neg`    | Real
`CW$_BIMBuilding`            | String
`CW$_BIMStorey`              | String
`CW$_IfcElementType`         | String

### ProcessingType

Nummer (Integer) | Beschreibung
:----------------|:----------------
0                | Keine Ausgabeart
1                | Sparren
2                | Pfette
3                | Schifter
4                | Blockbohle
6                | Stiel
7                | Binder
11               | Grat/Kehlsparren
20               | User 1
21               | User 2
22               | User 3
23               | User 4
24               | User 5
30               | Stufe
120              | Platte 1
121              | Platte 2
122              | Platte 3
123              | Platte 4
124              | Platte 5

### ProcessingQuality

Nummer (Integer) | Beschreibung
:----------------|:-------------
0                | None
1                | Kerve
2                | Herzkerve
4                | Blatt
8                | Firstblatt
16               | Gerberstoss
32               | Versatz
64               | Bohrung
128              | Profil
256              | Schlitz
512              | Traufschalung
1024             | Hakenblatt
2048             | Stirnnut
4096             | SS-Nut innen
8192             | SS-Nut aussen
16348            | Hexenschnitt
32768            | HobelnGesamt

### ProcessingAddData

Nummer (Integer) | Beschreibung
:----------------|:----------------------------
0                | Keine
16393            | Ausgabe ESZ einzeln
16396            | Ausgabe ESZ Wand
16408            | Referenz Container
16424            | Multifunktionsbrücke
16904            | Rundholzmakro in BVN
16520            | Bearbeitung im Einzelbauteil
18440            | Für VBA ignorieren
19133            | Alle

### XSectionType

Nummer (Integer) | Beschreibung
:----------------|:------------------------
1                | Quadratischer Querrsch.
2                | Rechteckiger Querschnitt
3                | Runder Querschnitt
17               | Platte Rechteck
