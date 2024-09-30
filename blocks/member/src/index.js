/* WP Dependencies */
// ...

import './style.css';

alert( 'testing' );

// Registering the block:
registerBlockType( 'coco/member', {
	title: 'Co-co Member',
	edit: ( props ) => <h1>Editor</h1>,
	save: ( props ) => null,
} );
