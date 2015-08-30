#!/usr/bin/env bash

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

# Configuration over. Main application start up!

if [ ! -d "$TOOLSDIR" ]; then
	echo "Can't find Dojo build tools -- did you initialise submodules? (git submodule update --init --recursive)"
	exit 1
fi

if [ ! -d node_modules ]; then
	echo "Can't find Node.js dependencies -- did you install them? (npm install)"
	exit 1
fi

echo "Building application with $PROFILE to $DISTDIR."

echo -n "Cleaning old files..."
rm -rf "$DISTDIR"
echo " Done"

"$TOOLSDIR/build.sh" --profile "$PROFILE" --releaseDir "$DISTDIR" $@

cd "$DISTDIR/demo"

echo "Cleaning unused code"

# find . -type f -name '*.uncompressed.js' -print0 | xargs -0 rm -rdf
# find . -type f -name '*.consoleStripped.js' -print0 | xargs -0 rm -rdf 
find . -type f -name 'build-report.txt' -print0 | xargs -0 rm -rdf 

# Remove app, dijit, dojox and dojo except some files/folders
rm -R app
rm -R dijit
rm -R dojox

cd "$DISTDIR/demo/dojo"
shopt -s extglob
rm -R !(dojo.js|nls|resources)

echo "Building semantic-dojo"

cd "$BASEDIR"

# Use gulp to build Semantic-Dojo
gulp

echo "Build complete"
