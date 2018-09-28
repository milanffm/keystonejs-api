var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Image Upload Model
 * ===========
 * A database model for uploading images to the local file system
 */

var ImageUpload = new keystone.List('ImageUpload');

ImageUpload.add({
	// name: { type: Types.Key, required: true, index: true }, //requiring name breaks image upload.
	name: { type: Types.Key, index: true},
	image: {
		type: Types.File,
		dest: 'public/uploads/images',
		label: 'Image',
		allowedTypes: [ 'image/jpeg', 'image/png', 'image/gif'],
		filename: function(item, file) {
			return item.id + '.' + file.extension;
		} },
	alt1: { type: String },
	attributes1: { type: String },
	category: { type: String },      // Used to categorize widgets.
	priorityId: { type: String } // Used to prioritize display order.

});


ImageUpload.defaultColumns = 'name';
ImageUpload.register();