const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('./resolvers');

const typeDefs = `
    type Project {
        id: ID!
        name: String!
        completed: Boolean!
        tasks: [Task]
    }
    type Task {
        id: ID!
        description: String!
        completed: Boolean!
        project: Project
    }
    type Query {
        projects: [Project]
        tasks: [Task]
        projectByName(name: String!): Project
        taskByName(name: String!): Task
        completedTasks(completed: Boolean!); [Task]
    }
`;

module.exports = makeExecutableSchema({ typeDefs, resolvers });