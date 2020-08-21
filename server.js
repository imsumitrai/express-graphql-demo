// const { ApolloServer, gql } = require("apollo-server");			// uncomment to use apollo server
const { ApolloServer, gql } = require("apollo-server-express"); // Comment this to disable express-apollo-server
const cors = require("cors");
const express = require("express");
const fs = require("fs");
const db = require("./db");

const app = express();
app.use(cors());
const port = 9000;

const typeDefs = gql(
  fs.readFileSync("./schema.graphql", { encoding: "utf-8" })
);

const resolvers = require("./resolvers");

const apolloServer = new ApolloServer({ typeDefs, resolvers });
// apolloServer
//   .listen({ port: port })										// uncomment to use apollo server
//   .then(({ url }) => console.log(`Server running at ${url}`));    // uncomment to use apollo server

apolloServer.applyMiddleware({ app, path: "/graphql" }); // Comment this to disable express-apollo-server

app.listen(port, () => console.info(`Server Running on port ${port}`)); // Comment this to disable express-apollo-server
