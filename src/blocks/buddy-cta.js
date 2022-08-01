import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';

/**
 * Child blocks
 */
import ctametadata from './buddy-cta-block.json';
const { name } = ctametadata;

export { ctametadata, name };
const BUDDY_CTA_TEMPLATE = [
	[ 'core/heading', { 'placeholder': 'CTA Title' } ],
	[ 'core/paragraph', { 'placeholder': 'CTA Content' }],
	[ 'core/button', { 'placeholder': 'Click Action' } ],
];

export const settings = {
	icon: "smiley",
	edit: function( { attributes, setAttributes } ){
		return (
			<div { ...useBlockProps() }>
				<InnerBlocks template={ BUDDY_CTA_TEMPLATE }/>
			</div>
		);
	},
	save: function(){
		return (
			<div { ...useBlockProps.save() }>
				 <InnerBlocks.Content />
			</div>
		);
	}
};
