const keystone = require('keystone')
const Types = keystone.Field.Types

/**
 * Client Model
 * ==========
 */
const Client = new keystone.List('Client', {
  sortable: true,
})

Client.add({
  name: { type: Types.Text, required: true, index: true },
  url: { type: Types.Url },
  sortOrder: { type: Types.Number, hidden: true },
})

/**
 * Registration
 */
Client.defaultColumns = 'name, url'
Client.register()
