These files contain a [Jekyll](https://jekyllrb.com/) set-up for a proposed new MegaMek website. [Github pages](https://pages.github.com/) supports Jekyll set ups and will auto re-build the website anytime a new commit is pushed. So we can use this to publish the front page site at megamek.github.io.

The other reasons for using Jekyll is that we can separate frequently updated comment from the HTML formatting and design. This repository is designed so that all content information is pulled from simple Markdown and YAML files that can be easily edited without fiddling around with a bunch of HTML code.

## Adding Content

### Program Versions

The latest program version information is kept in YAML file `current_releases.yml` in the `_data` folder. The version information and download links that show on the website depend on this file. NOTE: There has been some inconsistency in how releases are tagged on GitHub. For the download links to work properly, each release should be tagged as "v" followed by the full version number (including the "0.") (e.g. "v0.44.0", not "0.44.0" nor "v.44.0"). 

### Page Content

All page content is stored in markdown files in `_includes/mminfo`. Here is a list of the files that currently reside there and what content they change:

- `about.md`: the blurb that appears in the upper left of the home page. This should be an evocative and non-technical description of the programs.
- `community.md`: Information about the megamek community. Very much a WIP ATM. Shows on its own page. 
- `downloads.md`: Probably should be re-named installation. This is instructions on how to download and install the programs. This will currently appear on the left in the download page.
- `features.md`: a list of cool features that shows up on the front page. 
- `mhq-dl_info.md`: A small blurb indicating what is included with the MHQ package and who should download it. This will show on the download page.
- `mm_dl_info.md`: A small blurb indicating what is included with the MM package and who should download it. This will show on the download page.
- `mml_dl_info.md`: A small blurb indicating what is included with the MML package and who should download it. This will show on the download page.
- `mission_statement.md`: The mission statement. Appears on front page.
- `play.md`: Information about how to play MegaMek. Very much a WIP ATM. Shows on its own page.
- `sys_require.md`: A short blurb describing the system requirements for the programs.

More information about using markdown to write pages can be found [here](https://daringfireball.net/projects/markdown/syntax). Its super easy.

### Posting

New posts can be created as Markdown files in the `_posts` directory. File names should always start with "YEAR_MONTH_DAY" to ensure that they are properly sorted. Follow the layout of exising posts for the header information. The most recent six posts will show on the front page and the rest will be available in an archive. 

### FAQ

FAQ information is kept in YAML folders with a `question` and `answer` field for each item.  Currently there are three different categories of technical, unit, and miscellaneous. If these categories are changed/expanded, the `faq.html` file will require editing to accomodate the new categories.

### New Pages

To create new pages, some HTML editing is required. The basic format in `play.html` or `community.html` can be copied and a new a markdown file should be added to the `_includes` directory. To add pages to the top navbar, the `header.html` file in the `_includes` folder will need to be edited. 

### New Screenshots

New screenshots can be added directly to `assets/images/screenshots`. They will display in the screenshot carousel on the front page. These screenshots should have some dimension restrictions but that has NOT YET been figured out. 

### New Images

To use images in a post or page, first add the image to the `assets/images` directory. Then you can reference the image in your markdown document with:

```
![My new image description](/assets/images/mynewimage.jpg)
```

You can also put other documents into the assets directory and reference them in a similar way. For example, for a PDF:

```
[get the PDF](/assets/mydoc.pdf)
```

## Development

To test out changes to a local repository, you need to install [Jekyll](https://jekyllrb.com/). Then from the command line within the repository run:

```
jekyll serve
```

The website should then be viewable at [localhost:4000](http://localhost:4000).

### PR and Commit Policies

None Yet
