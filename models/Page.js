const keystone = require('keystone')
const Types = keystone.Field.Types

/**
 * Page Model
 * ==========
 */
const Page = new keystone.List('Page', {
  autokey: { path: 'slug', from: 'name', unique: true },
  defaultSort: 'name',
  track: true,
  nocreate: true,
  nodelete: true,
})

Page.add({
  name: { type: Types.Name, required: true, index: true },
  slug: { type: Types.Text },
  content: { type: Types.Html, wysiwyg: true, initial: true },
  images: {
    type: Types.CloudinaryImages,
    folder: 'pages',
    select: true,
    autoCleanup : true,
  }
})

/**
 * Registration
 */
Page.defaultColumns = 'name, url'
Page.register()
