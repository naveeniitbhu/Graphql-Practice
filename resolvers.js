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

export default resolvers;