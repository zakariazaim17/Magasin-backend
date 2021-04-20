import pkg from "apollo-server-express";
const { gql } = pkg;

export default gql`
  extend type Query {
    GetdiscountByID(id: ID!): Soldei
  }

  extend type Mutation {
    AddDiscount(Expiry: Datetime, Percentage: Int, Code: String): Soldei

    UpdateDiscount(
      id: ID
      Expiry: Datetime
      Percentage: Int
      Code: String
    ): Soldei

    DeleteDiscount(id: ID): Soldei
  }
  type Soldei {
    id: ID
    Expiry: Datetime
    Percentage: Int
    Code: String
  }
`;
