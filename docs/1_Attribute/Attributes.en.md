## User Attributes

User attributes can be created for the cadwork elements. These can be added as
input parameters.

![cadwork attributes](../img/cadwork_attributes.jpg "cadwork attributes"){style="width:700px"}

Input               | Description
:-------------------|:----------------------------------------------------------
`Name`              | Name
`Group`             | Group
`Subgroup`          | Subgroup
`Comment`           | Description
`Edvcode`           | EDV - Code
`User1-99 (Keys)`   | User Attributes<br>**Name of the attribute must exist in cadwork**.<br> To create the attribute via Grasshopper the prefix `cw_` must be present.
`User1-99 (Values)` | String

Output          | Description
:---------------|:------------------------------------
`OutputStdAttr` | Return the create cadwork attributes

## Standard Attributes

![Standard attributes](../img/standard_attributes.jpg "Standard attributes"){style="width:600px"}

Input                     | Description
:-------------------------|:--------------------------
`Material`                | Material name
`Color`                   | Color number
`NrProdList`              | Production List Number
`NrTimberList`            | BOM number
`NrAssemlbyList`          | Assembly List Number
`RoundingValueLength`     | rounding value length [mm]
`RoundingValueWidth`      | Rounding value width [mm]
`RoundingValueHeight`     | rounding value height [mm]
`ListOverwidth`           | Width raw [mm]
`ListOverheight`          | height raw [mm]
`ListOverlength`          | Length raw [mm]
`ProcessingType`          | output type
`ProcessingQuality`       | processing quality
`ProcessingAddData`       | additional settings
`RoughOverheightPos`      | Positive height axis [mm]
`RoughOverheightNeg`      | negative height axis [mm]
`RoughOverwidthPos`       | Positive width axis [mm]
`RoughOverwidthNeg`       | Negative width axis [mm]
`BIMBuilding`             | Building
`BIMStorey`               | Storey
`BimStoreyEleveationInMM` | Floor Height in [mm]
`IfcElementType`          | IfcType (e.g. IfcMember)

Output         | Description
:--------------|:-------------------------------------
`OutputCwAttr` | Return the created cadwork attributes

## Filter by Attributes

![Filter attributes](../img/filterbyattribute.jpg "Filter attributes"){style="width: 700px"}  
_Brep's can be filtered by defined keys/values via this component._

Input          | Description
:--------------|:---------------------------------------------------------------
`InputBrep`    | Brep's
`CwAttr`       | Cadwork-Attribut
`StdAttr`      | Standard-Attribut
`FilterKeys`   | Filter Keys <br> Note spelling <br> :white_check_mark: `CW$_foo_bar`
`FilterValues` | Value to be filtered by

Output       | Description
:------------|:---------------------------
`OutputBrep` | Return of the filtered brep

## Keys to Values

Retrieve attribute values according to given keys.

![Keys to values](../img/keystovalues.jpg "Keys to values")  
_Filter by default attributes_

![cadwork keys to values](../img/cwkeystoval.jpg "cadwork keys to values")  
_Filter by user attributes_

Input     | Description
:---------|:--------------------------------------------------------------------
`CwAttr`  | cadwork Attributes
`StdAttr` | Standard Attributes
`Keys`    | Key to filter by <br> Note prefix!<br> :white_check_mark: `StdAttr` `CW$_` <br> :white_check_mark: `CwAttr` `cw_`

Output       | Description
:------------|:---------------------------
`OutputBrep` | Return of the filtered brep

## Working with Standard Attributes

### Output Standard-Attribute

Name                         | Return value
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

Number (Integer) | Description
:----------------|:-----------------
0                | No output type
1                | Rafter
2                | Purlin
3                | Shifter
4                | block plank
6                | Stem/Column
7                | Truss
11               | Hip/valley rafter
20               | User 1
21               | User 2
22               | User 3
23               | User 4
24               | User 5
30               | Stage
120              | Plate 1
121              | Plate 2
122              | Plate 3
123              | Plate 4
124              | Plate 5

### ProcessingQuality

Number (Integer) | Description
:----------------|:-----------------
0                | None
1                | Cerve
2                | Hearterve
4                | Leaf
8                | Ridge leaf
16               | Tanner butt
32               | Offset
64               | Bore
128              | Profile
256              | Slot
512              | Eave formwork
1024             | Hook blade
2048             | Face groove
4096             | SS groove inside
8192             | SS groove outside
16348            | Witch cut
32768            | PlaningTotal

### ProcessingAddData

Number (Integer) | Description
:----------------|:------------------------------
0                | None
16393            | Output ESZ single
16396            | Output ESZ wall
16408            | Reference Container
16424            | Multifunction bridge
16904            | Log macro in BVN
16520            | Processing in single component
18440            | Ignore for VBA
19133            | All

### XSectionType

Number (Integer) | Description
:----------------|:-------------------------
1                | Square cross section.
2                | Rectangular cross section
3                | Round cross section
17               | Plate Rectangle
