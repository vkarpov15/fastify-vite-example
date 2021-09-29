import { loadRoutes } from 'fastify-vite-vue/app'
import * as index from './views/index.vue'

export default loadRoutes({ './views/index.vue': index })