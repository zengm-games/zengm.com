# This gets deleted when assetgraph makes the static folder
cp extra-htaccess/static.htaccess dist/zengm.com/static/.htaccess
cp extra-htaccess/basketball.htaccess dist/basketball-gm.com/.htaccess
cp extra-htaccess/football.htaccess dist/football-gm.com/.htaccess

# These get minified by assetgraph, but I don't want that
cp src/files/*.json dist/zengm.com/files
