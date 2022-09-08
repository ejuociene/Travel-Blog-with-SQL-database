import sequelize from 'sequelize';
import { DataTypes } from 'sequelize';

const Posts = (sequelize) => {
	const Schema = {
		title: {
			type: DataTypes.STRING,
			allowNull: false
		},
		content: {
			type: DataTypes.TEXT
		},
		image: {
			type: DataTypes.STRING
		},
		category: {
			type: DataTypes.STRING
		},
		comment_count: {
			type: DataTypes.INTEGER,
			defaultValue: 0
		}
	};
	return sequelize.define('posts', Schema);
};

export default Posts;
