import Soldes from "../MongoModels/solde.js";

export default {
  Query: {
    GetdiscountByID: async (parent, args) => {
      try {
        return await Soldes.findById(args.id);
      } catch (e) {
        console.log("Failed to Get Discount", e.message);
      }
    },
  },

  Mutation: {
    AddDiscount: async (parent, args) => {
      try {
        console.log("QQ", args.Expiry.toString(), args.Code);
        const newDiscount = await Soldes.create({
          ...args,
          Expiry: new Date(args.Expiry),
        });
        return newDiscount;
      } catch (e) {
        console.log("Failed to add discount", e.message);
      }
    },

    UpdateDiscount: async (parent, args) => {
      try {
        const updatedDiscount = await Soldes.findByIdAndUpdate(args.id, args, {
          new: true,
        });
        return updatedDiscount;
      } catch (e) {
        console.log("Failed to update discount", e.message);
      }
    },

    DeleteDiscount: async (parent, args) => {
      try {
        const deletedDiscount = await Soldes.findOneAndDelete({ _id: args.id });
        return deletedDiscount;
      } catch (e) {
        console.log("Failed to Delete Discount", e.message);
      }
    },
  },
};
