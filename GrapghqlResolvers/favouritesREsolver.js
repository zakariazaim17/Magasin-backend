import Favourites from "../MongoModels/favourite.js";

export default {
  Query: {
    GetFavourites: async (parent, args) => {
      try {
        const favourites = await Favourites.find().populate([
          { path: "Owner" },
          { path: "Products" },
        ]);
        return favourites;
      } catch (e) {
        console.log("Failed to Get Favourites", e.message);
      }
    },

    GetUserFavourites: async (parent, args) => {
      try {
        const userFaavourite = await Favourites.find()
          .where({
            Owner: args.id,
          })
          .populate([{ path: "Owner" }, { path: "Products" }]);
        return userFaavourite;
      } catch (e) {
        console.log("Failed to get user's favourite  (Resolver)", e.message);
      }
    },
  },
  Mutation: {
    AddFavourites: async (parent, args) => {
      try {
        const newFavourite = await Favourites.create(args);
        return newFavourite.save();
      } catch (e) {
        console.log("Failed to Add Favourites (REsolvers)", e.message);
      }
    },

    DeleteFavourite: async (parent, args) => {
      try {
        const deletedFavourite = await Favourites.findOneAndDelete().where({
          Owner: args.Owner,
          Products: args.Products,
        });
        return deletedFavourite;
      } catch (e) {
        console.log("FAiled to delete FAvourite (Resolver)", e.message);
      }
    },
  },
};
