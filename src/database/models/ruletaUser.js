/* jshint indent: 1 */

export default function(sequelize, DataTypes) {
	const ruletaUser = sequelize.define('ruletaUser', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		identification_type_id: {
			type: DataTypes.INTEGER(9),
			allowNull: false,
			field: 'identification_type_id'
		},
		identification_number: {
			type: DataTypes.INTEGER(30),
			allowNull: false,
			field: 'identification_number'
		},
		guid: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'guid'
		},
		centro_comercial_registro: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'centro_comercial_registro'
		},
		iswinner: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			field: 'iswinner'
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
		tableName: 'ruleta_user'
	});



	return ruletaUser;
};
