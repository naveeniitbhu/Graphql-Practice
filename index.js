import express from 'express';
import {graphqlHTTP} from 'express-graphql';
import schema from './schema';
import resolvers from './resolvers';

const app = express();
const root = resolvers;

app.get('/', (req, res) => {
    return res.json({
        msg: 'Welcome to graphql'
    });
})

app.use('/graphql',graphqlHTTP({
    schema : schema,
    rootValue: root,
    graphiql: true,  
}))
 
app.listen(4000, () => {
    console.log('App is running on PORT 4000')
})

// {user{
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