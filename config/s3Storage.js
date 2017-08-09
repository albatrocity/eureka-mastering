const keystone = require('keystone')

const storage = new keystone.Storage({
  adapter: require('keystone-storage-adapter-s3'),
  s3: {
    key: process.env.S3_KEY, // required; defaults to process.env.S3_KEY
    secret: process.env.S3_SECRET, // required; defaults to process.env.S3_SECRET
    bucket: 'eureka-mastering', // required; defaults to process.env.S3_BUCKET
    path: '/audio',
    headers: {
      'x-amz-acl': 'public-read', // add default headers; see below for details
    },
  },
  schema: {
    bucket: true, // optional; store the bucket the file was uploaded to in your db
    etag: true, // optional; store the etag for the resource
    path: true, // optional; store the path of the file in your db
    url: true, // optional; generate & store a public URL
  },
})

module.exports = storage
