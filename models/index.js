const User = require('./User');
const Recipe = require('./Recipe');
const Comment = require('./Comment');

Recipe.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

Recipe.hasMany(Comment, {
    foreignKey: 'postId',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

module.exports = {
    User,
    Comment,
    Recipe
};