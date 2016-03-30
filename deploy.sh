#!/usr/bin/env bash
# This bash file will deploy the dist folder to the project gh-page
set -e

# Base directory for this entire project
BASEDIR=$(cd $(dirname $0) && pwd)

# Destination directory for built code
DISTDIR="$BASEDIR/dist"

# run the build script
./build.sh

# Create a new Git repo in dist folder
cd "$DISTDIR"
git init

# Set user details
git config user.name "${USER_NAME}"
git config user.email "${USER_EMAIL}"

# First commit, .. horray!
git add .
git commit -m "Deploy to gh-pages"

# Force push ...
git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master:gh-pages > /dev/null 2>&1
