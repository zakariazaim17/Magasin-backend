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
    Owner: Client
    OnStore: Boolean
    Quantity: Int
    Sizes: [String]
    CodePromo: Soldei

    Images: String
  }

  extend type Query {
    GetAllproducts: [Products]

    GetProductsByClient(id: ID!): [Products]

    GetProductbyID(id: ID!): Products
  }

  extend type Mutation {
    AddProduct(
      Title: String
      Price: Int
      Category: String
      Description: String
      Quantity: Int
      CodePromo: ID
      Owner: ID
      Images: String
    ): Products

    UpdateProduct(
      id: ID
      Title: String
      Price: Int
      Category: String
      Description: String
      OnStore: Boolean
      Quantity: Int
      CodePromo: ID
    ): Products

    DeleteProducts(id: ID): Products
  }
`;
