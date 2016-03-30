/**
 * Dev Page
 *
 * @link      http://websemantics.ca/ibuild
 * @link      http://ibuild.io
 * @author    WebSemantics, Inc. <info@websemantics.ca>
 * @author    Adnan M.Sagar, PhD. <msagar@websemantics.ca>
 * @copyright 2012-2015 Web Semantics, Inc.
 * @since     August 28th 2015
 * @package   SemanticDojo\Main
*/

define([ "./widgets/Dev", 
				 "dojo/domReady!" ], 
	function (Dev) {

	var app = {};
	app.dev = new Dev().placeAt(document.body);
  app.dev.startup();

	return app;
});
