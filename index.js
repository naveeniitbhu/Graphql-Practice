import express from 'express';
import {graphqlHTTP} from 'express-graphql';
import schema from './schema';

const app = express();

app.get('/', (req, res) => {
    return res.json({
        msg: 'Welcome to graphql'
    });
})

const users = []
let user = {}

const root = {
    // hello: () => 'Hello welcome'
    item: () => {
        return {
            id: "1212",
            text: "this is hackernew",
            timeISO: "2pm",
            time: 1232132,
            title: 'Graphql Learning',
            deleted: false
        }
    },
    user: () => {
        return {
            firstName: 'Jane',
            lastName: 'Doe',
            emails: [{
                email: 'jane@gmail.com'
            },
            {
                email: 'jane@yahoo.com'
            }]
        }
    },
    users: () => {
        return users
    },
    createUser: ({input}) => {
        user = input;
        users.push(user);
        return user;
    }
}

// {user{
//     firstName
//     lastName
//     emails{
//       email
//     }
//   }}

app.use('/graphql',graphqlHTTP({
    schema : schema,
    rootValue: root,
    graphiql: true,  
}))
 
app.listen(4000, () => {
    console.log('App is running on PORT 4000')
})

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