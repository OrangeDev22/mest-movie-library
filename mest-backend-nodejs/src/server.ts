import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import { ApolloServer, gql } from "apollo-server-express";

//For env File
dotenv.config();

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello, world!",
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });
const app: any = express();

const port = process.env.PORT || 8000;

app.get("/", (req: Request, res: Response) => {
  res.send("Mest Node Server IS ALIVE!");
});

(async () => {
  await apolloServer.start();

  apolloServer.applyMiddleware({ app });
  app.listen(port, () => {
    console.log(`Server is Fire at http://localhost:${port}`);
  });
})();
