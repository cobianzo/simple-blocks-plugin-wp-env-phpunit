<?php
/**
 * Define the class for the block
 * @package coco-plugin
 */

namespace CocoPlugin\Blocks;

/**
 * The starting class
*/
class Member_Block {

	/**
	 * Call the hooks
	 *
	 * @return void
	 */
	public static function init() {
		add_action( 'init', array( __CLASS__, 'register_block' ) );
	}

	/**
	 * Register the block using block.json
	 *
	 * @return void
	 */
	public static function register_block() {
		register_block_type( __DIR__ );
	}
}

Member_Block::init();
