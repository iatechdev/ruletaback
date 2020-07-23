/* jshint indent: 1 */

export default function(sequelize, DataTypes) {
	const ruletaCC = sequelize.define('ruletaCC', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		idcc: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'idcc'
		},
		description: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'description'
		},
		quantity: {
			type: DataTypes.INTEGER(9),
			allowNull: false,
			field: 'quantity'
		},
		winners: {
			type: DataTypes.INTEGER(9),
			allowNull: false,
			field: 'winners'
		},
		available: {
			type: DataTypes.INTEGER(9),
			allowNull: false,
			field: 'available'
		},
		msg: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'msg'
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'updatedAt'
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'createdAt'
		}
	}, {
		tableName: 'ruleta_cc'
	});



	return ruletaCC;
};
