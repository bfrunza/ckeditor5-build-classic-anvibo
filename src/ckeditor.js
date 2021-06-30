/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import List from '@ckeditor/ckeditor5-list/src/list';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor';
import BackgroundColor from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Essentials,
	Bold,
	Italic,
	Strikethrough,
	Underline,
	Heading,
	Indent,
	List,
	Paragraph,
	BackgroundColor,
	FontColor,
	PasteFromOffice,
	TextTransformation,
	RemoveFormat,
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'bold',
			'italic',
			'underline',
			'strikethrough',
			'bulletedList',
			'numberedList',
			'|',
			'undo',
			'redo',
			'|',
			'fontColor',
			'fontBackgroundColor',
			'|',
			'heading',
			'|',
			'removeFormat',
		],
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en',
};
