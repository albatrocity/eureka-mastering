require('dotenv').load()
const express = require('express')
const keystone = require('keystone')
const next = require('next')
const cookieParser = require('cookie-parser')
const multer = require('multer')
const body = require('body-parser')
const session = require('express-session')
const serve = require('serve-static')
const api = require('./api')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const cookieSecret = process.env.COOKIE_SECRET || '123456789LETSEATPIEANDHAVEAGOODtime'


app.prepare()
  .then(() => {
    const server = express()
    server.use(cookieParser(cookieSecret))
    server.use(body.urlencoded({ extended: true }))
    server.use(body.json())
    server.use(multer())
    server.use(session({
      secret: cookieSecret
    }))

    keystone.init({
      'name': 'Eureka Mastering',
      'brand': 'Eureka Mastering',
      'session store': 'mongo',
      'updates': 'updates',
      'auth': true,
      'user model': 'User',
      'auto update': true,
      'cookie secret': cookieSecret,
      'admin path': 'admin',
    })

    keystone.set('cloudinary config', {
      cloud_name: process.env.CLOUDINARY_NAME,
      api_key: process.env.CLOUDINARY_KEY,
      api_secret: process.env.CLOUDINARY_SECRET
    })

    keystone.import('models')
    server.use(serve('./public'))

    keystone.set('app', server)
    server.use('/admin', require('keystone/admin/server/app/createStaticRouter.js')(keystone))
    server.use('/admin', require('keystone/admin/server/app/createDynamicRouter.js')(keystone))
    api(server, keystone)

    server.get('*', (req, res) => {
      return handle(req, res)
    })
    server.get('/discography', (req, res) => {
      return handle(req, res)
    })


    // server.listen(3000, (err) => {
    //   if (err) throw err
    //   console.log('> Ready on http://localhost:3000')
    // })
    keystone.start()
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })
