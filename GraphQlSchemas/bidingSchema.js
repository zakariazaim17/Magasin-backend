import pkg from "apollo-server-express";
const { gql } = pkg;

export default gql`
  extend type Query {
    GetBidings: [Biding]
  }

  extend type Mutation {
    AddBiding(
      Title: String
      Initialprice: Int
      Owner: ID
      participants: Int
    ): Biding

    DeleteBiding(id: ID): Biding
  }

  type Biding {
    id: ID
    Title: String
    Initialprice: Int
    participants: Int
    Owner: Client
  }
`;
