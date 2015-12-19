# AnunaNG 

AnunaNG is a WordPress-theme powered by AngularJS and the WordPress REST API.

This is my first attempt at creating an AngularJS-powered application

# Features

* AngularJS (1.4.8)
* AngularJS Routing (1.4.8)
* WordPress Rest API

# Requirements

* node >= 0.12.2
* npm >= 2.7.5
* bower >= 1.4.1
* gulp >= 3.9.0

# Development

## Building

We use Gulp as our build tool.

### Default

Runs the build process and starts watching files

```
gulp
```

### Build

Concatinates javascript

```
gulp build
```

### Watch 

Watches files in source directories

```
gulp watch
```

## Assets

Bower is used to install asset packages to the theme.

To install a new asset, from the command line run:

```
bower install package-name
```

## Project Structure

```
.
├── bower_components            # Downloaded bower componenst
├── dist                        # Compiled files 
│   ├── js                      # Compiled javascript files
│   │   ├── scripts.js          # Compiled scripts
├── inc                         # Contains PHP-files needed for the theme
│   ├── cpt.php                 # Holds all post type inits
│   ├── extras.php              # Filters and actions to modify WordPress
│   ├── scripts.php             # Loads scripts and adds WP-stuff to the js
├── node_modules                # All necessary node modules
├── src                         # Source files
│   ├── js                      # All scripts sources
│   │   ├── controllers         # Angular Controllers
│   │   │   ├── Archive.js      # Controller for archives
│   │   │   ├── Home.js         # Controller for the home page
│   │   │   ├── Single.js       # Controller for single posts
│   │   │   ├── Taxonomy.js     # Controller for taxonomy archives
│   │   ├── directives          # Custom Angular Directives
│   │   │   ├── appPartial.js   # A custom directive for including partials in templates
│   │   │   ├── postLink.js     # A custom directive for creating a link to a single post
│   │   ├── services            # Custom Angular Services
│   │   │   ├── pageTitle.js    # A service to modify the title of the page
│   │   ├── app.js              # The main application file
│   │   ├── functions.js        # Custom helper functions
│   │   ├── routes.js           # Route definitions
├── tasks                       # Contains all gulp tasks
│   ├── scripts.js              # Compiles scripts
│   ├── scss.js                 # Compiles stylesheets
│   ├── watch.js                # Watches files
├── templates                   # Contains all template files loaded by angular
│   ├── partials                # Contains all template partials
│   │   ├── post.html           # A partial for displaying a single post item in the main "loop"
│   ├── archive-people.html     # Template for the "people"-post type archive
│   ├── category.html           # Category archive template
│   ├── main.html               # Template for the home/main page
│   ├── single-post.html        # Template for single posts from the post type "post"
├── .gitignore                  # Files to be ignored in the repository
├── bower.json                  # Bower definitions
├── functions.php               # Loads all files in the "inc/"-directory.
├── gulpfile.js                 # Gulp 
├── index.php                   # The main template file, which is loaded by WordPress
├── package.json                # NPM definitions
├── README.md                   # The readme-file
├── style.css                   # Holds no actual styles, but is required by WordPress to define the theme
```