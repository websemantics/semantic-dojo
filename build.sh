#!/usr/bin/env bash
# This bash file installs all dependancies and build semantic-dojo css and dojo app

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

echo "Install Bower dependencies"

bower install

echo "Create theme config file @ src/semantic/src/theme.config "

echo '/* Use a common Config file with Semantic UI and Dijit Themes. */
@targetFolder : @semanticUiFolder;
@import "../../semantic-dojo-styles/less/theme.config";
/* End Config */' > src/semantic/src/theme.config

echo "Install Node.js packages"

if [ -d "$NODE" ]; then
    printf '%s\n' "Removing Node.js pacjages folder ($NODE)"
    rm -rf "$NODE"
fi

sudo npm install

if [ -d "$DISTDIR" ]; then
    printf '%s\n' "Removing old distribution folder ($DISTDIR)"
    rm -rf "$DISTDIR"
fi

mkdir "$DISTDIR"

echo "Copy theme assets"

mkdir "$DISTDIR/themes"
mkdir "$DISTDIR/themes/default"

cp -r "$SRCDIR/semantic/src/themes/default/assets" "$DISTDIR/themes/default"

echo "Run gulp"

gulp

echo "Configuration over. Main application start up"

if [ ! -d "$TOOLSDIR" ]; then
	echo "Can't find Dojo build tools -- did you initialise submodules? (git submodule update --init --recursive)"
	exit 1
fi

echo "Building application with $PROFILE to $DISTDIR."

echo -n "Cleaning old files..."
rm -rf "$DISTDIR"
echo " Done"

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

echo "Build complete"
