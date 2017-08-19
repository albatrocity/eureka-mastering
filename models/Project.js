const keystone = require('keystone')
const Types = keystone.Field.Types
const s3Storage = require('../config/s3Storage')
const cacheBuster = require('./cacheBuster')

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
  featured: { type: Types.Boolean, initial: true, default: false },
  description: { type: Types.Html, wysiwyg: true },
  image: {
    type: Types.CloudinaryImage,
    folder: 'projects',
    select: true,
    autoCleanup : true,
  },
  audio_sample: {
    type: Types.File,
    dest: 'samples',
    storage: s3Storage,
    label: 'Audio sample',
    note: 'mp3 only'
  },
  url: { type: Types.Url },
  sortOrder: { type: Types.Number, hidden: true },
})
cacheBuster(Project)

/**
 * Registration
 */
Project.defaultColumns = 'title, artist, featured'
Project.register()
