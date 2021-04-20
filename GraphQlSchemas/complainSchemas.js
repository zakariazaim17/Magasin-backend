import pkg from "apollo-server-express";
const { gql } = pkg;

export default gql`
  extend type Query {
    GetComplains: [Complain]
  }

  extend type Mutation {
    AddComplain(From: ID, To: ID, Content: String): Complain

    DeleteComplain(id: ID): Complain

    UpdateComplain(id: ID, Status: String): Complain
  }

  type Complain {
    From: Client
    To: Client
    Content: String
    Status: String
  }
`;
