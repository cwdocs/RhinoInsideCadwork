## User Attributes

Il est possible de créer des attributs utilisateur pour les éléments cadwork.
Ceux-ci peuvent être ajoutés comme paramètres d'entrée.

![cadwork attributes](../img/cadwork_attributes.jpg "cadwork attributes"){style="width:700px"}

Input               | Description
:-------------------|:----------------------------------------------------------
`Name`              | String
`Group`             | String
`Subgroup`          | String
`Comment`           | String
`Edvcode`           | String
`User1-99 (Keys)`   | String<br>**Le nom de l'attribut doit exister dans cadwork**.<br> Pour créer l'attribut via Grasshopper, il faut le faire préfixer de `cw_`.
`User1-99 (Values)` | String

Output          | Description
:---------------|:----------------------------------
`OutputStdAttr` | Retour des attributs cadwork créés

## Standard Attributes

![Standard attributes](../img/standard_attributes.jpg "Standard attributes"){style="width:600px"}

Input                     | Valeur de retour
:-------------------------|:------------------------------
`Material`                | Nom du matériau
`Color`                   | numéro de couleur
`NrProdList`              | Numéro de liste de production
`NrTimberList`            | Numéro de nomenclature
`NrAssemlbyList`          | Numéro de liste de montage
`RoundingValueLength`     | Valeur d'arrondi longueur [mm]
`RoundingValueWidth`      | Valeur d'arrondi largeur [mm]
`RoundingValueHeight`     | valeur d'arrondi hauteur [mm]
`ListOverwidth`           | Largeur brute [mm]
`ListOverheight`          | hauteur brute [mm]
`ListOverlength`          | Longueur brute [mm]
`ProcessingType`          | Type de sortie
`ProcessingQuality`       | Qualité de traitement
`ProcessingAddData`       | Paramètres supplémentaires
`RoughOverheightPos`      | Axe de hauteur positif [mm]
`RoughOverheightNeg`      | Axe de hauteur négatif [mm]
`RoughOverwidthPos`       | Axe de largeur positif [mm]
`RoughOverwidthNeg`       | Axe de largeur négatif [mm]
`BIMBuilding`             | Bâtiment
`BIMStorey`               | Étage
`BimStoreyEleveationInMM` | Hauteur de l'étage en [mm]
`IfcElementType`          | IfcType (par ex. IfcMember)

Output         | Description
:--------------|:----------------------------------
`OutputCwAttr` | Retour des attributs cadwork créés

## Filter by Attribute

![Filter attributes](../img/filterbyattribute.jpg "Filter attributes"){style="width: 700px"}  
_Les Brep's peuvent être filtrés via ce composant selon des clés/valeurs définies._

Input          | Description
:--------------|:---------------------------------------------------------------
`InputBrep`    | Brep's
`CwAttr`       | Attribut de cadwork
`StdAttr`      | Attribut standard
`FilterKeys`   | Filter Keys <br> Respecter l'orthographe <br> :white_check_mark: `CW$_foo_bar`
`FilterValues` | Valeur selon laquelle le filtrage doit être effectué

Output       | Description
:------------|:------------------------------
`OutputBrep` | Restitution de la brep filtrée

## Keys to Values

Récupérer les valeurs d'attributs selon des clés données.

![keystovalues](../img/keystovalues.jpg "Axis")  
_Filtre sur les attributs standard_

![cwkeystoval](../img/cwkeystoval.jpg "Axis")  
_Filtre sur les attributs de l'utilisateur_

Input     | Description
:---------|:--------------------------------------------------------------------
`CwAttr`  | Attribut de cadwork
`StdAttr` | Attribut standard
`Keys`    | Clé selon laquelle le filtrage doit être effectué<br>Respecter le préfixe!<br> :white_check_mark: `StdAttr` `CW$_`<br> :white_check_mark: `CwAttr` `cw_`

Output       | Description
:------------|:------------------------------
`OutputBrep` | Restitution de la brep filtrée

## Working with Standard Attributes

### Output Standard-Attributes

Nom                          | Type
:----------------------------|:-------
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

Numéro (Integer) | Description
:----------------|:---------------------
0                | Pas de type de sortie
1                | Chevron
2                | Panne
3                | Schifter
4                | Madrier
6                | Tige
7                | Fermes
11               | Arêtier/Noue
20               | Utilisateur 1
21               | Utilisateur 2
22               | Utilisateur 3
23               | Utilisateur 4
24               | Utilisateur 5
30               | Niveau
120              | Panneau 1
121              | Panneau 2
122              | Panneau 3
123              | Panneau 4
124              | Panneau 5

### ProcessingQuality

Numéro (Integer) | Description
:----------------|:---------------------
0                | None
1                | Kerve
2                | Veille cardiaque
4                | Feuille
8                | Feuille de faîtage
16               | Coup de tanière
32               | Décalage
64               | Perçage
128              | Profilé
256              | Fente
512              | Coffrage de larmier
1024             | Lame de crochet
2048             | Rainure frontale
4096             | Rainure SS intérieure
8192             | Rainure SS extérieure
16348            | Coupe hexagonale
32768            | RabotageTotal

### ProcessingAddData

Numéro (Integer) | Description
:----------------|:-------------------------------------------------
0                | Aucun
16393            | Edition ESZ seul
16396            | Sortie ESZ mur
16408            | Référence Conteneur
16424            | Pont multifonctionnel
16904            | Macro bois rond en BVN
16520            | Usinage dans l'élément de construction individuel
18440            | Ignorer pour VBA
19133            | Tous

### XSectionType

Numéro (Integer) | Description
:----------------|:------------------------------
1                | Chaussure transversale carrée.
2                | Section rectangulaire
3                | Coupe transversale ronde
17               | Plaque rectangulaire
