var profile = (function(){
    return {
        basePath: "../",
        localeList: 'ar,ca,cs,da,de,el,en,en-gb,en-us,es,es-es,fi,fi-fi,fr,fr-fr,he,he-il,hu,it,it-it,ja,ja-jp,ko,ko-kr,nl,nl-nl,nb,pl,pt,pt-br,pt-pt,ru,sk,sl,sv,th,tr,zh,zh-tw,zh-cn',
        releaseName: "app",
        action: "release",
        layerOptimize: "closure",
        optimize: "closure",
        cssOptimize: "comments",
        mini: true,
        stripConsole: "all",
        selectorEngine: "lite",
        defaultConfig: {
            hasCache:{
                "dojo-built": 1,
                "dojo-loader": 1,
                "dom": 1,
                "host-browser": 1,
                "config-selectorEngine": "lite"
            },
            async: 1
        },
        staticHasFeatures: {
            "config-deferredInstrumentation": 0,
            "config-dojo-loader-catches": 0,
            "config-tlmSiblingOfDojo": 0,
            "dojo-amd-factory-scan": 0,
            "dojo-combo-api": 0,
            "dojo-config-api": 1,
            "dojo-config-require": 0,
            "dojo-debug-messages": 0,
            "dojo-dom-ready-api": 1,
            "dojo-firebug": 0,
            "dojo-guarantee-console": 1,
            "dojo-has-api": 1,
            "dojo-inject-api": 1,
            "dojo-loader": 1,
            "dojo-log-api": 0,
            "dojo-modulePaths": 0,
            "dojo-moduleUrl": 0,
            "dojo-publish-privates": 0,
            "dojo-requirejs-api": 0,
            "dojo-sniff": 1,
            "dojo-sync-loader": 0,
            "dojo-test-sniff": 0,
            "dojo-timeout-api": 0,
            "dojo-trace-api": 0,
            "dojo-undef-api": 0,
            "dojo-v1x-i18n-Api": 1,
            "dom": 1,
            "host-browser": 1,
            "extend-dojo": 1
        },
		packages:[{
            name: "dojo",
            location: "dojo"
            },{
    		name: "dijit",
    		location: "dijit"
    		},{
    		name: "dojox",
    		location: "dojox"
    		},{
    		name: "app",
    		location: "app"
		}],
        layers: {
            "dojo/dojo": {
                include: [ "dojo/dojo", "dojo/i18n", "dojo/domReady","app/app"],
                customBase: true,
                boot: true
            }
        }
    };
})();