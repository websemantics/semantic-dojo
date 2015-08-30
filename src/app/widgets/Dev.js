/**
 * Dev Widget
 *
 * Contains a list of all dijit supported widgets and their semantic ui conterparts 
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
        "dojo/dom",
        "dojo/query",
        "dojo/dom-construct",
        "dijit/_WidgetBase",
        "dijit/_TemplatedMixin",
        "dijit/_WidgetsInTemplateMixin",
        "dojo/text!../template/dev.html",
        "dojo/_base/lang",
        "dojo/aspect",
        "dojo/dnd/Source",
        "dijit/layout/BorderContainer",
        "dijit/layout/TabContainer",
        "dijit/layout/AccordionContainer",
        "dijit/layout/ContentPane",
        "dijit/form/ValidationTextBox",
        "dijit/form/NumberTextBox",
        "dijit/form/CurrencyTextBox",
        "dijit/form/TimeTextBox",
        "dijit/form/Textarea",
        "dijit/form/Button",
        "dijit/form/ToggleButton",
        "dijit/form/DropDownButton",
        "dijit/form/CheckBox",
        "dijit/form/RadioButton",
        "dijit/form/Select",
        "dijit/form/ComboBox",
        "dijit/form/MultiSelect",
        "dijit/form/ComboButton",
        "dijit/form/DateTextBox",
        "dijit/form/HorizontalSlider",
        "dijit/form/VerticalSlider",
        "dijit/form/HorizontalRule",
        "dijit/form/VerticalRule",
        "dijit/form/HorizontalRuleLabels",
        "dijit/form/VerticalRuleLabels", 
        "dijit/form/NumberSpinner",
        "dijit/form/TextBox",
        "dijit/Menu",
        "dijit/MenuItem",
        "dijit/TooltipDialog",
        "dijit/ProgressBar",
        "dijit/Dialog",
        "dijit/Tooltip",
        "dijit/MenuBar",
        "dijit/MenuBarItem",
        "dijit/form/Form",
        "dijit/MenuSeparator",
        "dijit/PopupMenuItem",
        "dijit/PopupMenuBarItem",
        "dijit/DropDownMenu",
        "dijit/CheckedMenuItem",
        "dijit/ColorPalette",
        "dijit/TitlePane",
        "dijit/Tree",
        "dijit/tree/ObjectStoreModel",
        "dijit/tree/dndSource",
        "dojo/store/Memory",
        "dijit/InlineEditBox",
        "dijit/Editor",
        "dijit/_editor/_Plugin",
        "dijit/_editor/plugins/AlwaysShowToolbar",
        "dijit/_editor/plugins/FontChoice",  // 'fontName','fontSize','formatBlock'
        "dijit/_editor/plugins/TextColor",
        "dijit/_editor/plugins/LinkDialog",
        "dijit/_editor/plugins/FullScreen",
        "dijit/_editor/plugins/ViewSource",
        "dijit/_editor/plugins/NewPage",
        "dijit/_editor/plugins/Print",
        "dijit/_editor/plugins/TabIndent",
        "dijit/_editor/plugins/ToggleDir"
],
function (declare, dojo, dom, query, domConstruct, WidgetBase, TemplatedMixin, 
    WidgetsInTemplateMixin, template, lang, aspect, Source, BorderContainer,
    TabContainer,AccordionContainer,ContentPane,ValidationTextBox,NumberTextBox,
    CurrencyTextBox,TimeTextBox,Textarea,Button,ToggleButton,DropDownButton,CheckBox,
    RadioButton,Select,ComboBox,MultiSelect,ComboButton,DateTextBox,HorizontalSlider,
    VerticalSlider,HorizontalRule,VerticalRule,HorizontalRuleLabels,VerticalRuleLabels,
    NumberSpinner,TextBox,Menu, MenuItem,TooltipDialog,ProgressBar,Dialog,Tooltip,
    MenuBar,MenuBarItem,Form,MenuSeparator,PopupMenuItem,PopupMenuBarItem,DropDownMenu,
    CheckedMenuItem,ColorPalette,TitlePane,Tree,ObjectStoreModel,dndSource,Memory,
    InlineEditBox,Editor) {
    return declare([WidgetBase, TemplatedMixin, WidgetsInTemplateMixin], {
        templateString: template,
        widgetsInTemplate: true,

        postCreate: function () {
          
            this.inherited(arguments);

            //*************************************
            // Forms 
            //*************************************

            //programmatically create horizontal sliders
            new HorizontalSlider({
                name: "default horizontal slider",
                "class": "make-disabled",
                value: 5,
                minimum: -10,
                maximum: 10,
                intermediateChanges: true,
                style: "margin:10px 10px 30px",
                showButtons:false
            }, this.horizontalSliderNormal);

            var sliderRulesH = new HorizontalRule({
                count: 11,
                style: { height: "5px" }
            });
            
            var sliderRuleLabelsH = new HorizontalRuleLabels({
                labels: ["low", "mid", "high"]
            });
            
            var horizontalSliderAdvanced = new HorizontalSlider({
                name: "default horizontal slider",
                "class": "make-disabled",
                value: 5,
                minimum: -10,
                maximum: 10,
                intermediateChanges: true,
                discreteValues: 11,
                style: "margin:10px 10px 30px"
            }, this.horizontalSliderAdvancedNormal);

            sliderRulesH.placeAt(horizontalSliderAdvanced.containerNode);
            sliderRuleLabelsH.placeAt(horizontalSliderAdvanced.containerNode); 

            //programmatically create vertical sliders
            new VerticalSlider({
                name: "default vertical slider",
                "class": "make-disabled",
                value: 5,
                minimum: -10,
                maximum: 10,
                intermediateChanges: true,
                style: "margin:10px 30px 10px 10px;height:240px;float:left",
                showButtons: false
            }, this.verticalSliderNormal);


            var sliderRulesV = new VerticalRule({
                count: 11,
                style: { width: "5px" }
            });

            var sliderRuleLabelsV = new VerticalRuleLabels({
                labels: ["low", "mid", "high"]
            });

            var verticalSliderAdvanced = new VerticalSlider({
                name: "default vertical slider",
                "class": "make-disabled",
                value: 5,
                minimum: -10,
                maximum: 10,
                intermediateChanges: true,
                discreteValues: 11,
                style: "margin:10px 30px 10px 10px;height:240px;float:left"
            }, this.verticalSliderAdvancedNormal);

            sliderRulesV.placeAt(verticalSliderAdvanced.containerNode);
            sliderRuleLabelsV.placeAt(verticalSliderAdvanced.containerNode);

            // Colored Sliders
            var colors = ['red','orange','yellow','olive','green','teal','blue','violet','purple','pink','brown','grey','black'];
                for (var i = 0; i < colors.length; i++) {
                    var color = colors[i];
                    new VerticalSlider({
                    name: "default vertical slider",
                    "class": color + " make-disabled",value: Math.floor((Math.random() * 100) + 1),
                    intermediateChanges: true,
                    style: "margin:10px 30px 10px 10px;height:240px;float:left",
                    showButtons: false
                }, this['verticalSliderNormal' + (i+1)]);
            }

            //programmatically create number spinners
            new NumberSpinner({
                value: 1000,
                "class": "make-disabled",
                smallDelta: 10,
                constraints: { min: 9, max: 1550, places: 0 }
            }, this.numberSpinnerNormal);

            this.dropdownbutton1.startup();
            this.combobutton1.startup();

            //*************************************
            // Layout 
            //*************************************

                this.Accordion.startup();
            /* borderContainer */
            var bc = new BorderContainer({ style: "height: 100%; width: 100%;", liveSplitters: true, gutters:true });
            var bcp1 = new ContentPane({
                region: "top",
                content: "Top Panel"
            });

            bc.addChild(bcp1);

            var bcp2 = new ContentPane({
                region: "leading",
                content: "Leading Panel",
                splitter: true
            });
            bc.addChild(bcp2);
            var bcp3 = new ContentPane({
                region: "center",
                content: "Center Panel"
            });
            bc.addChild(bcp3);
            var bcp4 = new ContentPane({
                region: "trailing",
                content: "Trailing Panel"
            });
            bc.addChild(bcp4);
            var bcp5 = new ContentPane({
                region: "bottom",
                content: "Bottom Panel"
            });
            bc.addChild(bcp5);
            this.borderContainer.appendChild(bc.domNode);
            bc.startup();

            /* tabContainers */
            
            /* top */
            var tcpnestedTop1 = new ContentPane({
                title: "Tab 1",
                content: "nested tab container(top)"
            });
            var tcpnestedTop2 = new ContentPane({
                title: "Tab 2"
            });
            var tcpnestedTop3 = new ContentPane({
                title: "Tab 3",
                closable: true
            });
            var tcnestedTop = new TabContainer({
                tabPosition: "top",
                nested: true
            });
            tcnestedTop.addChild(tcpnestedTop1);
            tcnestedTop.addChild(tcpnestedTop2);
            tcnestedTop.addChild(tcpnestedTop3);

            tcnestedTop.startup();

            var tcp1 = new ContentPane({
                title: "Tab 1",
                content: tcnestedTop
            });
            var tcp2 = new ContentPane({
                title: "Tab 2"
            });
            var tcp3 = new ContentPane({
                title: "Tab 3",
                closable: true
            });
            var tcp4 = new ContentPane({
                title: "Tab 4",
                closable: true
            });
            var tct = new TabContainer({
                style: "height: 240px; width: 450px;",
                tabPosition: "top-h"
            }, this.tabContainerTop);

            tct.addChild(tcp1);
            tct.addChild(tcp2);
            tct.addChild(tcp3);
            tct.addChild(tcp4);
            tct.startup();
            /* left */
            var tcpnestedLeft1 = new ContentPane({
                title: "Tab 1",
                content: "nested tab container(left)"
            });
            var tcpnestedLeft2 = new ContentPane({
                title: "Tab 2"
            });
            var tcpnestedLeft3 = new ContentPane({
                title: "Tab 3"
            });
            var tcnestedLeft = new TabContainer({
                tabPosition: "left",
                nested: true
            });
            tcnestedLeft.addChild(tcpnestedLeft1);
            tcnestedLeft.addChild(tcpnestedLeft2);
            tcnestedLeft.addChild(tcpnestedLeft3);

            tcnestedLeft.startup();

            var tclp1 = new ContentPane({
                title: "Tab 1",
                content: tcnestedLeft
            });
            var tclp2 = new ContentPane({
                title: "Tab 2",
                content: "some content"
            });
            var tclp3 = new ContentPane({
                title: "Tab 3",
                content: "some content",
                closable: true
            });
            var tcl = new TabContainer({
                "class": "make-disabled",
                style: "height: 240px; width: 350px;",
                tabPosition: "left-h"//,
                //tabStrip: true
            }, this.tabContainerLeft);

            tcl.addChild(tclp1);
            tcl.addChild(tclp2);
            tcl.addChild(tclp3);

            tcl.startup();
            /* right */
            var tcpnestedRight1 = new ContentPane({
                title: "Tab 1",
                content: "nested tab container(right)"
            });
            var tcpnestedRight2 = new ContentPane({
                title: "Tab 2"
            });
            var tcpnestedRight3 = new ContentPane({
                title: "Tab 3"
            });
            var tcnestedRight = new TabContainer({
                tabPosition: "right",
                nested: true
            });
            tcnestedRight.addChild(tcpnestedRight1);
            tcnestedRight.addChild(tcpnestedRight2);
            tcnestedRight.addChild(tcpnestedRight3);

            tcnestedRight.startup();

            var tcrp1 = new ContentPane({
                title: "Tab 1",
                content: tcnestedRight
            });
            var tcrp2 = new ContentPane({
                title: "Tab 2",
                closable: true
            });
            var tcrp3 = new ContentPane({
                title: "Tab 3"
            });

            var tcr = new TabContainer({
                style: "height: 240px; width: 450px;",
                tabPosition: "right-h"
            }, this.tabContainerRight);

            tcr.addChild(tcrp1);
            tcr.addChild(tcrp2);
            tcr.addChild(tcrp3);

            tcr.startup();
            /* bottom */
            var tcpnestedBottom1 = new ContentPane({
                title: "Tab 1",
                content: "nested tab container(bottom)"
            });
            var tcpnestedBottom2 = new ContentPane({
                title: "Tab 2"
            });
            var tcpnestedBottom3 = new ContentPane({
                title: "Tab 3"
            });
            var tcnestedBottom = new TabContainer({
                tabPosition: "bottom",
                nested: true
            });
            tcnestedBottom.addChild(tcpnestedBottom1);
            tcnestedBottom.addChild(tcpnestedBottom2);
            tcnestedBottom.addChild(tcpnestedBottom3);

            tcnestedBottom.startup();

            var tcbp1 = new ContentPane({
                title: "Tab 1",
                content: tcnestedBottom
            });
            var tcbp2 = new ContentPane({
                title: "Tab2"
            });
            var tcbp3 = new ContentPane({
                title: "Tab 3"
            });
            var tcbp4 = new ContentPane({
                title: "Tab 4"
            });
            var tcbp5 = new ContentPane({
                title: "Tab 5"
            });
            var tcbp6 = new ContentPane({
                title: "Tab 6"
            });
            var tcbp7 = new ContentPane({
                title: "Tab 7"
            });
            var tcbp8 = new ContentPane({
                "class": "make-disabled",
                title: "Tab 8"
            });
            var tcb = new TabContainer({
                style: "height: 240px; width: 450px;",
                //tabPosition: "bottom-h"
                tabPosition: "bottom"
            }, this.tabContainerBottom);

            tcb.addChild(tcbp1);
            tcb.addChild(tcbp2);
            tcb.addChild(tcbp3);
            tcb.addChild(tcbp4);
            tcb.addChild(tcbp5);
            tcb.addChild(tcbp6);
            tcb.addChild(tcbp7);
            tcb.addChild(tcbp8);
            tcb.startup();

            //*************************************
            // Other 
            //*************************************

            this.initMenuBar();
            //tooltip dialog
            var myDialog = new Dialog({
              title: "My Dialog",
              content: "Test content.",
              style: "width: 300px"
            });

            var tooltipDialog1 = new TooltipDialog({
              content:  '<form style="padding:5px 0px" data-dojo-type="dijit/form/Form">This tooltip dialog has an action bar.<br/><br/>' +
                        '<div class="dijitDialogPaneActionBar">' +
                        '<div class="ui buttons tiny">' +
                        '<button class="ui button" data-dojo-type="dijit/form/Button" type="reset">Cancel</button>' +
                        '<div class="or"></div>' + 
                        '<button class="ui positive button" data-dojo-type="dijit/form/Button" type="submit">Save</button></div></form>' + 
                        '</div>'
            });

            this.tooltipdialogButton1.set("dropDown", tooltipDialog1);

            var tooltipDialog2 = new TooltipDialog({
              content: '<span><br/>This is the content.<br/><br/></span>'
            });
            this.tooltipdialogButton2.set("dropDown", tooltipDialog2);

            var tooltipDialog3 = new TooltipDialog({
              content:  '<form style="padding:5px 0px" data-dojo-type="dijit/form/Form">This tooltip dialog has an action bar.<br/><br/>' +
                        '<div class="dijitDialogPaneActionBar">' +
                        '<div class="ui buttons tiny">' +
                        '<button class="ui button" data-dojo-type="dijit/form/Button" type="reset">Reset</button>' +
                        '<div class="or"></div>' + 
                        '<button class="ui primary button" data-dojo-type="dijit/form/Button" type="submit">Login</button></div></form>' + 
                        '</div>'
            });

            this.tooltipdialogButton3.set("dropDown", tooltipDialog3);

            var tooltipDialog4 = new TooltipDialog({
              content: '<span><br/>This is the content.<br/><br/></span>'
            });
            this.tooltipdialogButton4.set("dropDown", tooltipDialog4);

            //tooltips
            new Tooltip({
              connectId: this.tooltipAbove,
              label: "tooltip: above",
              position: ['above']
            });
            new Tooltip({
              connectId: this.tooltipAboveCentered,
              label: "tooltip: above centered",
              position: ['above-centered']
            });
            new Tooltip({
              connectId: this.tooltipBelow,
              label: "tooltip: below",
              position: ['below']
            });
            new Tooltip({
              connectId: this.tooltipBelowCentered,
              label: "tooltip: below centered",
              position: ['below-centered']
            });
            new Tooltip({
              connectId: this.tooltipBefore,
              label: "tooltip: before",
              position: ['before']
            });
            new Tooltip({
              connectId: this.tooltipAfter,
              label: "tooltip: after",
              position: ['after']
            });

            // tree
            this.initTree();

            // editor
            this.initEditBox();

            // inline edit box
            this.initInlineEditBox();

              // DnD
            this.initDnD();

            // Disable button

            var checkBox = new CheckBox({
            name: "checkBox",
            'style': "font-weight: normal;float:right",
            checked: false,
            onChange: function(b){ 
                    var disabled = this.get('value') == "on" ? true : false ;
                    // Get all widgets to be disabled!!
                            query(".make-disabled").forEach(function(node, idx){
                                 var widget = dijit.getEnclosingWidget(node); 
                                 widget.set("disabled",disabled);
                            });
            }
            }, this["disable-button"]).startup();
                                        
            // ---------------------------------------------------------------
            // Remove loading ...
            // ---------------------------------------------------------------
            dojo.destroy("loading");

            // ----------------------------------------------------
            // Semantic Ui
            // ----------------------------------------------------

            $('.ui.checkbox').checkbox();
            $('.ui.radio.checkbox').checkbox();
            $('.dropdown').dropdown({transition: 'drop'});
            $('.menu .item').tab();
            $('.ui.accordion').accordion();

        },

        initMenuBar: function () {
            var pMenuBar = new MenuBar({"class":'make-disabled'});

            var pSubMenu = new DropDownMenu({});

            pSubMenu.addChild(new CheckedMenuItem({
                label: "Checked menu item 1"
            }));
            pSubMenu.addChild(new CheckedMenuItem({
                label: "Checked menu item 2"
            }));
            pMenuBar.addChild(new PopupMenuBarItem({
                label: "File",
                popup: pSubMenu
            }));

            var pSubMenu2 = new DropDownMenu({});
            pSubMenu2.addChild(new MenuItem({
                label: "Cut",
                iconClass: "dijitEditorIcon dijitEditorIconCut"
            }));
            pSubMenu2.addChild(new MenuItem({
                label: "Copy",
                iconClass: "dijitEditorIcon dijitEditorIconCopy",
                disabled: true
            }));
            pSubMenu2.addChild(new MenuItem({
                label: "Paste",
                iconClass: "dijitEditorIcon dijitEditorIconPaste"
            }));
            pSubMenu2.addChild(new MenuSeparator());

            var pSubMenu3 = new Menu();
            pSubMenu3.addChild(new MenuItem({
                label: "Submenu item"
            }));
            pSubMenu3.addChild(new MenuItem({
                label: "Submenu item"
            }));
            pSubMenu2.addChild(new PopupMenuItem({
                label: "More...",
                popup: pSubMenu3
            }));

            pMenuBar.addChild(new PopupMenuBarItem({
                label: "Edit",
                popup: pSubMenu2
            }));

            pMenuBar.addChild(new MenuBarItem({
                label: "Info"
            }));

            // pMenuBar.placeAt(wrapper);
            // pMenuBar.startup();

        },

        initTree: function () {
            // Sample code from: http://dojotoolkit.org/reference-guide/1.10/dijit/Tree.html
            // Create test store, adding the getChildren() method required by ObjectStoreModel
            var treeStore = new dojo.store.Memory({
                data: [
                    { id: 'world', name: 'The earth', type: 'planet', population: '6 billion' },
                    {
                        id: 'AF', name: 'Africa', type: 'continent', population: '900 million', area: '30,221,532 sq km',
                        timezone: '-1 UTC to +4 UTC', parent: 'world'
                    },
                        { id: 'EG', name: 'Egypt', type: 'country', parent: 'AF' },
                        { id: 'KE', name: 'Kenya', type: 'country', parent: 'AF' },
                            { id: 'Nairobi', name: 'Nairobi', type: 'city', parent: 'KE' },
                            { id: 'Mombasa', name: 'Mombasa', type: 'city', parent: 'KE' },
                        { id: 'SD', name: 'Sudan', type: 'country', parent: 'AF' },
                            { id: 'Khartoum', name: 'Khartoum', type: 'city', parent: 'SD' },
                    { id: 'AS', name: 'Asia', type: 'continent', parent: 'world' },
                        { id: 'CN', name: 'China', type: 'country', parent: 'AS' },
                        { id: 'IN', name: 'India', type: 'country', parent: 'AS' },
                        { id: 'RU', name: 'Russia', type: 'country', parent: 'AS' },
                        { id: 'MN', name: 'Mongolia', type: 'country', parent: 'AS' },
                    { id: 'OC', name: 'Oceania', type: 'continent', population: '21 million', parent: 'world' },
                    { id: 'EU', name: 'Europe', type: 'continent', parent: 'world' },
                        { id: 'DE', name: 'Germany', type: 'country', parent: 'EU' },
                        { id: 'FR', name: 'France', type: 'country', parent: 'EU' },
                        { id: 'ES', name: 'Spain', type: 'country', parent: 'EU' },
                        { id: 'IT', name: 'Italy', type: 'country', parent: 'EU' },
                    { id: 'NA', name: 'North America', type: 'continent', parent: 'world' },
                    { id: 'SA', name: 'South America', type: 'continent', parent: 'world' }
                ],
                getChildren: function (object) {
                    return this.query({ parent: object.id });
                }
            });

            aspect.around(treeStore, "put", function (originalPut) {
                // To support DnD, the store must support put(child, {parent: parent}).
                // Since memory store doesn't, we hack it.
                // Since our store is relational, that just amounts to setting child.parent
                // to the parent's id.
                return function (obj, options) {
                    if (options && options.parent) {
                        obj.parent = options.parent.id;
                    }
                    return originalPut.call(treeStore, obj, options);
                }
            });

            // Create the model
            var treeModel = new ObjectStoreModel({
                store: treeStore,
                query: { id: 'world' }
            });

            // Create the Tree.
            var tree = new Tree({
                "class": "make-disabled",
                model: treeModel,
                dndController: dijit.tree.dndSource
            }, this.treeNode);
            tree.startup();
        },

        initEditBox: function () {
            var myEditor = new Editor({
                "class": "make-disabled",
                height: '300px',
                //extraPlugins: [dijit._editor.plugins.AlwaysShowToolbar],
                plugins: ['undo', 'redo', '|', 'cut', 'copy', 'paste', 'selectAll', 'delete', '|',
                          'bold', 'italic', 'underline', 'strikethrough', 'subscript', 'superscript', 'removeFormat', '|',
                          'insertOrderedList', 'insertUnorderedList', 'indent', 'outdent', 'justifyLeft', 'justifyRight', 'justifyCenter', 'justifyFull', '|',
                          'insertHorizontalRule', 'insertImage', 'createLink', 'unlink', 'foreColor', 'hiliteColor', '|',
                          'fontSize', 'formatBlock', 'viewSource', '|', 'newpage', 'fullscreen', 'print', 'tabIndent', 'toggleDir']
                //,
                //dir: "rtl"
                //disabled: true
            }, this.editorNode);
            myEditor.startup();
        },

        initInlineEditBox: function () {
            new InlineEditBox({
                "class": "make-disabled",
                editor: dijit.form.NumberTextBox,
                autoSave: false
            }, this.InlineEditBoxNode).startup();
        },
        
        initDnD: function () {
            var dndList = new Source(this.DnDList, {});
            
            dndList.insertNodes(false, [
                "Wrist watch",
                "Life jacket",
                "Toy bulldozer",
                "Vintage microphone",
                "TIE fighter"
            ]);
        }
    });
});