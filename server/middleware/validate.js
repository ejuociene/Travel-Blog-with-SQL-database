import Joi from 'joi';

const validate = (schema, req, res, next) => {
	const options = {
		abortEarly: true,
		stripUnknown: true
	};
	const { error, value } = schema.validate(req.body, options);
	let message = '';
	if (error) {
		console.log(error.details[0].path[0]);
		switch (error.details[0].path[0]) {
			case 'email':
				message = 'Incorrect email address';
				break;
			case 'password':
				message = 'Password needs to be between 5 to 12 characters';
				break;
			case 'newPassword':
				message = 'Password needs to be between 5 to 12 characters';
				break;
			case 'title':
				message = 'Please fill in post title';
				break;
			default:
				message = 'Please fill in ALL fields';
				break;
		}
		return res.status(500).send(message);
	}
	req.body = value;
	next();
};

export const postValidator = (req, res, next) => {
	console.log(req.body);
	const schema = Joi.object({
		title: Joi.string().min(1).max(255).required(),
		content: Joi.string().allow(''),
		category: Joi.string().allow(''),
		image: Joi.string().allow(''),
		comment_count: Joi.number().allow('')
	});
	validate(schema, req, res, next);
};

export const registerValidator = (req, res, next) => {
	const schema = Joi.object({
		firstName: Joi.string().min(1).max(255).required(),
		lastName: Joi.string().min(1).max(255).required(),
		email: Joi.string().email().required(),
		password: Joi.string().min(5).max(12).required()
	});
	validate(schema, req, res, next);
};

export const userUpdateValidator = (req, res, next) => {
	const schema = Joi.object({
		firstName: Joi.string().min(1).max(255).required(),
		lastName: Joi.string().min(1).max(255).required(),
		email: Joi.string().email().required()
	});
	validate(schema, req, res, next);
};

export const passwordValidator = (req, res, next) => {
	const schema = Joi.object({
		password: Joi.string().min(5).max(12).required(),
		newPassword: Joi.string().min(5).max(12).required()
	});
	validate(schema, req, res, next);
};

export const loginValidator = (req, res, next) => {
	const schema = Joi.object({
		email: Joi.string().email().required(),
		password: Joi.string().min(5).max(12).required()
	});
	validate(schema, req, res, next);
};

export const commentsValidator = (req, res, next) => {
	const schema = Joi.object({
		comment: Joi.string().min(1).max(255).required(),
		postId: Joi.number().required(),
		userId: Joi.number().required()
	});
	validate(schema, req, res, next);
};

export default validate;
