import pkg from "apollo-server-express";
const { gql } = pkg;
export default gql`
  type Client {
    id: ID
    username: String
    Email: String
    password: String
    Joined: Datetime
    ClientLevel: Int
    Verified: Boolean
    Totalproducts: Int
    token: String
  }

  extend type Query {
    GetClientById(id: ID!): Client

    GetAllClients: [Client]

    login(username: String!, password: String!): Client
  }

  extend type Mutation {
    AddClient(username: String, Email: String, password: String): Client

    UpdateClient(
      id: ID!
      username: String
      Email: String
      password: String
      ClientLevel: Int
      Verified: Boolean
      Totalproducts: Int
    ): Client
  }
`;
