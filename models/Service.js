const keystone = require('keystone')
const Types = keystone.Field.Types

/**
 * Service Model
 * ==========
 */
const Service = new keystone.List('Service', {
  sortable: true,
})

Service.add({
  name: { type: Types.Text, required: true, index: true },
  description: { type: Types.Html, wysiwyg: true, initial: true },
  pricing: { type: Types.Text, initial: true },
  sortOrder: { type: Types.Number, hidden: true },
})

/**
 * Registration
 */
Service.defaultColumns = 'name, pricing'
Service.register()
