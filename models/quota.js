module.exports = function(sequelize, DataTypes) {
    const quota = sequelize.define('quota', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
        quota: {
            type: DataTypes.INTEGER
        },
        maxConstraint:{
            type: DataTypes.INTEGER
        }
    }, {
        timestamps: false
    });
     quota.associate = function(models) {
        models.quota.belongsTo(models.roles);
        models.quota.belongsTo(models.leaveTypes);
    };
   
    return quota;
};