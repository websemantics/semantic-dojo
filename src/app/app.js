/**
 * Fron Page
 *
 * @link      http://websemantics.ca/ibuild
 * @link      http://ibuild.io
 * @author    WebSemantics, Inc. <info@websemantics.ca>
 * @author    Adnan M.Sagar, PhD. <msagar@websemantics.ca>
 * @copyright 2012-2015 Web Semantics, Inc.
 * @since     August 28th 2015
 * @package   SemanticDojo\Main
*/

define([ "./widgets/Main", 
				 "dojo/domReady!" ], 
	function (Main) {

	var app = {};
	app.main = new Main().placeAt(document.body);
  app.main.startup();
  
	return app;
});
