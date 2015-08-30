```
 ____                             _   _        ____        _       
/ ___|  ___ _ __ ___   __ _ _ __ | |_(_) ___  |  _ \  ___ (_) ___  
\___ \ / _ \ '_ ` _ \ / _` | '_ \| __| |/ __| | | | |/ _ \| |/ _ \ 
 ___) |  __/ | | | | | (_| | | | | |_| | (__  | |_| | (_) | | (_) |
|____/ \___|_| |_| |_|\__,_|_| |_|\__|_|\___| |____/ \___// |\___/ 
 Web Semantics, Inc.                                    |__/       

 Version 1.0
```

A responsive Dojo theme that harnesses the style awesomeness of Semantic UI Framework for powerful and modern Web apps.

This project harness the style awesomeness of the [Semantic UI](http://semantic-ui.com/) Framework with [Dojo Toolkit](https://dojotoolkit.org/) powerful UI widgets.

A new method of building Dijit Themes following the Semantic UI approach with a similar folder structure throught this project.

Dijit widgets directly import and inherint CSS from their Semantic UI conterparts, if any!

Try [live demo](http://websemantics.github.io/semantic-dojo).

## Installation

- Clone locally, `git clone https://github.com/websemantics/semantic-dojo`
- Install dependencies, `bower install`
- Create file `src/semantic/src/theme.config` with the following content:

		/* Use a common Config file with Semantic UI and Dijit Themes. */
	
		@targetFolder : @semanticUiFolder; 
		
		@import "../../../less/theme.config";
		
		/* End Config */

- Browse to `semantic-dojo/index.html`

## Guide

[Semantic UI](http://semantic-ui.com/) is an awesome CSS framework that provides a wide range of UI components. A powerful feature of Semantic UI is the ability to build various themes to each of its compoenents. For example, the Button widget comes with a varity of themes for example, flat default, basic, github, raised and many more. 

[Semantic Dojo](https://github.com/websemantics/semantic-dojo) brings these awesome features to Dojo Toolkit, allowing those who love DTK to build modern Web apps.

To test different themes for the supported widgets, go to 'less/theme.config' and change the Button theme for example from 'default' to 'raised': `@button     : 'raised';`, refresh and enjoy!

## Build

To build Semantic-Dojo run Gulp in main folder

`gulp`

This will generate the master Semantic Dojo styles at `dist/semantic-dojo.css`. Assets are located in `dist/themes/default/assets`

To build the demo app, run build.sh

`./build.sh`

This will build the dojo app to `dist/app` folder, and also run `gulp` for Semantic Dojo.

# Change Log
All notable changes to this project will be documented in this section.

### [1.1] - 2015-08-3
#### Changed
- Update demo app
- Optomize build process

### [1.0] - 2015-08-26
#### Changed
- Textbox
- TextArea
- Select
- Button
- Progress Bar
- Tooltip
- DialogTooltip
- Tab
- Sliders
- Color Palette
- RadioButton
- Checkbox.
- Use [Bower](http://bower.io/) for dependancies.
- Merged main project and `gh-pages` into one codebase.

# Screenshot
![Screenshot](https://raw.githubusercontent.com/websemantics/semantic-dojo/master/src/app/resources/img/screenshot.png "Screenshot")

## Open Source Projects Used

* Dojo Flat Theme - https://github.com/Esri/dojo-theme-flat
* Semantic UI - https://github.com/Semantic-Org/Semantic-UI
* Dojo Boilerplate - https://github.com/csnover/dojo-boilerplate
