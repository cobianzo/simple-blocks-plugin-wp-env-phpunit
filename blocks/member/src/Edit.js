// WP dependencies
import { useBlockProps } from '@wordpress/block-editor';

// The component
export default function () {
	return <div { ...useBlockProps() }>Editor view</div>;
}
