const keystone = require('keystone')
const Types = keystone.Field.Types

/**
 * Equipment Model
 * ==========
 */
const Equipment = new keystone.List('Equipment', {
  plural: 'Equiment',
})

Equipment.add({
  name: { type: Types.Name, required: true, index: true },
  description: { type: Types.Html, wysiwyg: true, initial: true },
  url: { type: Types.Url, initial: true },
})

/**
 * Registration
 */
Equipment.defaultColumns = 'name, url'
Equipment.register()
