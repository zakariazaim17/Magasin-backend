import pkg from "apollo-server-express";
const { gql } = pkg;
export default gql`
  extend type Query {
    products: [Products]
  }

  type Products {
    id: ID
    Title: String
    Price: Int
    Category: String
    Description: String
    Published: Date
    OnStore: Boolean
    Quantity: Number
    Sizes: [String]
    CodePromo: [Solde]
    Owner: [Client]
    Images: [Image]
  }
`;
