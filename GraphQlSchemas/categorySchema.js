import pkg from "apollo-server-express";
const { gql } = pkg;

export default gql`
  extend type Query {
    GetCategories: [Category]
  }

  extend type Mutation {
    AddCategory(Name: String, TotalItems: Int, Images: String): Category
  }

  type Category {
    Name: String
    TotalItems: Int
    Images: String
  }
`;
