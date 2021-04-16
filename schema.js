import {buildSchema} from 'graphql';
const schema = buildSchema(`
  type HackerNewsItem {
    id: String
    text: String
    timeISO: String
    time: Int
    title: String
    deleted: Boolean
  }

  type User {
    id: ID
    firstName: String!
    lastName: String!
    email: String
  }

  type Query {
      item: HackerNewsItem
      getUser(id:ID): User
      users: [User]
  }
  
  input UserInput {
    id: ID
    firstName: String!
    lastName: String!
    email: String
  }

  type Mutation {
    createUser(input: UserInput): User
  }
  `)

export default schema;

// const schema = buildSchema(`
//     type Query {
//         hello: String
//     }
// `);

// Below HackerNewsItem is a type like String

// const schema = buildSchema(`
//   type HackerNewsItem {
//     id: String
//     text: String
//     timeISO: String
//     time: Int
//     title: String
//     deleted: Boolean
//   }

//   type Email {
//     email: String!
//   }

//   type User {
//     firstName: String!
//     lastName: String!
//     emails: [Email]
//   }

//   type Query {
//       item: HackerNewsItem
//       user: User
//   }`)

// export default schema;

