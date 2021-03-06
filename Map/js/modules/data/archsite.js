﻿dojo.declare("ArchSite", null, {
    constructor: function () {
        this.name = name;
        this.age = age;
        this.currentResidence = currentResidence;
    },

    fields: [{
          "name": "SITEID",
          "type": "esriFieldTypeString",
          "alias": "Site Id",
          "length": 20,
          "nullable": true,
          "inputtype": "text"
        },{
            "name": "STATE",
            "type": "esriFieldTypeString",
            "alias": "State",
            "length": 2,
            "nullable": true,
            "inputtype": "text"
        },{
          "name": "COUNTY",
          "type": "esriFieldTypeString",
          "alias": "County",
          "length": 12,
          "nullable": true,
          "inputtype": "text"
        },{
            "name": "SITENUMBER",
            "type": "esriFieldTypeString",
            "alias": "Site Number",
            "length": 10,
            "nullable": true,
            "inputtype": "text"
        },{
          "name": "RECORDEDBY",
          "type": "esriFieldTypeString",
          "alias": "RecordedBy",
          "length": 100,
          "nullable": true,
          "inputtype": "text"
        },{
            "name": "AFFILIATION",
            "type": "esriFieldTypeString",
            "alias": "Affiliation",
            "length": 100,
            "nullable": true,
            "inputtype": "text"
        },{
          "name": "RECORDEDDATE",
          "type": "esriFieldTypeDate",
          "alias": "Recorded Date",
          "length": 8,
          "nullable": true,
          "inputtype": "date"
        },{
            "name": "SITENAME",
            "type": "esriFieldTypeString",
            "alias": "Site Name",
            "length": 50,
            "nullable": true,
            "inputtype": "text"
        },{
          "name": "PROJECT",
          "type": "esriFieldTypeString",
          "alias": "Project",
          "length": 150,
          "nullable": true,
          "inputtype": "text"
        },{
            "name": "USGSQUADRANGLE",
            "type": "esriFieldTypeString",
            "alias": "USGS Quadrangle",
            "length": 30,
            "nullable": true,
            "inputtype": "text"
        },{
          "name": "UTMZONE",
          "type": "esriFieldTypeSmallInteger",
          "alias": "UTM Zone",
          "nullable": true,
          "inputtype": "number"
        },{
            "name": "EASTING",
            "type": "esriFieldTypeDouble",
            "alias": "Easting",
            "nullable": true,
            "inputtype": "number"
        },{
          "name": "NORTHING",
          "type": "esriFieldTypeDouble",
          "alias": "Northing",
          "nullable": true,
          "inputtype": "number"
        },{
            "name": "GPSEASTING",
            "type": "esriFieldTypeDouble",
            "alias": "GPS Easting",
            "nullable": true,
            "inputtype": "number"
        },{
          "name": "GPSNORTHING",
          "type": "esriFieldTypeDouble",
          "alias": "GPS Northing",
          "nullable": true,
          "inputtype": "number"
        },{
            "name": "GPSUNITDESC",
            "type": "esriFieldTypeString",
            "alias": "GPS Unit Make and Model",
            "length": 100,
            "nullable": true,
            "inputtype": "text"
        },{
          "name": "AI_SURVEY",
          "type": "esriFieldTypeString",
          "alias": "Arch Investigation - Survey",
          "length": 1,
          "nullable": true,
          "inputtype": "checkbox"
        },{
            "name": "AI_TESTING",
            "type": "esriFieldTypeString",
            "alias": "Arch Investigation - Testing",
            "length": 1,
            "nullable": true,
            "inputtype": "checkbox"
        },{
          "name": "AI_EXCAVATION",
          "type": "esriFieldTypeString",
          "alias": "Arch Investigation - Excavation",
          "length": 1,
          "nullable": true,
          "inputtype": "checkbox"
        },{
            "name": "PROPERTYOWNER",
            "type": "esriFieldTypeString",
            "alias": "Property Owner",
            "length": 50,
            "nullable": true,
            "inputtype": "text"
        },{
          "name": "PHONENUMBER",
          "type": "esriFieldTypeString",
          "alias": "Phone Number",
          "length": 12,
          "nullable": true,
          "inputtype": "text"
        },{
            "name": "ADDRESS",
            "type": "esriFieldTypeString",
            "alias": "Address",
            "length": 50,
            "nullable": true,
            "inputtype": "text"
        },{
          "name": "NRHP_ELIGIBLE",
          "type": "esriFieldTypeString",
          "alias": "NRHP - Potentially Eligible",
          "length": 1,
          "nullable": true,
          "inputtype": "checkbox"
        },{
            "name": "NRHP_NONELIGIBLE",
            "type": "esriFieldTypeString",
            "alias": "NRHP - Noneligible",
            "length": 1,
            "nullable": true,
            "inputtype": "checkbox"
        },{
          "name": "NRHP_ADDWORK",
          "type": "esriFieldTypeString",
          "alias": "NRHP - Additional Work",
          "length": 1,
          "nullable": true,
          "inputtype": "checkbox"
        },{
            "name": "LOS_NATIONAL",
            "type": "esriFieldTypeString",
            "alias": "Lvl Of Significance - National",
            "length": 1,
            "nullable": true,
            "inputtype": "checkbox"
        },{
          "name": "LOS_STATE",
          "type": "esriFieldTypeString",
          "alias": "Lvl Of Significance - State",
          "length": 1,
          "nullable": true,
          "inputtype": "checkbox"
        },{
            "name": "LOS_LOCAL",
            "type": "esriFieldTypeString",
            "alias": "Lvl Of Significance - Local",
            "length": 1,
            "nullable": true,
            "inputtype": "checkbox"
        },{
          "name": "PROVINCE",
          "type": "esriFieldTypeSmallInteger",
          "alias": "Physiographic Province",
          "nullable": true,
          "inputtype": "number"
        },{
            "name": "LANDFORMLOCATION",
            "type": "esriFieldTypeString",
            "alias": "Landform Location",
            "length": 50,
            "nullable": true,
            "inputtype": "text"
        },{
          "name": "SITEELEVATION",
          "type": "esriFieldTypeDouble",
          "alias": "Site Elevation (feet)",
          "nullable": true,
          "inputtype": "number"
        },{
            "name": "SOILTYPE",
            "type": "esriFieldTypeSmallInteger",
            "alias": "Soil Type",
            "nullable": true,
            "inputtype": "number"
        },{
          "name": "SOILCLASSIFICATION",
          "type": "esriFieldTypeString",
          "alias": "Soil Classification",
          "length": 50,
          "nullable": true,
          "inputtype": "text"
        },{
            "name": "MAJORRIVER",
            "type": "esriFieldTypeSmallInteger",
            "alias": "Major River",
            "nullable": true,
            "inputtype": "number",
            "domaintype": "coded",
            "domain": [
                 {"value": '0', "desc": 'Pee Dee'},
                 {"value": '1', "desc": 'Santee'},
                 {"value": '2', "desc": 'Ashley-Combahee-Edisto'},
                 {"value": '3', "desc": 'Savannah'}]
        },{
          "name": "NEARESTRIVERSTREAM",
          "type": "esriFieldTypeString",
          "alias": "Nearest River Or Stream",
          "length": 50,
          "nullable": true,
          "inputtype": "text"
        },{
            "name": "CV_PINECONF",
            "type": "esriFieldTypeString",
            "alias": "Vegetation - Pine/Conf",
            "length": 1,
            "nullable": true,
            "inputtype": "checkbox"
        },{
          "name": "CV_HARDWOOD",
          "type": "esriFieldTypeString",
          "alias": "Vegetation - Hardwood",
          "length": 1,
          "nullable": true,
          "inputtype": "checkbox"
        },{
            "name": "CV_MIXEDPINEHW",
            "type": "esriFieldTypeString",
            "alias": "Vegetation - MixedPine/Hardwood",
            "length": 1,
            "nullable": true,
            "inputtype": "checkbox"
        },{
          "name": "CV_OLDFIELD",
          "type": "esriFieldTypeString",
          "alias": "Vegetation - Old Field",
          "length": 1,
          "nullable": true,
          "inputtype": "checkbox"
        },{
            "name": "CV_GRASSPASTURE",
            "type": "esriFieldTypeString",
            "alias": "Vegetation - Grass/Pasture",
            "length": 1,
            "nullable": true,
            "inputtype": "checkbox"
        },{
          "name": "CV_AGRICULTURE",
          "type": "esriFieldTypeString",
          "alias": "Vegetation - Agriculture",
          "length": 1,
          "nullable": true,
          "inputtype": "checkbox"
        },{
            "name": "CV_WETLANDSFRESHWAT",
            "type": "esriFieldTypeString",
            "alias": "Vegetation - Wetlands/Freshwater",
            "length": 1,
            "nullable": true,
            "inputtype": "checkbox"
        },{
          "name": "CV_WETLANDSSALTWAT",
          "type": "esriFieldTypeString",
          "alias": "Vegetation - Wetlands/Salterwater",
          "length": 1,
          "nullable": true,
          "inputtype": "checkbox"
        },{
            "name": "CV_OTHER",
            "type": "esriFieldTypeString",
            "alias": "Vegetation - Other",
            "length": 1,
            "nullable": true,
            "inputtype": "checkbox"
        },{
          "name": "COVERTYPE",
          "type": "esriFieldTypeSmallInteger",
          "alias": "Groundcover",
          "nullable": true,
          "inputtype": "number"
        },{
            "name": "SITELENGTH",
            "type": "esriFieldTypeDouble",
            "alias": "Estimated Site Length (Meters)",
            "nullable": true,
            "inputtype": "number"
        },{
          "name": "SITEWIDTH",
          "type": "esriFieldTypeDouble",
          "alias": "Estimated Site Width (Meters)",
          "nullable": true,
          "inputtype": "number"
        },{
            "name": "SITEDEPTH",
            "type": "esriFieldTypeDouble",
            "alias": "Estimated Site Depth (cm)",
            "nullable": true,
            "inputtype": "number"
        },{
          "name": "NH_MIDDEN",
          "type": "esriFieldTypeString",
          "alias": "Non Human - Midden",
          "length": 1,
          "nullable": true,
          "inputtype": "checkbox"
        },{
            "name": "NH_FLORAL",
            "type": "esriFieldTypeString",
            "alias": "Non Human - Floral",
            "length": 1,
            "nullable": true,
            "inputtype": "checkbox"
        },{
          "name": "NH_FAUNA",
          "type": "esriFieldTypeString",
          "alias": "Non Human - Fauna",
          "length": 1,
          "nullable": true,
          "inputtype": "checkbox"
        },{
            "name": "NH_SHELL",
            "type": "esriFieldTypeString",
            "alias": "Non Human - Shell",
            "length": 1,
            "nullable": true,
            "inputtype": "checkbox"
        },{
          "name": "NH_CHARCOAL",
          "type": "esriFieldTypeString",
          "alias": "Non Human - Charcoal",
          "length": 1,
          "nullable": true,
          "inputtype": "checkbox"
        },{
            "name": "HUMANREMAINS",
            "type": "esriFieldTypeSmallInteger",
            "alias": "Human Skeletal Remains",
            "nullable": true,
            "inputtype": "number"
        },{
          "name": "HUMANREMAINSPRESERVATION",
          "type": "esriFieldTypeSmallInteger",
          "alias": "Human Remains Preservation",
          "nullable": true,
          "inputtype": "number"
        },{
            "name": "MAPSCALE",
            "type": "esriFieldTypeInteger",
            "alias": "Map Scale",
            "nullable": true,
            "inputtype": "number"
        },{
          "name": "ARC_PALEO",
          "type": "esriFieldTypeString",
          "alias": "ArchComp_Paleo",
          "length": 1,
          "nullable": true,
          "inputtype": "checkbox"
        },{
            "name": "ARC_EARLYARCHAIC",
            "type": "esriFieldTypeString",
            "alias": "Arch Comp - Early Archaic",
            "length": 1,
            "nullable": true,
            "inputtype": "checkbox"
        },{
          "name": "ARC_MIDDLEARCHAIC",
          "type": "esriFieldTypeString",
          "alias": "Arch Comp - Middle Archaic",
          "length": 1,
          "nullable": true,
          "inputtype": "checkbox"
        },{
            "name": "ARC_LATEARCHAIC",
            "type": "esriFieldTypeString",
            "alias": "Arch Comp - Late Archaic",
            "length": 1,
            "nullable": true,
            "inputtype": "checkbox"
        },{
          "name": "ARC_ANYARCHAIC",
          "type": "esriFieldTypeString",
          "alias": "Arch Comp - Any Archaic",
          "length": 1,
          "nullable": true,
          "inputtype": "checkbox"
        },{
            "name": "ARC_EARLYWOODLAND",
            "type": "esriFieldTypeString",
            "alias": "Arch Comp - Early Woodland",
            "length": 1,
            "nullable": true,
            "inputtype": "checkbox"
        },{
          "name": "ARC_MIDDLEWOODLAND",
          "type": "esriFieldTypeString",
          "alias": "Arch Comp - Middle Woodland",
          "length": 1,
          "nullable": true,
          "inputtype": "checkbox"
        },{
            "name": "ARC_LATEWOODLAND",
            "type": "esriFieldTypeString",
            "alias": "Arch Comp - Late Woodland",
            "length": 1,
            "nullable": true,
            "inputtype": "checkbox"
        },{
          "name": "ARC_ANYWOODLAND",
          "type": "esriFieldTypeString",
          "alias": "Arch Comp - Any Woodland",
          "length": 1,
          "nullable": true,
          "inputtype": "checkbox"
        },{
            "name": "ARC_MISSISSIPPIAN",
            "type": "esriFieldTypeString",
            "alias": "Arch Comp - Mississippian",
            "length": 1,
            "nullable": true,
            "inputtype": "checkbox"
        },{
          "name": "ARC_LATEPREHISTORIC",
          "type": "esriFieldTypeString",
          "alias": "Arch Comp - Late Prehistoric",
          "length": 1,
          "nullable": true,
          "inputtype": "checkbox"
        },{
            "name": "ARC_UNKNOWNPREHISTORIC",
            "type": "esriFieldTypeString",
            "alias": "Arch Comp - Unknown Prehistoric",
            "length": 1,
            "nullable": true,
            "inputtype": "checkbox"
        },{
          "name": "ARC_ERAPREHISTORIC",
          "type": "esriFieldTypeString",
          "alias": "Arch Comp - Era Prehistoric",
          "length": 1,
          "nullable": true,
          "inputtype": "checkbox"
        },{
            "name": "ARC_16CENTURY",
            "type": "esriFieldTypeString",
            "alias": "Arch Comp - 16th Century",
            "length": 1,
            "nullable": true,
            "inputtype": "checkbox"
        },{
          "name": "ARC_17CENTURY",
          "type": "esriFieldTypeString",
          "alias": "Arch Comp - 17th Century",
          "length": 1,
          "nullable": true,
          "inputtype": "checkbox"
        },{
            "name": "ARC_18CENTURY",
            "type": "esriFieldTypeString",
            "alias": "Arch Comp - 18th Century",
            "length": 1,
            "nullable": true,
            "inputtype": "checkbox"
        },{
          "name": "ARC_19CENTURY",
          "type": "esriFieldTypeString",
          "alias": "Arch Comp - 19th Century",
          "length": 1,
          "nullable": true,
          "inputtype": "checkbox"
        },{
            "name": "ARC_20CENTURY",
            "type": "esriFieldTypeString",
            "alias": "Arch Comp - 20th Century",
            "length": 1,
            "nullable": true,
            "inputtype": "checkbox"
        },{
          "name": "ARC_UNKNOWNHISTORIC",
          "type": "esriFieldTypeString",
          "alias": "Arch Comp - Unknown Historic",
          "length": 1,
          "nullable": true,
          "inputtype": "checkbox"
        },{
            "name": "TOTALARTIFACTS",
            "type": "esriFieldTypeInteger",
            "alias": "Total Number Of Artifacts",
            "nullable": true,
            "inputtype": "number"
        },{
          "name": "VIS_0",
          "type": "esriFieldTypeString",
          "alias": "Visibility - 0%",
          "length": 1,
          "nullable": true,
          "inputtype": "checkbox"
        },{
            "name": "VIS_1_25",
            "type": "esriFieldTypeString",
            "alias": "Visibility - 1-25%",
            "length": 1,
            "nullable": true,
            "inputtype": "checkbox"
        },{
          "name": "VIS_26_50",
          "type": "esriFieldTypeString",
          "alias": "Visibility - 26-50%",
          "length": 1,
          "nullable": true,
          "inputtype": "checkbox"
        },{
            "name": "VIS_51_75",
            "type": "esriFieldTypeString",
            "alias": "Visibility - 15-75%",
            "length": 1,
            "nullable": true,
            "inputtype": "checkbox"
        },{
          "name": "VIS_76_100",
          "type": "esriFieldTypeString",
          "alias": "Visibility - 76-100%",
          "length": 1,
          "nullable": true,
          "inputtype": "checkbox"
        },{
            "name": "TOTALHOURSCOLLECTING",
            "type": "esriFieldTypeDouble",
            "alias": "Total Hours Collecting",
            "nullable": true,
            "inputtype": "number"
        },{
          "name": "CT_GRID",
          "type": "esriFieldTypeString",
          "alias": "Collection Type - Grid",
          "length": 1,
          "nullable": true,
          "inputtype": "checkbox"
        },{
            "name": "CT_CONTROLLED",
            "type": "esriFieldTypeString",
            "alias": "Collection Type - Controlled Sampling",
            "length": 1,
            "nullable": true,
            "inputtype": "checkbox"
        },{
          "name": "CT_GRAB",
          "type": "esriFieldTypeString",
          "alias": "Collection Type - Grab",
          "length": 1,
          "nullable": true,
          "inputtype": "checkbox"
        },{
            "name": "CT_OTHER",
            "type": "esriFieldTypeString",
            "alias": "Collection Type - Other",
            "length": 1,
            "nullable": true,
            "inputtype": "checkbox"
        },{
          "name": "COLEXT_COMPLETE",
          "type": "esriFieldTypeString",
          "alias": "Collection Extent - Complete",
          "length": 1,
          "nullable": true,
          "inputtype": "checkbox"
        },{
            "name": "COLEXT_SELECTIVE",
            "type": "esriFieldTypeString",
            "alias": "Collection Extent - Selective",
            "length": 1,
            "nullable": true,
            "inputtype": "checkbox"
        },{
          "name": "COLEXT_NO_COLLECT",
          "type": "esriFieldTypeString",
          "alias": "Collection Extent - No Collection Made",
          "length": 1,
          "nullable": true,
          "inputtype": "checkbox"
        },{
            "name": "TESTINGMETHOD",
            "type": "esriFieldTypeSmallInteger",
            "alias": "Testing Method",
            "nullable": true,
            "inputtype": "number"
        },{
          "name": "LU_AGRICULTURE",
          "type": "esriFieldTypeString",
          "alias": "Land Use - Agricultural",
          "length": 1,
          "nullable": true,
          "inputtype": "checkbox"
        },{
            "name": "LU_FOREST",
            "type": "esriFieldTypeString",
            "alias": "Land Use - Forest",
            "length": 1,
            "nullable": true,
            "inputtype": "checkbox"
        },{
          "name": "LU_FALLOW",
          "type": "esriFieldTypeString",
          "alias": "Land Use - Fallow",
          "length": 1,
          "nullable": true,
          "inputtype": "checkbox"
        },{
            "name": "LU_RESIDENTIALLD",
            "type": "esriFieldTypeString",
            "alias": "Land Use - Residentical/Low Density",
            "length": 1,
            "nullable": true,
            "inputtype": "checkbox"
        },{
          "name": "LU_RESIDENTIALHD",
          "type": "esriFieldTypeString",
          "alias": "Land Use - Residentical/High Density",
          "length": 1,
          "nullable": true,
          "inputtype": "checkbox"
        },{
            "name": "LU_COMMERCIAL",
            "type": "esriFieldTypeString",
            "alias": "Land Use - Commercial",
            "length": 1,
            "nullable": true,
            "inputtype": "checkbox"
        },{
          "name": "LU_INDUSTRIAL",
          "type": "esriFieldTypeString",
          "alias": "Land Use - Industrial",
          "length": 1,
          "nullable": true,
          "inputtype": "checkbox"
        },{
            "name": "LU_OTHER",
            "type": "esriFieldTypeString",
            "alias": "Land Use - Other",
            "length": 1,
            "nullable": true,
            "inputtype": "checkbox"
        },{
          "name": "SITEINTEGRITY",
          "type": "esriFieldTypeSmallInteger",
          "alias": "Site Integrity",
          "nullable": true,
          "inputtype": "number"
        },{
            "name": "DAMAGEEXTENT",
            "type": "esriFieldTypeSmallInteger",
            "alias": "Damage Extent",
            "nullable": true,
            "inputtype": "number"
        },{
          "name": "DAMAGE_EROSION",
          "type": "esriFieldTypeString",
          "alias": "Nature of Damage - Erosion",
          "length": 1,
          "nullable": true,
          "inputtype": "checkbox"
        },{
            "name": "DAMAGE_CULTIVATION",
            "type": "esriFieldTypeString",
            "alias": "Nature of Damage - Cultivation",
            "length": 1,
            "nullable": true,
            "inputtype": "checkbox"
        },{
          "name": "DAMAGE_LOGGING",
          "type": "esriFieldTypeString",
          "alias": "Nature of Damage - Loggin",
          "length": 1,
          "nullable": true,
          "inputtype": "checkbox"
        },{
            "name": "DAMAGE_CONSTRUCTION",
            "type": "esriFieldTypeString",
            "alias": "Nature of Damage - Construction",
            "length": 1,
            "nullable": true,
            "inputtype": "checkbox"
        },{
          "name": "DAMAGE_VANDALISM",
          "type": "esriFieldTypeString",
          "alias": "Nature of Damage - Vandalism",
          "length": 1,
          "nullable": true,
          "inputtype": "checkbox"
        },{
            "name": "DAMAGE_INUNDATION",
            "type": "esriFieldTypeString",
            "alias": "Nature of Damage - Inundation",
            "length": 1,
            "nullable": true,
            "inputtype": "checkbox"
        },{
          "name": "DAMAGE_OTHER",
          "type": "esriFieldTypeString",
          "alias": "Nature of Damage - Other",
          "length": 1,
          "nullable": true,
          "inputtype": "checkbox"
        },{
            "name": "THREATPOTENTIAL",
            "type": "esriFieldTypeSmallInteger",
            "alias": "Threat Potential",
            "nullable": true,
            "inputtype": "number"
        },{
          "name": "THREAT_EROSION",
          "type": "esriFieldTypeString",
          "alias": "Nature of Threat - Erosion",
          "length": 1,
          "nullable": true,
          "inputtype": "checkbox"
        },{
            "name": "THREAT_CULTIVATION",
            "type": "esriFieldTypeString",
            "alias": "Nature of Threat - Cultivation",
            "length": 1,
            "nullable": true,
            "inputtype": "checkbox"
        },{
          "name": "THREAT_LOGGING",
          "type": "esriFieldTypeString",
          "alias": "Nature of Threat - Logging",
          "length": 1,
          "nullable": true,
          "inputtype": "checkbox"
        },{
            "name": "THREAT_CONSTRUCTION",
            "type": "esriFieldTypeString",
            "alias": "Nature of Threat - Construction",
            "length": 1,
            "nullable": true,
            "inputtype": "checkbox"
        },{
          "name": "THREAT_VANDALISM",
          "type": "esriFieldTypeString",
          "alias": "Nature of Threat - Vandalism",
          "length": 1,
          "nullable": true,
          "inputtype": "checkbox"
        },{
            "name": "THREAT_INUNDATION",
            "type": "esriFieldTypeString",
            "alias": "Nature of Threat - Inundation",
            "length": 1,
            "nullable": true,
            "inputtype": "checkbox"
        },{
          "name": "THREAT_OTHER",
          "type": "esriFieldTypeString",
          "alias": "Nature of Threat - Other",
          "length": 1,
          "nullable": true,
          "inputtype": "checkbox"
        },{
            "name": "REC_SURVEY",
            "type": "esriFieldTypeString",
            "alias": "Recommendation - Survey",
            "length": 1,
            "nullable": true,
            "inputtype": "checkbox"
        },{
          "name": "REC_TESTING",
          "type": "esriFieldTypeString",
          "alias": "Recommendation - Testing",
          "length": 1,
          "nullable": true,
          "inputtype": "checkbox"
        },{
            "name": "REC_EXCAVATION",
            "type": "esriFieldTypeString",
            "alias": "Recommendation - Excavation",
            "length": 1,
            "nullable": true,
            "inputtype": "checkbox"
        },{
          "name": "REC_ARCHIVAL",
          "type": "esriFieldTypeString",
          "alias": "Recommendation - Archival",
          "length": 1,
          "nullable": true,
          "inputtype": "checkbox"
        },{
            "name": "REC_NONE",
            "type": "esriFieldTypeString",
            "alias": "Recommendation - None",
            "length": 1,
            "nullable": true,
            "inputtype": "checkbox"
        },{
          "name": "REC_OTHER",
          "type": "esriFieldTypeString",
          "alias": "Recommendation - Other",
          "length": 1,
          "nullable": true,
          "inputtype": "checkbox"
        },{
            "name": "IMPACTZONE",
            "type": "esriFieldTypeSmallInteger",
            "alias": "IMPACTZONE",
            "nullable": true,
            "inputtype": "number"
        },{
          "name": "ARCHIVE",
          "type": "esriFieldTypeSmallInteger",
          "alias": "ARCHIVE",
          "nullable": true,
          "inputtype": "number"
        },{
            "name": "GROUPID",
            "type": "esriFieldTypeInteger",
            "alias": "GROUPID",
            "nullable": true,
            "inputtype": "number"
        },{
          "name": "HISTORICALARCHIVALDOC",
          "type": "esriFieldTypeSmallInteger",
          "alias": "Historical Archival Document",
          "nullable": true,
          "inputtype": "number"
        },{
            "name": "ARCHAEOLOGICALDOC",
            "type": "esriFieldTypeSmallInteger",
            "alias": "Archaeological Document",
            "nullable": true,
            "inputtype": "number"
        },{
          "name": "COLLECTIONSLOCATION",
          "type": "esriFieldTypeString",
          "alias": "Location Of Existing Collections",
          "length": 255,
          "nullable": true,
          "inputtype": "text"
        },{
            "name": "PHOTOLOCATION",
            "type": "esriFieldTypeString",
            "alias": "Location Of Photographs",
            "length": 255,
            "nullable": true,
            "inputtype": "text"
        },{
          "name": "SAMPLELOCATION",
          "type": "esriFieldTypeString",
          "alias": "Location Of Special Samples",
          "length": 255,
          "nullable": true,
          "inputtype": "text"
        },{
            "name": "SAMPLETYPE",
            "type": "esriFieldTypeString",
            "alias": "Type Of Special Samples",
            "length": 255,
            "nullable": true,
            "inputtype": "text"
        },{
          "name": "DST_PREHISTORIC",
          "type": "esriFieldTypeString",
          "alias": "DescriptiveSite_Prehistoric",
          "length": 500,
          "nullable": true,
          "inputtype": "text"
        },{
            "name": "DST_HISTORIC",
            "type": "esriFieldTypeString",
            "alias": "DescriptiveSite_Historic",
            "length": 500,
            "nullable": true,
            "inputtype": "text"
        },{
          "name": "OTHERMAPREFNOTES",
          "type": "esriFieldTypeString",
          "alias": "OtherMapRefNotes",
          "length": 500,
          "nullable": true,
          "inputtype": "text"
        },{
            "name": "OTHERSITEDESIGNATIONS",
            "type": "esriFieldTypeString",
            "alias": "OtherSiteDesignations",
            "length": 500,
            "nullable": true,
            "inputtype": "text"
        },{
          "name": "JUSTIFICATION",
          "type": "esriFieldTypeString",
          "alias": "Justification",
          "length": 1000,
          "nullable": true,
          "inputtype": "text"
        },{
            "name": "VEGCOMMENTS",
            "type": "esriFieldTypeString",
            "alias": "VegComments",
            "length": 500,
            "nullable": true,
            "inputtype": "textarea"
        },{
          "name": "CULTURALFEATURES",
          "type": "esriFieldTypeString",
          "alias": "CulturalFeatures",
          "length": 1000,
          "nullable": true,
          "inputtype": "text"
        },{
            "name": "GENERALSITEDESCRIPTION",
            "type": "esriFieldTypeString",
            "alias": "GeneralSiteDescription",
            "length": 1000,
            "nullable": true,
            "inputtype": "text"
        },{
          "name": "LOCATIONDESCRIPTION",
          "type": "esriFieldTypeString",
          "alias": "LocationDescription",
          "length": 1000,
          "nullable": true,
          "inputtype": "text"
        },{
            "name": "COLLECTIONCOMMENTS",
            "type": "esriFieldTypeString",
            "alias": "CollectionComments",
            "length": 500,
            "nullable": true,
            "inputtype": "textarea"
        },{
          "name": "EXCAVATIONCOMMENTS",
          "type": "esriFieldTypeString",
          "alias": "ExcavationComments",
          "length": 500,
          "nullable": true,
          "inputtype": "textarea"
        },{
            "name": "LANDUSECOMMENTS",
            "type": "esriFieldTypeString",
            "alias": "LandUseComments",
            "length": 500,
            "nullable": true,
            "inputtype": "textarea"
        },{
          "name": "DAMAGECOMMENTS",
          "type": "esriFieldTypeString",
          "alias": "DamageComments",
          "length": 500,
          "nullable": true,
          "inputtype": "textarea"
        },{
            "name": "THREATCOMMENTS",
            "type": "esriFieldTypeString",
            "alias": "ThreatComments",
            "length": 500,
            "nullable": true,
            "inputtype": "textarea"
        },{
          "name": "RECOMMENDCOMMENTS",
          "type": "esriFieldTypeString",
          "alias": "RecommendComments",
          "length": 1000,
          "nullable": true,
          "inputtype": "textarea"
        },{
            "name": "HISTORICALARCHIVALDOCNOTES",
            "type": "esriFieldTypeString",
            "alias": "HistoricalArchivalDocNotes",
            "length": 1000,
            "nullable": true,
            "inputtype": "text"
        },{
          "name": "ARCHAEOLOGICALDOCNOTES",
          "type": "esriFieldTypeString",
          "alias": "ArchaeologicalDocNotes",
          "length": 500,
          "nullable": true,
          "inputtype": "text"
        },{
            "name": "MANAGEMENTCOMMENTS",
            "type": "esriFieldTypeString",
            "alias": "ManagementComments",
            "length": 1000,
            "nullable": true,
            "inputtype": "textarea"
        },{
          "name": "SITEENTEREDINDBDATE",
          "type": "esriFieldTypeDate",
          "alias": "siteEnteredInDbDate",
          "length": 8,
          "nullable": true,
          "inputtype": "date"
        },{
            "name": "DETERMINATION",
            "type": "esriFieldTypeSmallInteger",
            "alias": "Eligibility Determination",
            "nullable": true,
            "inputtype": "number"
        },{
          "name": "DATEDETERMINED",
          "type": "esriFieldTypeDate",
          "alias": "Determination Date",
          "length": 8,
          "nullable": true,
          "inputtype": "date"
        },{
            "name": "ONNRHP",
            "type": "esriFieldTypeSmallInteger",
            "alias": "On NRHP",
            "nullable": true,
            "inputtype": "number"
        },{
          "name": "NRHPDATE",
          "type": "esriFieldTypeDate",
          "alias": "NRHP Date",
          "length": 8,
          "nullable": true,
          "inputtype": "date"
        },{
            "name": "REVISIT",
            "type": "esriFieldTypeString",
            "alias": "REVISIT",
            "length": 1,
            "nullable": true,
            "inputtype": "text"
        },{
          "name": "REVISITNUM",
          "type": "esriFieldTypeSmallInteger",
          "alias": "Revisit Number",
          "nullable": true,
          "inputtype": "number"
        },{
            "name": "RECORD_OWNER",
            "type": "esriFieldTypeString",
            "alias": "RECORD_OWNER",
            "length": 40,
            "nullable": true,
            "inputtype": "text"
        },{
          "name": "EDIT_DATE_FROM",
          "type": "esriFieldTypeDate",
          "alias": "EDIT_DATE_FROM",
          "length": 8,
          "nullable": true,
          "inputtype": "date"
        },{
            "name": "EDIT_DATE_TO",
            "type": "esriFieldTypeDate",
            "alias": "EDIT_DATE_TO",
            "length": 8,
            "nullable": true,
            "inputtype": "date"
        },{
          "name": "GEO_VALID",
          "type": "esriFieldTypeString",
          "alias": "GEO_VALID",
          "length": 1,
          "nullable": true,
          "inputtype": "text"
        },{
            "name": "STATUS",
            "type": "esriFieldTypeString",
            "alias": "STATUS",
            "length": 1,
            "nullable": true,
            "inputtype": "text"
        }
]
    
});