const keystone = require('keystone')
const Types = keystone.Field.Types
const cacheBuster = require('./cacheBuster')

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

cacheBuster(Client)

/**
 * Registration
 */
Client.defaultColumns = 'name, url'
Client.register()
