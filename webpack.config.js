const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const path = require( 'path' );

module.exports = {
	...defaultConfig,
	entry: {
		member: path.resolve( __dirname, 'blocks/member/src/index.js' ),
	},
	output: {
		path: path.resolve( __dirname, 'blocks/build' ),
		filename: '[name].js', // Esto compilará 'todo-list.js' y 'task.js' en la carpeta 'blocks/build'
	},
};
