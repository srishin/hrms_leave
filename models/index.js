var path = require('path');
var fs = require('fs');
var basename = path.basename(module.filename);
var Sequelize = require('sequelize');
var config = require(__dirname + '/../config.json');
var dbConfig = config.database[config.env]
var db = {};

var sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, dbConfig);

fs.readdirSync(__dirname).filter(function(file) {
    return file !== basename;
}).forEach(function(file) {
    // var model = sequelize.import(path.join(__dirname, file));
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
    // db[model.name] = model;
});

Object.keys(db).forEach(function(modelName) {
    if (db[modelName].associate) {
        db[modelName].associate(db)
    }
});


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;