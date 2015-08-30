/**
 * Main Widget
 *
 * Contains index.html content
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
        "dojo/text!../template/main.html",
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
				"dijit/ProgressBar"

 ], function (declare, dojo, registry, WidgetBase, TemplatedMixin,WidgetsInTemplateMixin, 
 	template, Select, VerticalSlider, CheckBox,RadioButton, HorizontalSlider, 
 	HorizontalRule,HorizontalRuleLabels,TextBox, Textarea, ValidationTextBox, 
 	ContentPane, TabContainer,DropDownButton,TooltipDialog,Tooltip, Form, 
 	ColorPalette, ProgressBar) {
	return declare([WidgetBase, TemplatedMixin, WidgetsInTemplateMixin], {
    templateString: template,
    widgetsInTemplate: true,

    postCreate: function () {
      
      this.inherited(arguments);
      // ----------------------------------------------------
      // Colored Vertical Sliders
      // ----------------------------------------------------

      var colors = ['red','orange','yellow','olive','green','teal','blue','violet','purple','pink','brown','grey','black'];
          for (var i = 0; i < colors.length; i++) {
              var color = colors[i];
              new VerticalSlider({
              name: "default vertical slider",
              'class': color ,value: Math.floor((Math.random() * 100) + 1),
              intermediateChanges: true,
              style: "margin:10px 30px 10px 10px;height:240px;float:left",
              showButtons: false
          }, this['vs_' + (i+1)]);
      }

      // ----------------------------------------------------
      // Create Horizontal Sliders
      // ----------------------------------------------------

      new HorizontalSlider({
          name: "default horizontal slider",
          value: 50, 'class' : 'orange',
          style: "margin:10px 10px 30px",
          showButtons:false
      }, this["hs_1"]);

      var sliderRulesH = new HorizontalRule({
          count: 11,
          style: { height: "5px" }
      });

      var sliderRuleLabelsH = new HorizontalRuleLabels({
          labels: ["low", "mid", "high"]
      });

      var horizontalSliderAdvanced = new HorizontalSlider({
          name: "default horizontal slider",
          value: 50, 'class' : 'yellow',
          style: "margin:10px 10px 30px"
      }, this["hs_2"]);

      sliderRulesH.placeAt(horizontalSliderAdvanced.containerNode);
      sliderRuleLabelsH.placeAt(horizontalSliderAdvanced.containerNode); 

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
      var tcb 	= new TabContainer({style: "height: 200px; width: 100%;",
          tabPosition: "top"}, this["tabContainer"]);

      tcb.addChild(tcbp1);
      tcb.addChild(tcbp2);
      tcb.addChild(tcbp3);
      tcb.addChild(tcbp4);
      tcb.addChild(tcbp5);
      tcb.startup();

      // ----------------------------------------------------
      // Create Tooltip
      // ----------------------------------------------------
      new Tooltip({
        connectId: this['tooltipAbove'],
        label: "tooltip: above",
        position: ['above']
      });
      new Tooltip({
        connectId: this['tooltipAboveCentered'],
        label: "tooltip: above centered",
        position: ['above-centered']
      });
      new Tooltip({
        connectId: this['tooltipBelow'],
        label: "tooltip: below",
        position: ['below']
      });
      new Tooltip({
        connectId: this['tooltipBelowCentered'],
        label: "tooltip: below centered",
        position: ['below-centered']
      });
      new Tooltip({
        connectId: this['tooltipBefore'],
        label: "tooltip: before",
        position: ['before']
      });
      new Tooltip({
        connectId: this['tooltipAfter'],
        label: "tooltip: after",
        position: ['after']
      });
      
      // ----------------------------------------------------
      // Create Tooltip Dialog
      // ----------------------------------------------------

      var tooltipDialog1 = new TooltipDialog({
        content:  '<form style="padding:5px 0px" data-dojo-type="dijit/form/Form">This tooltip dialog has an action bar.<br/><br/>' +
                          '<div class="dijitDialogPaneActionBar">' +
                          '<div class="ui buttons tiny">' +
                          '<button class="ui button" data-dojo-type="dijit/form/Button" type="reset">Cancel</button>' +
                          '<div class="or"></div>' + 
                          '<button class="ui positive button" data-dojo-type="dijit/form/Button" type="submit">Save</button></div></form>' + 
                          '</div>'
      });

      this['tooltipdialogButton1'].set("dropDown", tooltipDialog1);

      var tooltipDialog2 = new TooltipDialog({
        content: '<span><br/>This is the content.<br/><br/></span>'
      });

      this['tooltipdialogButton2'].set("dropDown", tooltipDialog2);

      var tooltipDialog3 = new TooltipDialog({
        content: '<form style="padding:5px 0px" data-dojo-type="dijit/form/Form">This tooltip dialog has an action bar.<br/><br/>' +
                          '<div class="dijitDialogPaneActionBar">' +
                          '<div class="ui buttons tiny">' +
                          '<button class="ui button" data-dojo-type="dijit/form/Button" type="reset">Reset</button>' +
                          '<div class="or"></div>' + 
                          '<button class="ui primary button" data-dojo-type="dijit/form/Button" type="submit">Login</button></div></form>' + 
                          '</div>'
      });

      this['tooltipdialogButton3'].set("dropDown", tooltipDialog3);

      var tooltipDialog4 = new TooltipDialog({
        content: '<span><br/>This is the content.<br/><br/></span>'
      });
      this['tooltipdialogButton4'].set("dropDown", tooltipDialog4);

      // ---------------------------------------------------------------
			// Remove loading ...
      // ---------------------------------------------------------------
			dojo.destroy("loading");

		  // ----------------------------------------------------
		  // Semantic UI
		  // ----------------------------------------------------
		  $('.ui.checkbox').checkbox();
		  $('.ui.radio.checkbox').checkbox();
		  $('.dropdown').dropdown({transition: 'drop'});
		  $('.menu .item').tab();
		  $('.ui.accordion').accordion();
		  $('.popup').popup({on: 'hover'});

		}/*,
		startup: function () {
			this.inherited(arguments);

		}*/
	});
});