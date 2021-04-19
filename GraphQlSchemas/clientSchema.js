import pkg from "apollo-server-express";
const { gql } = pkg;
export default gql`
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

  extend type Query {
    GetClientById(id: ID!): Client

    GetAllClients: [Client]
  }

  extend type Mutation {
    AddClient(Username: String, Email: String, Pass: String): Client

    UpdateClient(
      id: ID!
      Username: String
      Email: String
      Pass: String
      ClientLevel: Int
      Verified: Boolean
      Totalproducts: Int
    ): Client
  }

  input Clientinput {
    Username: String
    Email: String
    Pass: String
  }
`;
