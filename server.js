"use strict";

import pkg from "apollo-server-express";
const { ApolloServer } = pkg;
import express from "express";

import schemas from "./GraphQlSchemas/index.js";
import resolvers from "./GrapghqlResolvers/index.js";

import authpackage from "./passport/authenticate.js";
const { checkAuth } = authpackage;

import dotenv from "dotenv";
dotenv.config();

import cors from "cors";

import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";

import router from "./routes.js";
import connectMongo from "./db/db.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.urlencoded({ extended: false })); // for parsing html form x-www-form-urlencoded
app.use(express.json());

app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

app.use("/magasin", router);
app.use("/", express.static("../images"));

(async () => {
  try {
    const conn = await connectMongo();
    if (conn) {
      console.log("Connected to db");
    }

    const server = new ApolloServer({
      typeDefs: schemas,
      resolvers,
      context: async ({ req, res }) => {
        if (req) {
          const user = await checkAuth(req, res);
          console.log("app", user);
          return {
            req,
            res,
            user,
          };
        }
      },
    });

    server.applyMiddleware({ app });
    app.listen(3004, () => {
      console.log(`sever runs in : http://localhost:3004${server.graphqlPath}`);
    });
  } catch (e) {
    console.log(e.message);
  }
})();
