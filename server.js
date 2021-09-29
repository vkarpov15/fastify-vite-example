const fastify = require('fastify')()
const fastifyVite = require('fastify-vite')
const fastifyViteVue = require('fastify-vite-vue')

async function main () {
  await fastify.register(fastifyVite, {
    api: true,
    root: __dirname,
    renderer: fastifyViteVue,
  })

  return fastify
}

if (require.main === module) {
  fastifyVite.app(main, (fastify) => {
    fastify.listen(3000, (err, address) => {
      if (err) {
        console.error(err)
        process.exit(1)
      }
      console.log(`Server listening on ${address}`)
    })
  })
}

module.exports = main
