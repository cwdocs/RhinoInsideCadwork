Les composants d'architecture permettent de créer des éléments d'architecture
dans cadwork. Les composants ont besoin d'une géométrie comme entrée. Les
attributs peuvent être complétés en option.

## Toit

![Toit](../img/roof.png "Toit"){style="width:160px"}

Input       | Description
:-----------|:----------------------------
`Geom`      | Brep closed
`CwAttr`    | Userattribute [optional]
`StdAttr`   | Standardattribute [optional]
`BakeCW`    | bake in cadwork [optional]
`ElementID` | Element ID [optional]

Output | Description
:------|:---------------------------------
`None` | L'élément sera créé dans cadwork

## Paroi

![Paroi](../img/wall.png "Paroi"){style="width:160px"}

Input       | Description
:-----------|:----------------------------
`Geom`      | Brep closed
`CwAttr`    | Userattribute [optional]
`StdAttr`   | Standardattribute [optional]
`BakeCW`    | bake in cadwork [optional]
`ElementID` | Element ID [optional]

Output | Description
:------|:---------------------------------
`None` | L'élément sera créé dans cadwork

## Plancher

![Plancher](../img/floor.png "Plancher"){style="width:160px"}

Input       | Description
:-----------|:----------------------------
`Geom`      | Brep closed
`CwAttr`    | Userattribute [optional]
`StdAttr`   | Standardattribute [optional]
`BakeCW`    | bake in cadwork [optional]
`ElementID` | Element ID [optional]

Output | Description
:------|:---------------------------------
`None` | L'élément sera créé dans cadwork

## Pièce

![Pièce](../img/room.png "Pièce"){style="width:160px"}

Input       | Description
:-----------|:----------------------------
`Geom`      | Brep closed
`CwAttr`    | Userattribute [optional]
`StdAttr`   | Standardattribute [optional]
`BakeCW`    | bake in cadwork [optional]
`ElementID` | Element ID [optional]

Output | Description
:------|:---------------------------------
`None` | L'élément sera créé dans cadwork
