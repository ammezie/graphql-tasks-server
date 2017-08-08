const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const schema = require('./schema/index');

const PORT = 3000;

const app = express();

// Graphql
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

// Graphiql
app.use('/graphiql', graphiqlExpress({ endpointURL: 'graphql' }));

app.listen(PORT, () => console.log(`GraphiQL is running on http://localhost:${PORT}/graphiql`));