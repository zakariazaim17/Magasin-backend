//import ProductsSchema from "./productSchema.js";
import pkk from "apollo-server-express";
import ClientSchema from "./clientSchema.js";
import productSchema from "./productSchema.js";
import soldeSchema from "./soldeSchema.js";
import imageSchema from "./imagesSchema.js";
import favouriteSchema from "./favouriteSchema.js";
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
export default [
  linkSchema,
  ClientSchema,
  productSchema,
  soldeSchema,
  imageSchema,
  favouriteSchema,
];

//scalar Date
