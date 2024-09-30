<?php
/*
Plugin Name: Coco boilerplate plugin
Description: A simple plugin boilerplate using wp-env, linting, wp-scripts, and phpunit
Version: 1.0.0
Author: @cobianzo
Author URI: https://github.com/cobianzo
License: GPL-2.0+
Text Domain: coco
*/

namespace Coco;
class Coco_Plugin {

	public function __construct() {
		require_once __DIR__ . '/blocks/init.php';
	}
}

new Coco_Plugin();
