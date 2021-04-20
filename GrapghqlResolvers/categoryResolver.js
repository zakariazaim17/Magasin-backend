import Categories from "../MongoModels/categorie.js";

export default {
  Query: {
    GetCategories: async (parent, args) => {
      try {
        const categorie = await Categories.find().populate([
          { path: "Images" },
        ]);
        return categorie;
      } catch (e) {
        console.log("FAiled to get Categories", e.message);
      }
    },
  },

  Mutation: {
    AddCategory: async (parent, args) => {
      try {
        const newCategory = await Categories.create(args);
        return newCategory;
      } catch (e) {
        console.log("Failed to add Category", e.message);
      }
    },
  },
};
