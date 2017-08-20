module.exports = function(sequelize, DataTypes) {
    const leaveTypes = sequelize.define('leaveTypes', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
        type: {
            type: DataTypes.STRING,
            unique: true,
        }
    }, {
        timestamps: false
    });
   
    return leaveTypes;
};