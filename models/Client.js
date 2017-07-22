const keystone = require('keystone')
const Types = keystone.Field.Types

/**
 * Client Model
 * ==========
 */
const Client = new keystone.List('Client')

Client.add({
  name: { type: Types.Name, required: true, index: true },
  url: { type: Types.Url },
})

/**
 * Registration
 */
Client.defaultColumns = 'name, url'
Client.register()
