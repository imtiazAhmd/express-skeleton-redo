import express from 'express';
import nunjucks from 'nunjucks';
import config from '../config/config.js';
import { csrfProtection } from './middleware/csrfMiddleware.js';
import { setupMiddlewares } from './middleware/commonMiddleware.js';
import indexRouter from './routes/indexRoute.js';
import livereload from 'connect-livereload';


const app = express();

// Set up view engine (Nunjucks)
nunjucks.configure(config.paths.views, {
  autoescape: true,
  express: app,
  noCache: config.app.environment === 'development',
});

app.set('view engine', 'njk');

// Set up common middleware
setupMiddlewares(app);

// CSRF Protection middleware
app.use(csrfProtection);

// Set up routes
app.use('/', indexRouter);

// Use livereload middleware
if (process.env.NODE_ENV === 'development') {
  app.use(livereload());
}

// Start the server
app.listen(config.app.port, () => {
  console.log(`Server running on port ${config.app.port}`);
});
