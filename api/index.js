
module.exports = function(server, keystone) {
  server.use((req, res, next) => {
    req.keystone = keystone
    next()
  })
  server.get('/api/pages/:slug', servePage)
}

const servePage = (req, res) => {
  switch (req.params.slug) {
    case 'home':
      return serveHomePage(req, res)
      break
    case 'discography':
      return serveDiscographyPage(req, res)
      break
    default:
      return res.json({})

  }
  if (req.params.slug === 'home') {
  } else {
  }
}

const fillImage = (response, width, height) => {
  return Object.assign(response, {
    images: response.images.map(image => ({
      url: image.fill(width || 1200, height || 800),
      '_id': image['_id']
    }))
  })
}

const sizeImage = (response, width, height) => {
  return Object.assign(response, {
    images: response.images.map(image => ({
      url: image.limit(width || 1400, height || 1400),
      '_id': image['_id']
    }))
  })
}

const serveHomePage = (req, res) => {
  const Page = req.keystone.list('Page')
  const Service = req.keystone.list('Service')
  const Client = req.keystone.list('Client')
  const Project = req.keystone.list('Project')
  const Configuration = req.keystone.list('Configuration')

  return Promise.all([
    Page.model.findOne({slug: req.params.slug}),
    Page.model.findOne({slug: 'equipment'}),
    Service.model.find({}).sort('sortOrder'),
    Project.model.find({ featured: true }).sort('sortOrder'),
    Page.model.findOne({slug: 'contact'}),
    Configuration.model.findOne({active: true}),
  ])
    .then((results) => {
      res.json({
        page: fillImage(results[0]),
        equipment: sizeImage(results[1]),
        services: results[2],
        projects: results[3],
        contact: results[4],
        config: results[5],
      })
    })
    .catch((err) => {
      console.log(err); res.json(err)
    })
}

const serveDiscographyPage = (req, res) => {
  const Page = req.keystone.list('Page')
  const Service = req.keystone.list('Service')
  const Client = req.keystone.list('Client')
  const Project = req.keystone.list('Project')
  const Configuration = req.keystone.list('Configuration')

  return Promise.all([
    Page.model.findOne({slug: req.params.slug}),
    Project.model.find({}).sort('sortOrder'),
    Client.model.find({}).sort('sortOrder'),
    Page.model.findOne({slug: 'contact'}),
    Configuration.model.findOne({active: true}),
  ])
    .then((results) => {
      res.json({
        page: fillImage(results[0]),
        projects: results[1],
        clients: results[2],
        contact: results[3],
        config: results[4],
      })
    })
    .catch((err) => {
      console.log(err); res.json(err)
    })
}
