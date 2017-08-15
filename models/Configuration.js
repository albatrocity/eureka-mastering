const keystone = require('keystone')
const Types = keystone.Field.Types

/**
 * Client Model
 * ==========
 */
const Configuration = new keystone.List('Configuration')

Configuration.add({
  name: { type: Types.Text, required: true, initial: true, default: 'Default' },
  main_color: { type: Types.Color, required: true, default: '#105469', note: 'Main color of header background and heading text'},
  footer_color: { type: Types.Color, required: true, default: '#1a1a1a', note: 'Background color of the footer'},
  active: { type: Types.Boolean },
  meta_description: { type: Types.TextArea, label: 'Meta Tag Description' },
})

/**
 * Registration
 */
Configuration.defaultColumns = 'name, main_color'
Configuration.register()
