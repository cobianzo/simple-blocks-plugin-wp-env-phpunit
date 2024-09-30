<?php

namespace Coco\Blocks;

class Member_Block {

	/**
	 * Call the hooks
	 *
	 * @return void
	 */
	public static function init() {
		add_action( 'init', [ __CLASS__, 'register_block' ] );
	}

	public static function register_block() {
		register_block_type( __DIR__ );
	}
}

Member_Block::init();
