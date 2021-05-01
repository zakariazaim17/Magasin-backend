import pkg from "apollo-server-express";
const { gql } = pkg;

export default gql`
  extend type Query {
    GetFavourites: [Favourite]
    GetUserFavourites(id: ID): [Favourite]
  }

  extend type Mutation {
    AddFavourites(Owner: ID, Products: ID): Favourite

    DeleteFavourite(id: ID): Favourite
  }

  type Favourite {
    id: ID
    Owner: Client
    Products: Products
  }
`;
