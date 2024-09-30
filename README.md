# Environment for development wp-env + phpunit

## For environment start

`npm run up` or `wp-env start`

## For phpunit

Following instructions in `https://github.com/cobianzo/just-readme-howto-setup-phpunit-wp-plugin`

`composer install`

`./vendor/bin/phpunit` or `composer test`

## For block development

`npm install`

`npm start`

# Useful references:

https://www.npmjs.com/package/@wordpress/env/v/2.0.0
https://github.com/cobianzo/just-readme-howto-setup-phpunit-wp-plugin

The gutenberg plugin is a good reference as well:

https://github.com/WordPress/gutenberg/blob/trunk/

# OTHER THINGS:

After `wp-env up` or `npm run up`

```
WordPress development site started at http://localhost:8888/
WordPress test site started at http://localhost:8889/
MySQL is listening on port 53779
MySQL for automated testing is listening on port 53772
```

Therefore you can connect to the test mysql host with:

`> mysql -h 127.0.0.1 -P 53772 -u root -p`

> password 'password'
> DB name : tests-wordpress

check tests/wp-config.php, we use the same credentials there to connect
to the tests db when running phpunit.

RUN wp cli commands:
wp-env run cli wp user list

RUN PHP from command line
wp-env run tests-cli wp shell
