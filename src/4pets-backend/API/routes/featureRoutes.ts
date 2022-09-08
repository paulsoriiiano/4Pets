import express from 'express';

import * as feature from '../controllers/featureController';

const router = express.Router();

//router.route('/').post(f.createAccount);
router.route('/:zipCode').post(feature.zipFeature);

export default router;