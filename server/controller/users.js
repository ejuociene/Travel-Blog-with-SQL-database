import express from 'express';
import bcrypt from 'bcrypt';
import db from '../database/connect.js';
import { registerValidator } from '../middleware/validate.js';
import { userUpdateValidator } from '../middleware/validate.js';
import { loginValidator } from '../middleware/validate.js';
import { passwordValidator } from '../middleware/validate.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();
const saltRounds = 10;

router.post('/register', registerValidator, async (req, res) => {
	try {
		const userExists = await db.Users.findOne({ where: { email: req.body.email } });
		if (userExists) {
			res.status(401).send('This email is already used');
			return;
		}
		req.body.password = await bcrypt.hash(req.body.password, saltRounds);
		await db.Users.create(req.body);
		res.send('Successfully registered!');
	} catch (err) {
		res.status(400).send('Registration unsuccessful');
	}
});

router.put('/user-update', auth, userUpdateValidator, async (req, res) => {
	try {
		const user = await db.Users.findOne({ where: { id: req.session.user.id } });
		user.update(req.body);
		res.send('User details updated successfully');
	} catch (err) {
		res.status(500).send('Server error');
	}
});

router.put('/password-update', auth, passwordValidator, async (req, res) => {
	try {
		const user = await db.Users.findOne({ where: { id: req.session.user.id } });
		if (await bcrypt.compare(req.body.password, user.password)) {
			req.body.password = await bcrypt.hash(req.body.newPassword, saltRounds);
			user.update(req.body);
			return res.send('Password updated successfully');
		} else {
			return res.status(401).send('Incorrect password');
		}
	} catch (err) {
		res.status(500).send('Server error');
	}
});

router.post('/login', loginValidator, async (req, res) => {
	try {
		const user = await db.Users.findOne({ where: { email: req.body.email } });
		if (!user) {
			return res.status(401).send({ message: 'This user does not exist' });
		}
		if (await bcrypt.compare(req.body.password, user.password)) {
			req.session.loggedin = true;
			req.session.user = {
				id: user.id,
				firstName: user.firstName,
				lastName: user.lastName,
				email: user.email,
				role: user.role
			};
			return res.send({ message: "You're now logged in. Redirecting...", user: req.session.user });
		} else {
			return res.status(401).send({ message: 'Login unsuccessfull' });
		}
	} catch (err) {
		console.log(err);
		return res.status(500).send({ message: 'Server error' });
	}
});

router.get('/logout', (req, res) => {
	req.session.destroy();
	return res.send("You're now logged out. Redirecting...");
});

router.get('/check-auth', auth, async (req, res) => {
	try {
		res.send(req.session.user);
	} catch (err) {
		console.log(err);
		res.send('Server error');
	}
});

router.get('/all-posts/:userid', async (req, res) => {
	try {
		const user = await db.Users.findByPk(req.params.userid, {
			include: db.Posts
		});
		res.json(user);
	} catch (err) {
		res.status(500).send('Server error');
	}
});

export default router;
