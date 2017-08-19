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
  header_text_color: { type: Types.Color, required: true, default: '#ffffff', note: 'Color of Site Title and nav links'},
  footer_color: { type: Types.Color, required: true, default: '#1a1a1a', note: 'Background color of the footer'},
  active: { type: Types.Boolean },
  meta_description: { type: Types.Textarea, label: 'Meta Tag Description' },
  cache_key: { type: Types.Number, default: Date.now() },
})

Configuration.schema.pre('save', function(next) {
  this.cache_key = Date.now()
  next()
})
/**
 * Registration
 */
Configuration.defaultColumns = 'name, main_color'
Configuration.register()
