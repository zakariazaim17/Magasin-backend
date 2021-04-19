import pkg from "apollo-server-express";
const { gql } = pkg;

export default gql`
  extend type Query {
    GetdiscountByID(id: ID!): Soldei
  }

  extend type Mutation {
    AddDiscount(Expiry: Datetime, Percentage: Int, Code: String): Soldei
  }
  type Soldei {
    id: ID
    Expiry: Datetime
    Percentage: Int
    Code: String
  }
`;
