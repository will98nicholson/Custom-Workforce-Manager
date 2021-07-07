module.exports = {
    User: require('./user'),
    Job: require('./job'),
    Service: require('./service'),
    Purchased: require('./purchased')
};

// User.hasMany(Job, {
//     foreignKey: 'user_id'
// })
