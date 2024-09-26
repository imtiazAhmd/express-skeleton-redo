import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import config from '../../config/config.js';

export const setupMiddlewares = (app) => {
  app.use(cookieParser());
  app.use(bodyParser.urlencoded({ extended: true }));

  // Serve static files from public directory
  app.use(express.static(config.paths.static));
};
