# Semantic Dojo

A Dijit Theme for powerful and modern Web apps.

This project harness the style awesomeness of the [Semantic UI](http://semantic-ui.com/) Framework with [Dojo Toolkit](https://dojotoolkit.org/) powerful UI widgets.

A new method of building Dijit Themes following the Semantic UI approach with a similar folder structure throught this project.

Dijit widgets directly import and inherint CSS from their Semantic UI conterparts, if any!


![Demo1](https://raw.githubusercontent.com/websemantics/semantic-dojo/master/img/semantic-dojo.png "Demo1")
![Buttons1](https://raw.githubusercontent.com/websemantics/semantic-dojo/master/img/buttons-1.png "Buttons1")
![Buttons2](https://raw.githubusercontent.com/websemantics/semantic-dojo/master/img/buttons-2.png "Buttons2")
![Buttons3](https://raw.githubusercontent.com/websemantics/semantic-dojo/master/img/buttons-3.png "Buttons3")
![Buttons4](https://raw.githubusercontent.com/websemantics/semantic-dojo/master/img/buttons-4.png "Buttons4")
![Demo2](https://raw.githubusercontent.com/websemantics/semantic-dojo/master/img/progress-bar.png "Demo2")

## Progress

This project is still in development. The following widgets have been partially ported:

- Buttons
- Progress Bars
- Tabs
- Textbox
- TextArea
- Icons
- Slider

## Installation

- Clone the git repo locally 
- Install Dojo from project folder, 
	`bower install dojo/dojo dojo/dijit dojo/dojox dojo/util`
- Launch index.html 

## Guide

[Semantic UI](http://semantic-ui.com/) is an awesome CSS framework that provides a wide range of UI components. A powerful feature of Semantic UI is the ability to build various themes to each of its compoenents. For example, the Button widget comes with a varity of themes for example, flat default, basic, github, raised and many more. 

[Semantic Dojo](https://github.com/websemantics/semantic-dojo) brings these awesome features to Dojo Toolkit, allowing those who love TDK to build modern Web apps.

To test different themes for the supported widgets, go to 'less/theme.config' and change the Button theme for example from 'default' to 'raised': `@button     : 'raised';`, refresh and enjoy!

## Open Source projects used

* Dojo Flat Theme - https://github.com/Esri/dojo-theme-flat
* Semantic UI LESS - https://github.com/Semantic-Org/Semantic-UI-LESS
