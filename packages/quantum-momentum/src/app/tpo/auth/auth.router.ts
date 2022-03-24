import { Router } from 'express';
import Tpo from '@quantum/momentum/src/models/tpo.model';
import { TPO_ENDPOINTS } from '@quantum/momentum/src/constants/endpoint';

// Export module for registering router in express app
export const router: Router = Router();

/**
 * To create TPO.
 */
router.post(TPO_ENDPOINTS.SIGNUP, (req, res) => {
  const { firstName, email, password } = req.body;

  const tpo = new Tpo({
    firstName,
    email,
    password,
  });

  tpo.save();

  res.status(201).send({
    success: true,
    data: tpo,
  });
});
