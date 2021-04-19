//import ProductResolver from "./productResolver.js";
import Clientresolver from "./clientResolver.js";
//import pkg from "graphql-iso-date";
import pks from "graphql";
const { GraphQLScalarType, Kind } = pks;

const customScalarResolver = {
  Datetime: new GraphQLScalarType({
    name: "DateTime",
    description: "Datetime scalar type",

    parseValue(value) {
      return new Date(value);
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return parseInt(ast.value, 10);
      }
      return null;
    },
    serialize(value) {
      const date = new Date(value);

      return date.toISOString();
    },
  }),
};

export default [customScalarResolver, Clientresolver];
