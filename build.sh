#!/usr/bin/env bash
# This bash file installs all dependancies (bower & npm), build semantic-dojo css and the dojo app

set -e

# Base directory for this entire project
BASEDIR=$(cd $(dirname $0) && pwd)

# Source directory for unbuilt code
SRCDIR="$BASEDIR/src"

# Directory containing dojo build utilities
TOOLSDIR="$SRCDIR/util/buildscripts"

# Destination directory for built code
DISTDIR="$BASEDIR/dist"

# Main application package build configuration
PROFILE="$BASEDIR/src/profiles/app.profile.js"

# Node.js modules folder
NODE="$BASEDIR/node_modules"

echo "------------------------------------------------------------------"
echo "| Building Semantic Dojo ... "
echo "------------------------------------------------------------------"

echo "Install Bower dependencies"

bower install

echo "Create theme config file @ src/semantic/src/theme.config "

echo '/* Use a common Config file with Semantic UI and Dijit Themes. */
@targetFolder : @semanticUiFolder;
@import "../../semantic-dojo-styles/src/theme.config";
/* End Config */' > src/semantic/src/theme.config

echo "Install Node.js packages"

if [ -d "$NODE" ]; then
    printf '%s\n' "Already exists, .. removing old Node.js pacjages folder ($NODE)"
    rm -rf "$NODE"
fi

sudo npm install

if [ -d "$DISTDIR" ]; then
    printf '%s\n' "Distribution folder ($DISTDIR) already exists, .. removing it to strart afresh"
    rm -rf "$DISTDIR"
fi

mkdir "$DISTDIR"

echo "Copy theme assets from, '$SRCDIR/semantic/src/themes' to, '$DISTDIR'"

mkdir "$DISTDIR/themes"
mkdir "$DISTDIR/themes/default"

cp -r "$SRCDIR/semantic/src/themes/default/assets" "$DISTDIR/themes/default"

echo "Copy app resources from, '$SRCDIR/app/resources' to, '$DISTDIR'"

cp -r "$SRCDIR/app/resources" "$DISTDIR"

echo "Copy index.html to '$DISTDIR'"

sed "s/dist\///" index.html > "$DISTDIR/index.html"

echo "Run gulp to generate Semantic Dojo styles / css"

gulp

echo "Building Dojo app"

if [ ! -d "$TOOLSDIR" ]; then
	echo "Can't find Dojo build tools -- did you initialise submodules? (git submodule update --init --recursive)"
	exit 1
fi

echo "Building application with '$PROFILE' to '$DISTDIR'"

"$TOOLSDIR/build.sh" --profile "$PROFILE" --releaseDir "$DISTDIR" $@

cd "$DISTDIR/app"

echo "Cleaning unused code"

# find . -type f -name '*.uncompressed.js' -print0 | xargs -0 rm -rdf
# find . -type f -name '*.consoleStripped.js' -print0 | xargs -0 rm -rdf
find . -type f -name 'build-report.txt' -print0 | xargs -0 rm -rdf

# Remove app, dijit, dojox and dojo except some files/folders
rm -R app
rm -R dijit
rm -R dojox

cd "$DISTDIR/app/dojo"
shopt -s extglob
rm -R !(dojo.js|nls|resources)

echo "Build complete, enjoy!"
