# Blog landing template

Blog landing. The hero module displays a featured article and it's followed by a list carousel displaying a smaller preview for other articles. It handles images of different formats and sizes in articles.

---
## Install

Run `npm install`

---
## Gulp Tasks

Then `gulp build` for compilation and `gulp default` for development
Only _dist_ folder files should be published


### Default

`gulp`

Sets the project to work on it.

* clean dev folder
* copy fonts
* copy css files
* compile sass
* copy images
* copy scripts
* serve the site
* watch for changes

### Build

`gulp build`

Compiles the project site to dev folder

* clean dev folder
* copy fonts
* copy css files
* compile sass
* compile handlebars templates to html
* copy images
* copy scripts

---
## File Structure

```shell
├── dist // prod files
└── src // editable files
 ├── css
 ├── fonts
 ├── img
 ├── js
 ├── pages
 ├── scss
 ```

---
## Sass

In the root folder partial files have a corresponding scss defining the styles for its content. All these files define styles for the pages structure.

---
## CSS

These files are reset and libraries' files.

---
## js

There's vendor folder includin a _'modernizer.js'_ and _'owl-carousel.js'_ used to reset styles and fix browser issues.
Additionally a _'plugins.js'_ file.
