var connection = require("../config/connection.js");


// * `selectAll()`
// * `insertOne()`
// * `updateOne()`


var orm = {
    selectAll: function (table, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function (table, a, cb) {
        var queryString = "INSERT INTO ?? SET ?"
        connection.query(queryString, [table, { burger_name: a, devoured: false }], function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    // An example of objColVals would be {name: panther, sleepy: true}
    updateOne: function (table, a, cb) {
        var queryString = "UPDATE ?? SET ? WHERE ?"

        connection.query(queryString, [table, { devoured: true }, { burger_name: a }], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    // delete: function(table, condition, cb) {
    //   var queryString = "DELETE FROM "
    //   queryString += " WHERE ";
    //   queryString += condition;

    //   connection.query(queryString, function(err, result) {
    //     if (err) {
    //       throw err;
    //     }

    //     cb(result);
    //   });
    // }
};


// var orm = {
//     // The last variable cb represents the anonymous function being passed from server.js
//     selectAll: function (table, cb) {
//         var queryString = "SELECT * FROM ??";
//         connection.query(queryString, [table], function (err, result) {
//             if (err) throw err;
//             cb(result);
//         });
//     },
//     insertOne: function (table, cb) {
//         var queryString = "SELECT * FROM ??";
//         connection.query(queryString, [table], function (err, result) {
//             if (err) throw err;
//             cb(result);
//         });
//     },
// };


module.exports = orm;
