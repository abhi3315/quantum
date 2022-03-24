import { Router } from 'express';
import { API_ENDPOINTS } from '@quantum/momentum/src/constants/endpoint';
import { getRoutes } from './server.status.service';

export const router: Router = Router();

/**
 * To check if the server is up or not.
 */
router.get(API_ENDPOINTS.SERVER_STATUS, (req, res) => {
  res.status(200).send({
    status: 'server is running',
  });
});

/**
 * List out all the endpoints.
 */
router.get(API_ENDPOINTS.ROUTES, (req, res) => {
  const routes = getRoutes();
  res.status(200).send({
    numberOfRoutes: routes.length,
    routes: routes,
  });
});
