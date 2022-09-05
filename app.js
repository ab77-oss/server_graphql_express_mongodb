const express = require("express")
require('dotenv').config();
const connectDB = require("./db");
const cors = require('cors');
const graphqlHTTP = require("express-graphql").graphqlHTTP;
const graphqlSchema = require("./graphql/schema")
const graphqlResolvers = require("./graphql/resolvers");
const port=process.env.PORT || 5000;



const app = express()

connectDB();

app.use(cors());

app.use(
    "/graphql",
    graphqlHTTP({
        schema:graphqlSchema,
        rootvalue:graphqlResolvers,
        graphiql:process.env.NODE_ENV === 'development'
    })
)

app.listen(port, ()=> {
    console.log(`server running on port ${port}`)
});