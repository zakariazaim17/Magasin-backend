import { gql } from "apollo-server-express";

export default gql`
  type Solde {
    id: ID
    Expiry: Date
    Percentage: Int
    code: String
  }
`;
