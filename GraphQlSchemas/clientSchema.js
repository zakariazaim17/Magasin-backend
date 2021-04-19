import pkg from "apollo-server-express";
const { gql } = pkg;
export default gql`
  extend type Query {
    GetClientById(id: ID!): Client
  }

  extend type Mutation {
    AddClient(Username: String, Email: String, Pass: String): Client
  }

  input Clientinput {
    Username: String
    Email: String
    Pass: String
  }

  type Client {
    id: ID
    Username: String
    Email: String
    Pass: String
    Joined: Datetime
    ClientLevel: Int
    Verified: Boolean
    Totalproducts: Int
  }
`;
