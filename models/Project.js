const keystone = require('keystone')
const Types = keystone.Field.Types

/**
 * Client Model
 * ==========
 */
const Project = new keystone.List('Project', {
  sortable: true,
})

Project.add({
  title: { type: Types.Text, required: true, initial: true, index: true },
  artist: { type: Types.Text, initial: true },
  description: { type: Types.Html, wysiwyg: true },
  image: {
    type: Types.CloudinaryImage,
    folder: 'projects',
    select: true,
    autoCleanup : true,
  },
  url: { type: Types.Url },
  sortOrder: { type: Types.Number, hidden: true },
})

/**
 * Registration
 */
Project.defaultColumns = 'name, url'
Project.register()
