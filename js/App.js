 /**
	*  _ ____        _ _     _ 
	* (_) __ ) _   _(_) | __| |
	* | |  _ \| | | | | |/ _` |
	* | | |_) | |_| | | | (_| |
	* |_|____/ \__,_|_|_|\__,_|
	*
	* @link      http://websemantics.ca/ibuild
	* @link      http://ibuild.io
	* @author    WebSemantics, Inc. <info@websemantics.ca>
	* @author    Adnan Sagar <msagar@websemantics.ca>
	* @copyright 2012-2015 Web Semantics, Inc.
	*/

define(['require'], function(require) {
    require([
				"dojo/dom",
				"dojo/dom-class",
				"dojo/dom-style",
				"dojo/on",
				"dojo/query",
				"dojo/_base/array",
				"dojo/parser",
				"dojo/ready",
				"./Widgets",
    ],
      function(dom, domClass, domStyle, on, query, array,
          parser, ready, Widgets) {
          ready(function() {
          	parser.parse();
							var widgets = new Widgets(null, /* div 'id' */ "widgets");
          });
      });
});
