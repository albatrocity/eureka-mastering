
module.exports = function(server, keystone) {
  server.use((req, res, next) => {
    req.keystone = keystone
    next()
  })
  server.get('/api/pages/:slug', servePage)
  server.get('/api/equipment', serveEquipment)
}

const servePage = (req, res) => {
  if (req.params.slug === 'home') {
    return serveHomePage(req, res)
  } else {
    return servePage(req, res)
  }
}

const sizeImage = (response) => {
  return Object.assign(response, {
    images: response.images.map(image => ({
      url: image.fill(1000,400),
      '_id': image['_id']
    }))
  })
}

const serveHomePage = (req, res) => {
  const Page = req.keystone.list('Page')
  const Service = req.keystone.list('Service')
  const Client = req.keystone.list('Client')

  return Promise.all([
    Page.model.findOne({slug: req.params.slug}),
    Page.model.findOne({slug: 'equipment'}),
    Service.model.find({}).sort('sortOrder'),
    Client.model.find({}).sort('sortOrder')
  ])
    .then((results) => {
      res.json({
        page: sizeImage(results[0]),
        equipment: sizeImage(results[1]),
        services: results[2],
        clients: results[3],
      })
    })
    .catch((err) => res.error(err))
}

const serveEquipment = (req, res) => {
  const Page = req.keystone.list('Equipment')
  return Page.model.find({}).then((equipment) => {
    res.json(equipment)
  })
}
