# MegaMek Website

These files contain a [Jekyll](https://jekyllrb.com/) set-up for a the new
MegaMek website hosted at GitHub pages.
[Github pages](https://pages.github.com/) supports Jekyll set ups and the
site will automatically re-build any time a new commit is pushed to this
repository.

The other reasons for using Jekyll is that we can separate frequently
updated content from the HTML formatting and design, without having to
rely on a database system. This repository is designed so that all content
information is pulled from simple Markdown and YAML files that can be easily
edited without fiddling around with a bunch of HTML code.

## Adding Content

### Program Versions

The latest program version information is kept in YAML file
`current_releases.yml` in the `_data` folder. The version information and
download links that show on the website depend on this file. For the download
links to work properly, each release should just include the number of the
release without a "v."

### Page Content

Page content is stored in markdown files in the `wiki` directory, and in the
root directory. Here is a list of the files that currently exist and what
content they change:

- In root directory:
  - `community.md`: Information about the MegaMek community. Shows on its own page.
  - `play.md`: Information about how to play MegaMek and MekHQ. Shows on its own page.
  - `downloads.html`: Download information
  - `faq.html`: FAQ Information
  - `installation.html`: How to install and update information
  - `servers.md`: Current games that are being announced for anyone to join.
- The `wiki` directory contains additional markdown files for supplementary content that is not directly used in the main navbar but that can be linked to and is available at `wiki/name_of_file.html` when the site is compiled.

More information about using markdown to write pages can be found
[here](https://daringfireball.net/projects/markdown/syntax). Its super easy.

### Posting

New posts can be created as Markdown files in the `_posts` directory. File names
should always start with "YEAR_MONTH_DAY" to ensure that they are properly sorted.
Follow the layout of existing posts for the header information. The most recent
six posts will show on the front page and the rest will be available in an archive.

### FAQ

FAQ information is kept in YAML files in the `_data/faq` directory. Each file
includes `question` and `answer` fields for each item. Currently there are three different
categories of technical, unit, and miscellaneous. If these categories are changed/expanded,
the `faq.html` file will require editing to accommodate the new categories.

### New Pages

To create new pages, add a markdown file to the root or `wiki` directory with the same front
matter that is currently in the `play.md` file. Layout should remain "info_page" and the
title should be unique. A splash image from the `assets/images` directory is optional.

To add this page to the top navbar, you need to edit the `menu-pages.csv` file in the `_data`
directory. The name provided must match the title given in the front matter and the address
should point to a file of the same name but with an html rather than md suffix.

### New Screenshots

Before addition, screenshots should be cropped to have an aspect ratio of 2:1 (width to height).
this can be done easily with [pixlr](https://pixlr.com/editor/), GIMP, or PhotoShop by
maintaining an aspect ratio of 1200 x 600 when cropping.

New screenshots should be added directly to `assets/images/screenshots`. To get them to show up
in the carousel, you will have to add a line to `_data/screenshots.csv` indicating the full file
name, the program being displayed (i.e. MegaMek, MekHQ, or MegaMekLab), and a caption.

### New Images

To use images in a post or page, first add the image to the `assets/images` directory. Then you can
reference the image in your markdown document with:

```Markdown
![My new image description](/assets/images/mynewimage.jpg){:class="img-fluid"}
```

The class call ensures that the image will resize by device. This will scale images the full width
of the container if they are too large. To get a smaller width use `{:class="img-fluid w-75"}` or
`{:class="img-fluid w-50"}` to shrink the image to 75% or 50% of the full width, respectively.

You can also put other documents into the assets directory and reference them in a similar way. For
example, for a PDF:

```Markdown
[get the PDF](/assets/mydoc.pdf)
```

## Development

To test out changes to a local repository, you need to install [Docker](https://www.docker.com/). Then
from the command line within the repository run:

```Shell
docker build -t jekyll .
```
to build a local Docker image containing all the tools needed to compile and host the site.
Once the image is built, just use:

```Shell
docker run -it --rm -v ${PWD}:${PWD} -w ${PWD} -p "4000:4000" jekyll
```

to start the local site host.

The website should then be viewable at [localhost:4000](http://localhost:4000).

### PR and Commit Policies

For minor spelling/grammatical corrections or basic updates to content (e.g. updating links), devs
with access may push directly to the master branch. For substantial content revisions, new content,
or website design changes, a pull request should be made and approved by another dev.
