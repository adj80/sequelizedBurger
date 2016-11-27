'use strict';
module.exports = function(sequelize, DataTypes) {
	var Burger = sequelize.define('Burger', {
		name: DataTypes.STRING,
		devoured: DataTypes.Boolean
	}, {
		tableName: 'burgers',

		classMethods: {
			associate: function(models) {
				//define associations here
			}

		}
	});
	return Burger;
};