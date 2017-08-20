module.exports = function(sequelize, DataTypes) {
    const roles = sequelize.define('roles', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true // Automatically gets converted to SERIAL for postgres
        },
        name: {
            type: DataTypes.STRING,
            unique: true,
        }
    }, {
        timestamps: false
    });
   
    return roles;
};