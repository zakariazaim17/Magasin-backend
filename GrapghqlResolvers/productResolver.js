import Products from "../MongoModels/product.js";
import Images from "../MongoModels/image.js";
import Soldes from "../MongoModels/solde.js";
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
        const UserProducts = await Products.find().where({ Owner: args.id });
        return UserProducts;
      } catch (e) {
        console.log("Failed to get Product", e.message);
      }
    },

    GetProductbyID: async (parent, args) => {
      try {
        const SpecificProduct = await Products.findById(args.id);
        return SpecificProduct;
      } catch (e) {
        console.log("Failed to get specific Product", e.message);
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
        const test = await newProduct.save();
        //console.log(test);
        const Product = await Products.findById(test._id).populate([
          { path: "Owner" },
          { path: "CodePromo" },
        ]);
        return Product;
      } catch (e) {
        console.log("Failed to add product", e.message);
      }
    },

    UpdateProduct: async (parent, args) => {
      try {
        const updatedProduct = await Products.findByIdAndUpdate(args.id, args, {
          new: true,
        });
        return updatedProduct.save();
      } catch (e) {
        console.log("Failed to update Client", e.message);
      }
    },

    DeleteProducts: async (parent, args) => {
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
