/* WP Dependencies */
import { registerBlockType } from '@wordpress/blocks';

/* Internal deps */
import Edit from './Edit.js';

import './editor-style.css';

// Registering the block:
registerBlockType(
	'coco/member',
	{
		title: 'Co-co Member',
		edit: Edit,
		save: () => null,
	} 
);
