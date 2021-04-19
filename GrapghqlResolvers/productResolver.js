import Products from "../MongoModels/product.js";

export default {
  Query: {
    GetAllproducts: async (parent, args) => {
      try {
        const AllProducts = await Products.find().populate([
          { path: "Owner" },
          { path: "CodePromo" },
        ]);
        return AllProducts;
      } catch (e) {
        console.log("Failed to getall Products", e);
      }
    },

    GetProductsByClient: async (parent, args) => {
      try {
        const SpecificProduct = await Products.find().where({ Owner: args.id });
        return SpecificProduct;
      } catch (e) {
        console.log("Failed to get Product", e.message);
      }
    },
  },

  Mutation: {
    AddProduct: async (parent, args) => {
      try {
        const newProduct = await Products.create({
          ...args,
          Published: new Date(),
          OnStore: true,
        });
        return newProduct.save();
      } catch (e) {
        console.log("Failed to add product", e.message);
      }
    },
  },
};
