import Categories from "../MongoModels/categorie.js";

export default {
  Query: {
    GetCategories: async (parent, args, { user }) => {
      if (!user) {
        throw new AuthenticationError("You are not authenticated");
      }
      try {
        const categorie = await Categories.find();
        return categorie;
      } catch (e) {
        console.log("FAiled to get Categories", e.message);
      }
    },
  },

  Mutation: {
    AddCategory: async (parent, args, { user }) => {
      if (!user) {
        throw new AuthenticationError("You are not authenticated");
      }
      try {
        const newCategory = await Categories.create(args);
        return newCategory;
      } catch (e) {
        console.log("Failed to add Category", e.message);
      }
    },
  },
};
