/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * Import text component.
 */
import { Button } from '@wordpress/components';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( attributes, setAttributes ) {
	let href = '';
	const Tag = href !== undefined ? 'a' : 'button';
	console.log(attributes);
	return (
		<div { ...useBlockProps() }>
			<Tag>Some text</Tag>
			<RichText
				id="bd-rich-container"
				className="bg-text-rich"
				tagName="p" // The tag here is the element output and editable in the admin
				value={ attributes.content }
				placeholder={ __( 'Heading...' ) } // Display this text before any content has been added by the user
				onChange={ ( val ) => attributes.setAttributes( { content: val } ) }
				/>
		</div>
	);
}
