/**
 * Main Widget
 *
 * For development of individual widgets purposes only
 *
 * @link      http://websemantics.ca/ibuild
 * @link      http://ibuild.io
 * @author    WebSemantics, Inc. <info@websemantics.ca>
 * @author    Adnan Sagar, PhD <adnan@websemantics.ca>
 * @copyright 2012-2015 Web Semantics, Inc.
 * @since     August 28th 2015
 * @package   SemanticDojo\Main
*/

define(["dojo/_base/declare", 
				"dojo",
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
				"dijit/TooltipDialog",
				"dijit/Tooltip",
				"dijit/form/Form",
				"dijit/ColorPalette",
				"dijit/ProgressBar",
        "dijit/layout/BorderContainer",
        "dijit/Tree",
        "dijit/tree/ForestStoreModel",
        "dojo/data/ItemFileWriteStore"

 ], function (declare, dojo, registry, WidgetBase, TemplatedMixin,WidgetsInTemplateMixin, 
 	template, Select, VerticalSlider, CheckBox,RadioButton, HorizontalSlider, 
 	HorizontalRule,HorizontalRuleLabels,TextBox, Textarea, ValidationTextBox, 
 	ContentPane, TabContainer,DropDownButton,TooltipDialog,Tooltip, Form, 
 	ColorPalette, ProgressBar, BorderContainer, Tree, ForestStoreModel, ItemFileWriteStore) {
	return declare([WidgetBase, TemplatedMixin, WidgetsInTemplateMixin], {
    templateString: template,
    widgetsInTemplate: true,

    postCreate: function () {
      
      this.inherited(arguments);
     
   
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