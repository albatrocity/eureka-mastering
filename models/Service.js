const keystone = require('keystone')
const Types = keystone.Field.Types

/**
 * Service Model
 * ==========
 */
const Service = new keystone.List('Service')

Service.add({
  name: { type: Types.Name, required: true, index: true },
  description: { type: Types.Html, wysiwyg: true, initial: true, required: true },
  pricing: { type: Types.Text, initial: true },
})

/**
 * Registration
 */
Service.defaultColumns = 'name, pricing'
Service.register()
