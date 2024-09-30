<?php
/*
Plugin Name: Coco Plugin
Description: A plugin for testing and demonstrating wp-env and PHPUnit.
*/


class Coco_Setup {

	/**
	 * Init plugin hooks and requires
	 *
	 * @return void
	 */
	public static function init() {
		add_action( 'admin_notices', [__CLASS__, 'coco_plugin_admin_notice'] );
	}

	public static function coco_plugin_admin_notice() {
		printf(
			'<div class="notice notice-info is-dismissible"><p>Welcome to Coco Plugin!</p></div>'
		);
	}
}


Coco_Setup::init();
