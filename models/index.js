const User = require('./user');
const Job = require('./job');

User.hasMany(Job, {
    foreignKey: 'user_id'
})


module.exports = { User, Job };
