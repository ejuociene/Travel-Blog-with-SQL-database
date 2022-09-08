import express from 'express';
import db from '../database/connect.js';
import { auth, adminAuth } from '../middleware/auth.js';
import { postValidator } from '../middleware/validate.js';
import upload from '../middleware/multer.js';
import { Op } from 'sequelize';

const router = express.Router();

router.get('/', async (req, res) => {
	const page = req.query.page;
	const options = {};
	(options.offset = (page - 1) * 6), (options.limit = 6);
	if (req.query.sort) {
		const order = req.query.sort.split('-');
		options.order = [ order ];
	}
	if (req.query.filter) {
		options.where = { category: req.query.filter };
	}
	if (req.query.search) {
		options.where = {
			...options.where,
			[Op.or]: [
				{ title: { [Op.like]: `%${req.query.search}%` } },
				{ content: { [Op.like]: `%${req.query.search}%` } }
			]
		};
	}
	try {
		let posts = await db.Posts.findAndCountAll(options);
		res.json(posts);
	} catch (err) {
		res.status(500).send('Server error');
	}
});

router.get('/all', async (req, res) => {
	try {
		let posts = await db.Posts.findAll();
		res.json(posts);
	} catch (err) {
		console.log(err);
		res.status(500).send('Server error');
	}
});

router.get('/categories', async (req, res) => {
	try {
		let categories = await db.Posts.findAll({ attributes: [ 'category' ] });
		categories = categories.map((item) => item.category);
		const unique = (value, index, self) => {
			return self.indexOf(value) === index;
		};
		const uniqueCategories = categories.filter(unique);
		res.json(uniqueCategories);
	} catch (err) {
		res.status(500).send('Server error');
	}
});

router.get('/post/:id', async (req, res) => {
	try {
		const post = await db.Posts.findByPk(req.params.id, {
			include: [
				{
					model: db.Comments,
					include: {
						model: db.Users
					}
				}
			],
			attributes: {
				exclude: [ 'postId', 'userId' ]
			}
		});
		res.json(post);
	} catch (err) {
		console.log(err);
		res.status(500).send('Server error');
	}
});

router.get('/search/:keyword', async (req, res) => {
	try {
		const posts = await db.Posts.findAll({
			where: {
				[Op.or]: [
					{ title: { [Op.like]: `%${req.params.keyword}%` } },
					{ content: { [Op.like]: `%${req.params.keyword}%` } }
				]
			}
		});
		res.json(posts);
	} catch (err) {
		res.status(500).send('Server error');
	}
});

router.get('/filter/:category', async (req, res) => {
	try {
		const posts = await db.Posts.findAll({
			where: {
				category: req.params.category
			}
		});
		res.json(posts);
	} catch (err) {
		res.status(500).send('Server error');
	}
});

router.post('/', adminAuth, upload.single('image'), postValidator, async (req, res) => {
	try {
		if (req.file) {
			req.body.image = '/uploads/' + req.file.filename;
		}
		new db.Posts(req.body).save();
		res.send('Post created successfully');
	} catch (err) {
		res.status(500).send('Server error');
	}
});

router.put('/edit/:id', adminAuth, upload.single('image'), postValidator, async (req, res) => {
	try {
		const post = await db.Posts.findByPk(req.params.id);
		if (req.file) {
			req.body.image = '/uploads/' + req.file.filename;
		}
		post.update(req.body);
		res.send('Post updated successfully');
	} catch (err) {
		res.status(500).send('Server error');
	}
});

router.put('/edit/comment/:id', adminAuth, async (req, res) => {
	try {
		const post = await db.Posts.findByPk(req.params.id);
		req.body.comment_count = parseInt(post.comment_count) + 1;
		post.update(req.body);
		res.send('Comment added successfully');
	} catch (err) {
		res.status(500).send('Server error');
	}
});

router.delete('/delete/:id', adminAuth, async (req, res) => {
	try {
		const post = await db.Posts.findByPk(req.params.id);
		post.destroy();
		res.send('Post deleted successfully');
	} catch (err) {
		res.status(500).send('Server error');
	}
});

export default router;
