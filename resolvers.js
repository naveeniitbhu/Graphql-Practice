const users = []
let user = {}

const resolvers = {
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
    getUser: ({id}) => {
        return users.find(user => user.id ===id);
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

export default resolvers;


// query getUser{
//     getUser(id: "12232312") {
//       firstName
//       lastName
//     }
//   }