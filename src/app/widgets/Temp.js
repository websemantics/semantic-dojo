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
        "dijit/layout/BorderContainer"

 ], function (declare, dojo, registry, WidgetBase, TemplatedMixin,WidgetsInTemplateMixin, 
 	template, Select, VerticalSlider, CheckBox,RadioButton, HorizontalSlider, 
 	HorizontalRule,HorizontalRuleLabels,TextBox, Textarea, ValidationTextBox, 
 	ContentPane, TabContainer,DropDownButton,TooltipDialog,Tooltip, Form, 
 	ColorPalette, ProgressBar, BorderContainer) {
	return declare([WidgetBase, TemplatedMixin, WidgetsInTemplateMixin], {
    templateString: template,
    widgetsInTemplate: true,

    postCreate: function () {
      
      this.inherited(arguments);
     
      // ----------------------------------------------------
      // Create Tabs
      // ----------------------------------------------------
    
      var tcpnestedBottom1 = new ContentPane({
          title: "Tab 1",
          content: "&nbsp;&nbsp;Nested tab container(bottom)"
      });
      var tcpnestedBottom2 = new ContentPane({
          title: "Tab 2"
      });
      var tcpnestedBottom3 = new ContentPane({
          title: "Tab 3"
      });
      var tcnestedBottom = new TabContainer({
          tabPosition: "top",
          nested: true
      });
      tcnestedBottom.addChild(tcpnestedBottom1);
      tcnestedBottom.addChild(tcpnestedBottom2);
      tcnestedBottom.addChild(tcpnestedBottom3);

      tcnestedBottom.startup();

      var tcbp1 = new ContentPane({title: "Tab 1",content: tcnestedBottom});
      var tcbp2 = new ContentPane({title: "Tab2"});
      var tcbp3 = new ContentPane({title: "Tab 3"});
      var tcbp4 = new ContentPane({title: "Tab 4"});
      var tcbp5 = new ContentPane({title: "Tab 5"});
      var tcb 	= new TabContainer({
        region : 'center',
        tabPosition: "top"},this.tabContainer);

      tcb.addChild(tcbp1);
      tcb.addChild(tcbp2);
      tcb.addChild(tcbp3);
      tcb.addChild(tcbp4);
      tcb.addChild(tcbp5);

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