module.exports = function(sequelize, DataTypes) {
    const requests = sequelize.define('requests', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fromDate: {
            type: DataTypes.DATE,
        },
        toDate: {
            type: DataTypes.DATE,
        },
        staus:{
            type:DataTypes.ENUM,
            values: ['active', 'pending', 'rejected','approved']
        }
    }, {});

    requests.associate = function(models) {
        models.requests.belongsTo(models.users);
        models.requests.belongsTo(models.quota);
    };

    return requests;
};