# This gets deleted when assetgraph makes the static folder
cp src/static/.htaccess dist/static/.htaccess

# These get minified by assetgraph, but I don't want that
cp src/files/*.json dist/files
