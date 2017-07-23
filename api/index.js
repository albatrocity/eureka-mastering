
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

const serveHomePage = (req, res) => {
  const Page = req.keystone.list('Page')
  const Service = req.keystone.list('Service')
  const Client = req.keystone.list('Client')

  return Promise.all([
    Page.model.findOne({slug: req.params.slug}),
    Service.model.find({}).sort('sortOrder'),
    Client.model.find({}).sort('sortOrder')
  ])
    .then((results) => {
      res.json({
        page: results[0],
        services: results[1],
        clients: results[2],
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
