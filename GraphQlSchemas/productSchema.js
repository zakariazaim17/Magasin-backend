import pkg from "apollo-server-express";
const { gql } = pkg;
export default gql`
  type Products {
    id: ID
    Title: String
    Price: Int
    Category: String
    Description: String
    Published: Datetime
    Clian: [Client]
    OnStore: Boolean
    Quantity: Int
    Sizes: [String]
    CodePromo: [Soldei]

    Images: [String]
  }

  extend type Query {
    GetAllproducts: [Products]

    GetProductsByClient(id: ID!): [Products]
  }

  extend type Mutation {
    AddProduct(
      Title: String
      Price: Int
      Category: String
      Description: String
      Quantity: Int
      CodePromo: ID
      Clian: ID
    ): Products
  }

  input productenter {
    Title: String
    Price: Int
    Category: String
    Description: String
    Quantity: Int
    Sizes: [Sizedetail]
    CodePromo: ID
    clian: ID
  }

  input Sizedetail {
    koko: String
  }
`;
