"use strict";

var _express = _interopRequireDefault(require("express"));

var _expressGraphql = require("express-graphql");

var _schema = _interopRequireDefault(require("./schema"));

var _resolvers = _interopRequireDefault(require("./resolvers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var root = _resolvers["default"];
app.get('/', function (req, res) {
  return res.json({
    msg: 'Welcome to graphql'
  });
});
app.use('/graphql', (0, _expressGraphql.graphqlHTTP)({
  schema: _schema["default"],
  rootValue: root,
  graphiql: true
}));
app.listen(4000, function () {
  console.log('App is running on PORT 4000');
}); // {user{
//     firstName
//     lastName
//     emails{
//       email
//     }
//   }}
// mutation {
//     createUser(input: {id: "adfsdfa132", firstName: "Jasne", lastName: "dodod", email: "jane@gmail.com"}) {
//       firstName
//       lastName
//       email
//       id
//     }
//   }
// mutation createUser($input: UserInput){
//     createUser(input: $input) {
//       firstName
//       lastName
//       email
//       id
//     }
//   }
//   query findAllUsers {
//     users{
//       id
//       firstName
//     }
//   }
