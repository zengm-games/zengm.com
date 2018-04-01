# basketball-gm.com

This is the source code of [the basketball-gm.com website](https://basketball-gm.com/). For the actual Basketball GM game, see https://github.com/dumbmatter/basketball-gm

If you find a typo or want to add some detail to the documentation or something, feel free to send a PR!

## Development

    $ bundle exec jekyll server

## Production

    $ JEKYLL_ENV=production bundle exec jekyll build

## Things that could be better

Tag index pages are not paginated like the main blog index page is. It seems that [the autopages feature of jekyll-pagination-v2](https://github.com/sverrirs/jekyll-paginate-v2/blob/master/README-AUTOPAGES.md) should allow tag index pages to be paginated, but I couldn't get it to work. No big loss, but it'd be nice if that was working.
