module.exports = function(sequelize, DataTypes) {
    const users = sequelize.define('users', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: {
            type: DataTypes.STRING
        },
        lastName: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.TEXT
        },
        accessToken: {
            type: DataTypes.STRING
        }
    }, {
        timestamps: false
    });

    users.associate = function(models) {
        models.users.belongsTo(models.roles);
    };

    return users;
};