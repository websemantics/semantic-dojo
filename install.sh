#!/usr/bin/env bash

echo "Install Bower dependencies"

bower install

echo "Create theme config file"

cat <<EOT >> src/semantic/src/theme.config
/* Use a common Config file with Semantic UI and Dijit Themes. */

@targetFolder : @semanticUiFolder;

@import "../../semantic-dojo-styles/less/theme.config";

/* End Config */
EOT

echo "Install complete"
