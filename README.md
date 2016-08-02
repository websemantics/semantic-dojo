```
                           __________________________ 
                          |░░░░░░░░░░░░░░░░░░░░░░░░░░|     
                          |░░░░░░░░░|`     ,|░░░░░░░░|     
                          |░░░░░░░|          |░░░░░░░|           __    _________    __    _________
                          |░░░░░░░|   |░░░░░░░░░░░░░░|          |  |  |_________|  |__|  |_________|
                          |░░░░░░░|      `|░░░░░░░░░░|    ______|  |   _________    __    _________
                          |░░░░░░░░░░|       |░░░░░░░|   (   ___   |  (   ___   )  |  |  (   ___   )
                          |░░░░░░░░░░░░░░|    |░░░░░░|   |  |   |  |  |  |   |  |  |  |  |  |   |  |
                          |░░░░░░░|   `.,.   .|░░░░░░|   |  |   |  |  |  |   |  |  |  |  |  |   |  |
                          |░░░░░░░░|        |░░░░░░░░|   |  |   |  |  |  |   |  |  |  |  |  |   |  |
                          |░░░░░░░░░░░░░░░░░░░░░░░░░░|   |  |___|  |  |  |___|  |  |  |  |  |___|  |
                          |░░░░░░░░░░░░░░░░░░░░░░░░░░|   (_________)  (_________)  |  |  (_________)
                                                                                   |  |  
                                                                        TOOLKIT |\_/  /  
                                                                                 \___/                               
```
> Last update:  2 August 2016

[![Build Status](https://travis-ci.org/websemantics/semantic-dojo.svg?branch=master)](https://travis-ci.org/websemantics/semantic-dojo)

A responsive Dojo theme that harnesses the style awesomeness of [Semantic UI](http://semantic-ui.com/) Framework with [Dojo Toolkit](https://dojotoolkit.org/) powerful UI widgets, for modern Web apps.

A new method of building Dijit Themes following the Semantic UI approach with a similar folder structure throught this project.

Dijit widgets directly import and inherint CSS from their Semantic UI conterparts, if any!

Try [live demo](http://websemantics.github.io/semantic-dojo).
------
![Screenshot](https://raw.githubusercontent.com/websemantics/semantic-dojo/master/src/app/resources/img/screenshot.png "Screenshot")

## Install

This will generate the master Semantic Dojo styles at `dist/semantic-dojo.css`, assets at `dist/themes` and compiled Dojo app at `dist/src/app`

Clone locally
```
git clone https://github.com/websemantics/semantic-dojo
```

Run build script
```
./build.sh
```

View `index.html` or `src/app/index.html`

## Guide

[Semantic UI](http://semantic-ui.com/) is an awesome CSS framework that provides a wide range of UI components. A powerful feature of Semantic UI is the ability to build various themes to each of its compoenents. For example, the Button widget comes with a varity of themes for example, flat default, basic, github, raised and many more.

[Semantic Dojo](https://github.com/websemantics/semantic-dojo) brings these awesome features to Dojo Toolkit, allowing those who love DTK to build modern Web apps.

To test different themes for the supported widgets, go to 'less/theme.config' and change the Button theme for example from 'default' to 'raised': `@button     : 'raised';`, refresh and enjoy!

This will build the dojo app to `dist/app` folder, and also run `gulp` for Semantic Dojo.

## Development

To contribute to Semantic Dojo, follow the installation steps above then edit:

- The main dev page, `src/app/dev.html`
- Semantic Dojo home page, `src/app/index.html`

## Logo

![Semantic Dojo](https://raw.githubusercontent.com/websemantics/semantic-dojo/master/src/app/resources/img/logo.png "Semantic Dojo")

## Credits

Few of this themes elements have been a port from [Dojo Flat Theme](https://github.com/Esri/dojo-theme-flat) with adjucements for the Semantic UI generic styles and user experince.

## Open Source Projects Used

* Semantic Dojo Styles
https://github.com/websemantics/semantic-dojo-styles
* Dojo Flat Theme - https://github.com/Esri/dojo-theme-flat
* Semantic UI - https://github.com/Semantic-Org/Semantic-UI
* Dojo Boilerplate - https://github.com/csnover/dojo-boilerplate
