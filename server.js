
const express = require('express');
const { createHandler } = require("graphql-http/lib/use/express")
const { ruruHTML } = require("ruru/server")


const app =  express();

const {schema} = require('#schema/index.js')

const {root} = require('#resolver/index.js')

// graphql({schema,source:'{name,age,email}',rootValue:root})
//     .then(result => console.log(result))
//     .catch(error => console.log(error));
app.get('/', (req, res) => {
    res.type("html")
    res.end(ruruHTML({ endpoint: "/graphql"}))
})
// Handle GraphQL queries at /graphql
app.all('/graphql', createHandler({ schema, rootValue: root }));

app.listen(3000,() => {
    console.log('server is running on port 3000')
    console.log('server is running on  http://localhost:3000')
    console.log("Running a GraphQL API server at http://localhost:3000/graphql")
})
