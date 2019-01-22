require("dotenv").config();
const fastify = require('fastify')({
  logger: true
});

const helmet = require("fastify-helmet");

fastify.register(
  helmet,
  // Example of passing an option to x-powered-by middleware
  { hidePoweredBy: { setTo: "PHP 4.2.0" } }
);

fastify.register(require("fastify-cors"), {
  origin: '*', // for development purposes only, will need to change when in server
});

const swagger = require('./config/swagger');

const routes = require('./routes');
const Todo = require('./models/Todo');

const mongoose = require("mongoose");
const connectionUrl = process.env.MONGODB_URL || 'mongodb://localhost/polymathlabs-todo';

mongoose.connect(connectionUrl, { useNewUrlParser: true })
.then(() => {
  fastify.log.info(`MongoDB connected to DB ${connectionUrl}`);
})
.catch(err => {
  fastify.log.error(err);
});

fastify.register(require('fastify-swagger'), swagger.options);

fastify.get('/', async(req, res) => {
  return { success: true, message: 'server working' };
});

routes.forEach((route, idx) => {
  fastify.route(route);
});

const getData = async() => {
  try {
    
  } catch(err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

const initServer = async () => {
  try {
    await fastify.listen(3001);
    fastify.swagger();
    fastify.log.info(`server is running on port ${fastify.server.address().port}`);
  } catch(err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

getData();
initServer();