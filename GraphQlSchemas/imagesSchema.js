import pkg from "apollo-server-express";
const { gql } = pkg;

export default gql`
  extend type Query {
    GetImages: [Image]
  }

  extend type Mutation {
    DeleteImage(photo: String): Image
  }

  type Image {
    id: ID
    photo: String
  }
`;
