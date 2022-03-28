var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_DangerositduQuartier_1 = new ol.format.GeoJSON();
var features_DangerositduQuartier_1 = format_DangerositduQuartier_1.readFeatures(json_DangerositduQuartier_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DangerositduQuartier_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DangerositduQuartier_1.addFeatures(features_DangerositduQuartier_1);
var lyr_DangerositduQuartier_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DangerositduQuartier_1, 
                style: style_DangerositduQuartier_1,
                interactive: true,
    title: 'Dangerosité du Quartier<br />\
    <img src="styles/legend/DangerositduQuartier_1_0.png" /> 0 - 1 <br />\
    <img src="styles/legend/DangerositduQuartier_1_1.png" /> 1 - 2 <br />\
    <img src="styles/legend/DangerositduQuartier_1_2.png" /> 2 - 3 <br />'
        });
var format_btibnficiantdeprotection_2 = new ol.format.GeoJSON();
var features_btibnficiantdeprotection_2 = format_btibnficiantdeprotection_2.readFeatures(json_btibnficiantdeprotection_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_btibnficiantdeprotection_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_btibnficiantdeprotection_2.addFeatures(features_btibnficiantdeprotection_2);
var lyr_btibnficiantdeprotection_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_btibnficiantdeprotection_2, 
                style: style_btibnficiantdeprotection_2,
                interactive: true,
                title: '<img src="styles/legend/btibnficiantdeprotection_2.png" /> bâti bénéficiant de protection'
            });
var format_delimitationquartier_3 = new ol.format.GeoJSON();
var features_delimitationquartier_3 = format_delimitationquartier_3.readFeatures(json_delimitationquartier_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_delimitationquartier_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_delimitationquartier_3.addFeatures(features_delimitationquartier_3);
var lyr_delimitationquartier_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_delimitationquartier_3, 
                style: style_delimitationquartier_3,
                interactive: true,
                title: '<img src="styles/legend/delimitationquartier_3.png" /> delimitationquartier'
            });

lyr_OSMStandard_0.setVisible(true);lyr_DangerositduQuartier_1.setVisible(true);lyr_btibnficiantdeprotection_2.setVisible(true);lyr_delimitationquartier_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_DangerositduQuartier_1,lyr_btibnficiantdeprotection_2,lyr_delimitationquartier_3];
lyr_DangerositduQuartier_1.set('fieldAliases', {'INSEE_COM': 'INSEE_COM', 'NOM_COM': 'NOM_COM', 'DANGER': 'DANGER', 'CODE_IRIS': 'CODE_IRIS', 'NOM_IRIS': 'NOM_IRIS', 'TYP_IRIS': 'TYP_IRIS', });
lyr_btibnficiantdeprotection_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID_PRESP': 'ID_PRESP', 'ID_DOCU': 'ID_DOCU', 'TYPEPSC': 'TYPEPSC', 'STYPEPSC': 'STYPEPSC', 'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'DATVALID': 'DATVALID', 'ATTCOMP': 'ATTCOMP', 'INSEE': 'INSEE', 'ETIQUETTE': 'ETIQUETTE', });
lyr_delimitationquartier_3.set('fieldAliases', {'INSEE_COM': 'INSEE_COM', 'NOM_COM': 'NOM_COM', 'IRIS': 'IRIS', 'CODE_IRIS': 'CODE_IRIS', 'NOM_IRIS': 'NOM_IRIS', 'TYP_IRIS': 'TYP_IRIS', });
lyr_DangerositduQuartier_1.set('fieldImages', {'INSEE_COM': 'TextEdit', 'NOM_COM': 'TextEdit', 'DANGER': 'Range', 'CODE_IRIS': 'TextEdit', 'NOM_IRIS': 'TextEdit', 'TYP_IRIS': 'TextEdit', });
lyr_btibnficiantdeprotection_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'ID_PRESP': 'Range', 'ID_DOCU': 'Range', 'TYPEPSC': 'TextEdit', 'STYPEPSC': 'TextEdit', 'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'DATVALID': 'DateTime', 'ATTCOMP': 'TextEdit', 'INSEE': 'TextEdit', 'ETIQUETTE': 'TextEdit', });
lyr_delimitationquartier_3.set('fieldImages', {'INSEE_COM': 'TextEdit', 'NOM_COM': 'TextEdit', 'IRIS': 'TextEdit', 'CODE_IRIS': 'TextEdit', 'NOM_IRIS': 'TextEdit', 'TYP_IRIS': 'TextEdit', });
lyr_DangerositduQuartier_1.set('fieldLabels', {'INSEE_COM': 'no label', 'NOM_COM': 'no label', 'DANGER': 'no label', 'CODE_IRIS': 'no label', 'NOM_IRIS': 'header label', 'TYP_IRIS': 'no label', });
lyr_btibnficiantdeprotection_2.set('fieldLabels', {'OBJECTID': 'header label', 'ID_PRESP': 'header label', 'ID_DOCU': 'no label', 'TYPEPSC': 'header label', 'STYPEPSC': 'no label', 'LIBELLE': 'header label', 'TXT': 'no label', 'NOMFIC': 'inline label', 'URLFIC': 'no label', 'DATVALID': 'no label', 'ATTCOMP': 'no label', 'INSEE': 'no label', 'ETIQUETTE': 'no label', });
lyr_delimitationquartier_3.set('fieldLabels', {'INSEE_COM': 'no label', 'NOM_COM': 'no label', 'IRIS': 'header label', 'CODE_IRIS': 'no label', 'NOM_IRIS': 'no label', 'TYP_IRIS': 'header label', });
lyr_delimitationquartier_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});