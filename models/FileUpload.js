var keystone = require('keystone');
var Types = keystone.Field.Types;
var nameFunctions = require('keystone-storage-namefunctions');

/**
 * File Upload Model
 * ===========
 * A database model for uploading images to the local file system
 */

var FileUpload = new keystone.List('FileUpload');

var storage = new keystone.Storage({
	adapter: keystone.Storage.Adapters.FS,
	fs: {
		path: keystone.expandPath('./public/uploads/projects/'), // required; path where the files should be stored
		publicPath: '/uploads/projects/', // path where files will be served
		generateFilename: nameFunctions.originalFilename,
		whenExists: 'overwrite',
	},
	schema: {
		url: true,
	}
})

FileUpload.add({
	name: { type: Types.Key, index: true },
	image: {
		type: Types.File,
		storage: storage,
		thumb: true
	},
	createdTimeStamp: { type: String }
});

FileUpload.defaultColumns = 'name, image';
FileUpload.register();