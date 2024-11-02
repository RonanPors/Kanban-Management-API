import { rateLimit } from 'express-rate-limit';

export const limiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 10, // limit each IP to 10 requests
  standardHeaders: true, // add the `RateLimit-*` headers to the response
  legacyHeaders: false, // remove the `X-RateLimit-*` headers from the response
  message: 'Too many requests from this IP, please try again after 5 minutes',
  statusCode: 429,
  skipFailedRequests: true, // only count failed requests
  skipSuccessfulRequests: false, // count successful requests
  keyGenerator: (req) => req.ip, // generate the key for each request
});
