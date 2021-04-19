//import ProductsSchema from "./productSchema.js";
import pkk from "apollo-server-express";
import ClientSchema from "./clientSchema.js";
const { gql } = pkk;
const linkSchema = gql`
  scalar Datetime

  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }
`;
export default [linkSchema, ClientSchema];

//scalar Date
