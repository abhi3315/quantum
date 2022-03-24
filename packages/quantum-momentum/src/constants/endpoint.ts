/**
 * REST endpoints for common routes.
 */
const API_BASE = '/api';

type API_ENDPOINTS = typeof API_ENDPOINTS[keyof typeof API_ENDPOINTS];

export const API_ENDPOINTS = {
  SERVER_STATUS: `${API_BASE}/server-status`,
  ROUTES: `${API_BASE}/routes`,
} as const;

/**
 * REST endpoints for TPO routes.
 */
const TPO_BASE = '/tpo';

type TPO_ENDPOINTS = typeof TPO_ENDPOINTS[keyof typeof TPO_ENDPOINTS];

export const TPO_ENDPOINTS = {
  LOGIN: `${TPO_BASE}/login`,
  SIGNUP: `${TPO_BASE}/signup`,
} as const;

/**
 * REST endpoint for Student routes
 */
const STUDENT_BASE = '/student';

type STUDENT_ENDPOINTS = typeof STUDENT_ENDPOINTS[keyof typeof STUDENT_ENDPOINTS];

export const STUDENT_ENDPOINTS = {
  LOGIN: `${STUDENT_BASE}/login`,
  SIGNUP: `${STUDENT_BASE}/signup`,
} as const;

