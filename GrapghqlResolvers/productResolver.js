import Products from "../MongoModels/product.js";
import Images from "../MongoModels/image.js";
import Soldes from "../MongoModels/solde.js";

import apollopackage from "apollo-server-express";
const { AuthenticationError } = apollopackage;
export default {
  Query: {
    GetAllproducts: async (parent, args, { user }) => {
      if (!user) {
        throw new AuthenticationError("You are not authenticated");
      }
      try {
        const AllProducts = await Products.find().populate([
          { path: "CodePromo" },
          { path: "Owner" },
        ]);
        return await AllProducts;
      } catch (e) {
        console.log("Failed to getall Products", e.message);
      }
    },

    GetProductsByClient: async (parent, args, { user }) => {
      if (!user) {
        throw new AuthenticationError("You are not authenticated");
      }
      try {
        const UserProducts = await Products.find()
          .where({ Owner: args.id })
          .populate([{ path: "CodePromo" }, { path: "Owner" }]);
        return UserProducts;
      } catch (e) {
        console.log("Failed to get Product", e.message);
      }
    },

    GetProductbyID: async (parent, args, { user }) => {
      if (!user) {
        throw new AuthenticationError("You are not authenticated");
      }
      try {
        const SpecificProduct = await Products.findById(args.id).populate([
          { path: "CodePromo" },
          { path: "Owner" },
        ]);
        return SpecificProduct;
      } catch (e) {
        console.log("Failed to get specific Product", e.message);
      }
    },

    GetProductsByCategory: async (parent, args, { user }) => {
      if (!user) {
        throw new AuthenticationError("You are not authenticated");
      }
      try {
        const CategorizedProducts = await Products.find()
          .where({ Category: args.Category })
          .populate([{ path: "CodePromo" }, { path: "Owner" }]);
        return CategorizedProducts;
      } catch (e) {
        console.log("Filed Products based on Category", e.message);
      }
    },
  },

  Mutation: {
    AddProduct: async (parent, args, { user }) => {
      if (!user) {
        throw new AuthenticationError("You are not authenticated");
      }
      try {
        const newProduct = await Products.create({
          ...args,
          Published: new Date(),
          OnStore: true,
        });
        const test = await newProduct.save();

        const Product = await Products.findById(test._id).populate([
          { path: "Owner" },
          { path: "CodePromo" },
        ]);
        return Product;
      } catch (e) {
        console.log("Failed to add product", e.message);
      }
    },

    UpdateProduct: async (parent, args, { user }) => {
      if (!user) {
        throw new AuthenticationError("You are not authenticated");
      }
      try {
        const updatedProduct = await Products.findByIdAndUpdate(args.id, args, {
          new: true,
        });
        return updatedProduct.save();
      } catch (e) {
        console.log("Failed to update Client", e.message);
      }
    },

    DeleteProducts: async (parent, args, { user }) => {
      if (!user) {
        throw new AuthenticationError("You are not authenticated");
      }
      try {
        const producttodelete = await Products.findById(args.id).populate([
          { path: "CodePromo" },
        ]);
        const deletedImage = await Images.findOneAndDelete().where({
          photo: producttodelete.Images,
        });
        const deletedPromo = await Soldes.findOneAndDelete({
          _id: producttodelete.CodePromo,
        });
        const deletedProduct = await Products.findOneAndDelete({
          _id: args.id,
        });
        console.log(deletedImage);
        return { deletedImage };
      } catch (e) {
        console.log("Failed to Delete Product", e.message);
      }
    },
  },
};
