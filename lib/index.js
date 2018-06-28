const { nodeEnv } = require('./util');
console.log(`Running in ${nodeEnv} mode...`);

//Read the query from the command line args (rather than a client)
const query = process.argv[2];

const ncSchema = require('../schema');
const {graphql} = require('graphql');


//execure the query against the defined schema above
graphql(ncSchema, query).then(result => {
    console.log(result);
})