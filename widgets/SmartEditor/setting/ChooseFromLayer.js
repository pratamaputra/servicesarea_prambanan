// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/SmartEditor/setting/ChooseFromLayer.html":'\x3cdiv data-dojo-attach-point\x3d"layerSelectorPopUpDiv" class\x3d"esriCTlayerSelectorPopUpDiv"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"layerSelectorWrapper" class\x3d"esriCTWrapper"\x3e\r\n        \x3cdiv class\x3d"esriCTPopUpLabel"\x3e${nls.layersPage.layerSettingsTable.label}\r\n        \x3c/div\x3e\r\n        \x3cdiv class\x3d"esriCTPopupSelect"\x3e\r\n            \x3cdiv class\x3d"esriCTLayerSelect" style\x3d"width: 100%" data-dojo-attach-point\x3d"layerSelectorDiv"\x3e\r\n            \x3c/div\x3e\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"esriCTWrapper"\x3e\r\n        \x3cdiv class\x3d"esriCTPopUpLabel"\x3e${nls.chooseFromLayer.fieldLabel}\x3c/div\x3e\r\n        \x3cdiv class\x3d"esriCTPopupSelect"\x3e\r\n            \x3cdiv class\x3d"esriCTlayerField" style\x3d"width: 100%" data-dojo-attach-point\x3d"fieldsDropdownDiv"\x3e\r\n            \x3c/div\x3e\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"esriCTWrapper"\x3e\r\n        \x3cdiv class\x3d"esriCTPopUpLabel"\x3e${nls.chooseFromLayer.valueLabel}\x3c/div\x3e\r\n        \x3cdiv class\x3d"esriCTPopupSelect"\x3e\r\n            \x3cdiv class\x3d"esriCTlayerFieldvalue" style\x3d"width: 100%" data-dojo-attach-point\x3d"valueProviderContainer"\x3e\r\n            \x3c/div\x3e\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/on dojo/text!./ChooseFromLayer.html dijit/_TemplatedMixin jimu/BaseWidgetSetting jimu/dijit/Popup dijit/form/Select jimu/dijit/LayerChooserFromMap jimu/dijit/LayerChooserFromMapWithDropbox jimu/dijit/_filter/ValueProviderFactory dojo/Evented".split(" "),function(h,d,f,g,k,l,m,n,p,c,q,r,t){return h([m,t,l],{baseClass:"jimu-widget-smartEditor-setting-chooseFromLayer",templateString:k,layerSelector:null,fieldsDropdown:null,chooseFromLayerPopup:null,
valueProviderFactory:null,valueProvider:null,_isFirsTime:!0,postCreate:function(){this.inherited(arguments);this._createPopUp()},_addLayerSelectors:function(){var a,b;a=this._createLayerChooserMapArgs();a=new c(a);a.startup();this.layerSelector=new q({layerChooser:a});this.layerSelector.placeAt(this.layerSelectorDiv);this.layerSelector.startup();0<this.layerSelector.layerChooser.getAllItems().length&&(b=this.layerSelector.layerChooser.getAllItems()[0].layerInfo.layerObject);this.chooseFromLayerInfo&&
this.chooseFromLayerInfo.layerId&&this._isFirsTime&&(a=this.layerInfos.getLayerInfoById(this.chooseFromLayerInfo.layerId))&&(b=a.layerObject);this.layerSelector.setSelectedLayer(b);this._addLayerFieldsOptions()},_createLayerChooserMapArgs:function(){return{multiple:!1,createMapResponse:this.map.webMapResponse,filter:this._createFiltersForLayerSelector()}},_createFiltersForLayerSelector:function(){var a,b;a=c.createFeaturelayerFilter(["point","polyline","polygon"],!1,!1);b=c.createImageServiceLayerFilter(!0);
return c.orCombineFilters([a,b])},_addLayerFieldsOptions:function(){this.fieldsDropdown&&this.fieldsDropdown.destroy();this.valueProviderFactory&&(this.valueProviderFactory=null);this.valueProvider&&this.valueProvider.destroy();this.fieldsDropdown=new p({style:{width:"100%"}});this.fieldsDropdown.placeAt(this.fieldsDropdownDiv);this.fieldsDropdown.startup();this.fieldsDropdown.set("options",this._createFieldsDropDownOpt());this.fieldsDropdown.options&&0<this.fieldsDropdown.options.length&&this.fieldsDropdown.set("value",
this.fieldsDropdown.options[0]);this.chooseFromLayerInfo&&this.chooseFromLayerInfo.field&&this._isFirsTime&&this.fieldsDropdown.set("value",this.chooseFromLayerInfo.field);this.own(g(this.fieldsDropdown,"change",d.hitch(this,function(){this._createValueProvider()})))},_createFieldsDropDownOpt:function(){var a,b;b=[];this.layerSelector.getSelectedItem()&&(a=this.layerSelector.getSelectedItem().layerInfo.layerObject,f.forEach(a.fields,d.hitch(this,function(a){"esriFieldTypeString"!==this.dataType&&
("esriFieldTypeGUID"!==this.dataType||a.type!==this.dataType&&"esriFieldTypeGlobalID"!==a.type)&&("esriFieldTypeInteger"!==this.dataType||"esriFieldTypeSmallInteger"!==a.type&&"esriFieldTypeInteger"!==a.type&&"esriFieldTypeDouble"!==a.type&&"esriFieldTypeSingle"!==a.type&&"esriFieldTypeOID"!==a.type)||b.push({label:a.alias||a.name,value:a.name})})));return b},_createValueProvider:function(){var a;this.layerSelector&&(a=this.layerSelector.getSelectedItem());if(a&&a.layerInfo&&a.layerInfo.layerObject){a=
a.layerInfo;var b=a.layerObject;this.valueProviderFactory&&(this.valueProviderFactory=null);this.valueProvider&&this.valueProvider.destroy();this.valueProviderFactory=new r({url:b.url,layerDefinition:b,featureLayerId:a.id});var c,e;e=this.fieldsDropdown.getValue();f.some(b.fields,d.hitch(this,function(a){if(a.name===e)return c=a,!0}));if(e&&c){switch(c.type){case "esriFieldTypeString":a="string";b="stringOperatorIs";break;case "esriFieldTypeDate":a="date";b="dateOperatorIsOn";break;default:a="number",
b="numberOperatorIs"}a={fieldObj:{name:e,label:e,dateFormat:"",shortType:a,type:c.type},operator:b,interactiveObj:"",caseSensitive:!1,valueObj:{type:"unique"}};if(this.valueProvider=this.valueProviderFactory.getValueProvider(a,!1))this.valueProvider.placeAt(this.valueProviderContainer),this.valueProvider.setValueObject(a.valueObj),this.chooseFromLayerInfo&&this.chooseFromLayerInfo.selectedValue&&this._isFirsTime&&(this.valueProvider.checkedNameDiv.innerHTML=this.chooseFromLayerInfo.selectedValue)}}},
_createPopUp:function(){this._addLayerSelectors();this.chooseFromLayerPopup=new n({titleLabel:this.nls.chooseFromLayer.selectValueLabel,width:500,maxHeight:300,autoHeight:!0,"class":this.baseClass,content:this,buttons:[{label:this.nls.ok,onClick:d.hitch(this,function(){this._getSelectedFieldValue();this.chooseFromLayerPopup.close()})},{label:this.nls.cancel,classNames:["jimu-btn-vacation"],onClick:d.hitch(this,function(){this.emit("cancelButtonClicked");this.chooseFromLayerPopup.close()})}]});this.own(g(this.layerSelector,
"selection-change",d.hitch(this,function(){this._addLayerFieldsOptions()})));setTimeout(d.hitch(this,function(){this._isFirsTime=!1}),100)},_getSelectedFieldValue:function(){var a;this.valueProvider&&this.valueProvider.checkedNameDiv&&((a=this.valueProvider.checkedNameDiv.innerHTML)&&"- empty -"===a&&(a=""),this.emit("updatePresetValue",{layerId:this.layerSelector.getSelectedItem().layerInfo.layerObject.id,field:this.fieldsDropdown.getValue(),selectedValue:a}))}})});