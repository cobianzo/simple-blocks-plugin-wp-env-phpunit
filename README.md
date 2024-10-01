# Readme.md

Boilerplate for a plugin development for creating serveral blocks using wp-env.

Uses wp-scripts and it's modified to accept more than one block in the folder /blocks
Setup supports phpunit.

Linting (css and js, php) is already setup and working in package.json. You need the extensions in VSCode

Summary: clone it, `npm i`, `composer i`, `npm up`, go to `localhost:8888`, `npm start`, code !

Confirm that eslint work in a .js file (automatically with vscode on save and `npm run lint:js`),
stylelint works in a css file (automatically with vscode on save and `npm run lint:css`),
phpcs works in a php file (automatically with vscode using _Format document_ and `phpcs`/`phpcbf`),
or use `composer lint`, `composer format`.

# Environment for development wp-env + phpunit

**Dependencies:**

Docker, npm, node 18 (I think also higher), wp-env installed globally (you can install it locally if you want to),
composer.

## For environment start

`npm run up` or `wp-env start`

It will output something like :

```
WordPress development site started at http://localhost:8888/
WordPress test site started at http://localhost:8889/
MySQL is listening on port 61524
MySQL for automated testing is listening on port 61520
```

In your browser: `http://localhost:8888/wp-admin/plugins.php` and

> user: `admin` / password: `password`

connection to DB from terminal

`mysql -u root -p -h 127.0.0.1 -P 61524`.
`mysql -u root -p -h 127.0.0.1 -P 61520` (for testing DB)

### Closing

`npm run down` or `wp-env stop`,
use `docker ps` to see the processes. You should see 4, (wp, mysql, 2 of them for testing)

## For phpunit

Following instructions in `https://github.com/cobianzo/just-readme-howto-setup-phpunit-wp-plugin`

`composer install`

Will install a full wp installation in `/wordpress` and the php unit libraries in vendor

> Make sure the credentials at `/tests/wp-config.php` are correct. In our example:

```
define('DB_NAME', getenv('WP_DB_NAME') ?: 'tests-wordpress');
define('DB_USER', getenv('WP_DB_USER') ?: 'root');
define('DB_PASSWORD', getenv('WP_DB_PASS') ?: 'password');
define('DB_HOST', getenv('WP_DB_HOST') ?: '127.0.0.1:61520'); //127.0.0.1
```

Then run:

`./vendor/bin/phpunit` or `composer test`

Create your tests in `/tests/test-*.php`

## For block development

`npm install`

`npm start`

compiled .js and .css will be in the `/build` folder. They be called from `block.json`

# Useful references:

https://www.npmjs.com/package/@wordpress/env/v/2.0.0
https://github.com/cobianzo/just-readme-howto-setup-phpunit-wp-plugin

The gutenberg plugin is a good reference as well:

https://github.com/WordPress/gutenberg/blob/trunk/

# OTHER THINGS:

**RUN wp cli commands:**

`wp-env run cli wp user list`

**RUN PHP from command line**

`wp-env run tests-cli wp shell`

**VSCode Userful Extensions**

-   EditorConfig for VSCode
-   Prettier
-   PHP Sniffer & Beautifier
-   phpcbf
-   Stylelint

**Linting**

Remember using node 18 to ensure that npm packages are instaled correctly.
Prettier might fail, so make sure it works by editing a js file, with the save on format option on,
and confirming that the errors are corrected on save.
If not, check that at least they are manually:

`npx prettier --write .` , and with `npm run lint:js --fix`

In VSCode, sometimes you'll need to add the setting in your workspace:

`"prettier.prettierPath": "./node_modules/prettier",`

**PHP Linting (Code Sniffer and Beautfier, PHPCS, and PHPCBF)**

If you have phpcs and phpcbf installed globally, you might prefer removing the composer package and
change the "scripts" key in composer.json to "phpcs" instead of "./vendor/bin/phpcs"
