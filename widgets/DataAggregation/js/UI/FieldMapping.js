// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/DataAggregation/js/UI/templates/FieldMapping.html":'\x3cdiv class\x3d"pad-left-5 no-select"\x3e\r\n  \x3ctable class\x3d"page-table" cellpading\x3d"0"\x3e\r\n    \x3ctbody\x3e\r\n      \x3ctr\x3e\r\n        \x3ctd class\x3d"panel-title-td"\x3e\r\n          \x3cdiv class\x3d"panel-title-text" tabindex\x3d"0" role\x3d"region" aria-label\x3d"${nls.mapping.schemaMapping}${nls.fieldMapping.fieldMappingPageHint}"\x3e\r\n            ${nls.mapping.schemaMapping}\x3c/div\x3e\r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n      \x3ctr class\x3d"task-instruction-row bottom-border-bold"\x3e\r\n        \x3ctd colspan\x3d"2" class\x3d"panel-title-hint-td"\x3e\r\n          \x3cdiv class\x3d"instruction"\x3e${nls.fieldMapping.fieldMappingPageHint}\x3c/div\x3e\r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n      \x3ctr\x3e\r\n        \x3ctd class\x3d"pad-top-10"\x3e\r\n          \x3cdiv data-dojo-attach-point\x3d"fieldMappingTable"\x3e\x3c/div\x3e\r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n    \x3c/tbody\x3e\r\n  \x3c/table\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/dom-construct dojo/dom-class dojo/Deferred dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/Evented dojo/text!./templates/FieldMapping.html jimu/dijit/SimpleTable jimu/dijit/formSelect".split(" "),function(m,d,g,n,h,k,p,q,r,t,u,v,w){return m([p,q,r,t],{baseClass:"cf-field-mapping",declaredClass:"CriticalFacilities.FieldMapping",templateString:u,_started:null,label:"FieldMapping",parent:null,nls:null,map:null,
appConfig:null,config:null,targetFields:[],sourceFields:[],_fieldsTable:null,theme:"",styleColor:"",constructor:function(a){d.mixin(this,a)},postCreate:function(){this.inherited(arguments);this._initFieldsTable();this._initFields(this.targetFields)},startup:function(){this._started=!0;this._updateAltIndexes()},targetLayerUpdate:function(a,b){this._fieldsTable.clear();this.parent._fieldMappingComplete=!1;this.emit("field-mapping-update",!1);this.targetFields=a;this.sourceFields=b;this._initFields(this.targetFields)},
onShown:function(){this.pageContainer.nextDisabled=!1},_updateAltIndexes:function(){this.pageContainer&&!this._startPageView&&(this._startPageView=this.pageContainer.getViewByTitle("StartPage"))&&(this.altBackIndex=this.altNextIndex=this._startPageView.index)},validate:function(a,b){var c=new k;"next-view"===a?c.resolve(this._nextView(b)):"back-view"===a?c.resolve(this._backView(b)):this._homeView(b).then(function(a){c.resolve(a)});return c},_nextView:function(a){if(a.currentView.label===this.label){var b=
this._getResults(),c=!1;a=Object.keys(b.results).map(function(a){return b.results[a]});g.forEach(a,function(a){"undefined"!==typeof a&&null!==a&&""!==a&&(c=!0)});this.parent._fieldMappingComplete=c;this.emit("field-mapping-update",c,b.results)}return!0},_backView:function(a){a.currentView.label===this.label&&(this.parent._fieldMappingComplete=!1,this.emit("field-mapping-update",!1));return!0},_homeView:function(a){var b=new k;this.pageContainer.getViewByTitle("Home").verifyClearSettings(a).then(function(a){b.resolve(a)});
return b},_initFieldsTable:function(){var a=[{name:"targetField",type:"extension",hidden:!0,create:d.hitch(this,this._createTargetField),setValue:d.hitch(this,this._setTargetFieldValue),getValue:d.hitch(this,this._getTargetFieldValue)},{name:"target",title:this.nls.fieldMapping.targetField,type:"text","class":"task-instruction-row"},{name:"label",title:this.nls.fieldMapping.sourceField,type:"extension",hidden:!1,create:d.hitch(this,this._createSelect),setValue:d.hitch(this,this._setSelectValue),getValue:d.hitch(this,
this._getSelectValue)}];this._fieldsTable=new v({fields:a,selectable:!1,autoHeight:!0,_rowHeight:"LaunchpadTheme"===this.appConfig.theme.name?36:30});this._fieldsTable.placeAt(this.fieldMappingTable);this._fieldsTable.startup()},_setTargetFieldValue:function(a,b){a.targetField=b},_getTargetFieldValue:function(a){return a.targetField},_createSelect:function(a){var b=a.parentNode.cells[0].targetField,c=new w({style:{display:"table",width:"100%",height:"28px"},"aria-label":b.label}),l=this._getSupportedFields(this.sourceFields,
b.type,b.length),e=[{label:this.nls.warningsAndErrors.noValue,value:this.nls.warningsAndErrors.noValue}],f=this._getDefaultFieldName(l,b);g.forEach(l,function(a){e.push({label:a.label,value:a.value,selected:f===a.value})});c.addOption(e);a.fieldsSelect=c;n.place(c.domNode,a);h.add(a,"float-left");h.add(a,"width-all");this.lastFieldSelect=c.domNode},_getSelectValue:function(a){return a.fieldsSelect.get("value")},_setSelectValue:function(a,b){a.fieldsSelect.set("value",b)},_initFields:function(a){g.forEach(a,
d.hitch(this,function(a){this._fieldsTable.addRow({target:a.label,targetField:a})}))},_getSupportedFields:function(a,b,c){return a.filter(function(a){if(a.type){var e=a.type.supportsInt,f=a.type.supportsFloat,d=a.type.supportsDate;a=a.type.maxLength;return"date"!==b&&a>c?!1:"other"===b||"domain"===b?!0:"int"===b||"domainInt"===b?e:"float"===b?f:"date"===b?d:!1}return!1})},_getDefaultFieldName:function(a,b){b=b.isRecognizedValues;for(var c=0;c<b.length;c++)for(var d=b[c],e=0;e<a.length;e++){var f=
a[e];if(f.value.toString().toUpperCase()===d.toString().toUpperCase())return f.value}},setStyleColor:function(a){this.styleColor=a},updateImageNodes:function(){},_getResults:function(){var a=this._fieldsTable.getRows(),b={},c=this.nls.warningsAndErrors.noValue,d=!1,e;g.forEach(a,function(a){var f=a.cells[2].fieldsSelect.getValue();f!==c?(a=a.cells[0].targetField.name,b[a]=f,d||(e=a,d=!0)):b[a.cells[0].targetField.name]=void 0});return{results:b,labelField:e}}})});