import express from 'express';
import db from '../database/connect.js';
import { auth } from '../middleware/auth.js';
import { commentsValidator } from '../middleware/validate.js';

const router = express.Router();

router.post('/', auth, commentsValidator, async (req, res) => {
	try {
		new db.Comments(req.body).save();
		res.send('Comment saved successfully');
	} catch (err) {
		res.status(500).send('Server error');
	}
});

export default router;
