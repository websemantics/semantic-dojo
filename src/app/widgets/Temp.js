/**
 * Main Widget
 *
 * For development of individual widgets purposes only
 *
 * @link      http://websemantics.ca/ibuild
 * @link      http://ibuild.io
 * @author    WebSemantics, Inc. <info@websemantics.ca>
 * @author    Adnan M.Sagar, PhD. <adnan@websemantics.ca>
 * @copyright 2012-2015 Web Semantics, Inc.
 * @since     August 28th 2015
 * @package   SemanticDojo\Main
*/

define(["dojo/_base/declare", 
		"dojo",
		"dojo/on",
		"dojo/dom",
		"dijit/registry",
        "dijit/_WidgetBase",
        "dijit/_TemplatedMixin",
        "dijit/_WidgetsInTemplateMixin",
        "dojo/text!../template/temp.html",
		"dijit/form/Select",
		"dijit/form/VerticalSlider",
		"dijit/form/CheckBox",
		"dijit/form/RadioButton",
		"dijit/form/HorizontalSlider",
		"dijit/form/HorizontalRule", 
		"dijit/form/HorizontalRuleLabels",
		"dijit/form/TextBox",
		"dijit/form/Textarea",
		"dijit/form/ValidationTextBox",
		"dijit/layout/ContentPane",
		"dijit/layout/TabContainer",
		"dijit/form/DropDownButton",
		"dijit/DropDownMenu",
		"dijit/MenuItem",
		"dijit/TooltipDialog",
		"dijit/Tooltip",
		"dijit/form/Form",
		"dijit/ColorPalette",
		"dijit/ProgressBar",
        "dijit/layout/BorderContainer",
        "dijit/Tree",
        "dijit/tree/ForestStoreModel",
        "dojo/data/ItemFileWriteStore"

 ], function (declare, dojo, on, dom, registry, WidgetBase, TemplatedMixin,WidgetsInTemplateMixin, 
 	template, Select, VerticalSlider, CheckBox,RadioButton, HorizontalSlider, 
 	HorizontalRule,HorizontalRuleLabels,TextBox, Textarea, ValidationTextBox, 
 	ContentPane, TabContainer,DropDownButton, DropDownMenu, MenuItem, TooltipDialog,Tooltip, Form, 
 	ColorPalette, ProgressBar, BorderContainer, Tree, ForestStoreModel, ItemFileWriteStore) {
	return declare([WidgetBase, TemplatedMixin, WidgetsInTemplateMixin], {

    templateString: template,

    widgetsInTemplate: true,

    postCreate: function () {
      
      	this.inherited(arguments);




 
/*

       var tooltipDialog2 = new TooltipDialog({
        content: '\
			<div class="ui vertical menu">\
			  <a class="active teal item">\
			    Inbox\
			    <div class="ui teal pointing left label">1</div>\
			  </a>\
			  <a class="item">\
			    Spam\
			    <div class="ui label">51</div>\
			  </a>\
			  <a class="item">\
			    Updates\
			    <div class="ui label">1</div>\
			  </a>\
			  <div class="item">\
			    <div class="ui transparent icon input">\
			      <input type="text" placeholder="Search mail...">\
			      <i class="search icon"></i>\
			    </div>\
			  </div>\
			</div>\
        '
      });

      this['tooltipdialogButton2'].set("dropDown", tooltipDialog2);

*/




	 //    var menu = new DropDownMenu({ style: "display: none;"});
	 //    var menuItem1 = new MenuItem({
	 //        label: "Save",
	 //        iconClass:"dijitEditorIcon dijitEditorIconSave",
	 //        onClick: function(){ alert('save'); }
	 //    });
	 //    menu.addChild(menuItem1);

	 //    var menuItem2 = new MenuItem({
	 //        label: "Cut",
	 //        iconClass:"dijitEditorIcon dijitEditorIconCut",
	 //        onClick: function(){ alert('cut'); }
	 //    });

	 //    menu.addChild(menuItem2);
	 //    menu.startup();

	 //    var button = new DropDownButton({
	 //        label: "hello!",
	 //        name: "programmatic2",
	 //        dropDown: menu,
	 //        id: "progButton"
	 //    }).startup();

		// this['dropDownButtonContainer'].appendChild(button.domNode);

		// ---------------------------------------------------------------
		// Remove loading ...
		// ---------------------------------------------------------------
		dojo.destroy("loading");

		},
		startup: function () {
			this.inherited(arguments);
		}
	});
});