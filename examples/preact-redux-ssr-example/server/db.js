/**
 * DataBase mocker
 */

exports.getUser = function (id) {
    return {
        // id,
        name: 'Hans',
        age: Math.round(Math.random() * 50)
    };
};
