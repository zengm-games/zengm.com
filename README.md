# basketball-gm.com

This is the source code of the [basketball-gm.com](https://basketball-gm.com/) and [football-gm.com](https://football-gm.com/) websites. For the actual video games, see https://github.com/dumbmatter/gm-games

If you find a typo or want to add some detail to the documentation or something, feel free to send a PR!

## Development

(within either the basketball-gm.com or football-gm.com folder)

    $ bundle exec jekyll server

## Production

(within either the basketball-gm.com or football-gm.com folder)

    $ JEKYLL_ENV=production bundle exec jekyll build

## Things that could be better

1. Tag index pages are not paginated like the main blog index page is. It seems that [the autopages feature of jekyll-pagination-v2](https://github.com/sverrirs/jekyll-paginate-v2/blob/master/README-AUTOPAGES.md) should allow tag index pages to be paginated, but I couldn't get it to work. No big loss, but it'd be nice if that was working.

2. Ideally there would be a way to share code and content across basketball-gm.com and football-gm.com. Currently it's just copy/pasted between them and hopefully kept in sync.
