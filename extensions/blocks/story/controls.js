/**
 * External dependencies
 */
import { BlockControls, MediaUpload } from '@wordpress/block-editor';
import { Toolbar } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';

/**
 * Internal dependencies
 */
import EditButton from '../../shared/edit-button';

export default ( { allowedMediaTypes, attributes: { mediaFiles }, onSelectMedia } ) => (
	<Fragment>
		<BlockControls>
			{ !! mediaFiles.length && (
				<Toolbar>
					<MediaUpload
						title={ __( 'Edit Story', 'jetpack' ) }
						onSelect={ onSelectMedia }
						allowedTypes={ allowedMediaTypes }
						multiple
						value={ mediaFiles.map( file => file.id ) }
					/>
				</Toolbar>
			) }
		</BlockControls>
	</Fragment>
);
