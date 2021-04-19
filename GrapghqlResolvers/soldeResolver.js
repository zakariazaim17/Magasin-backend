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
        const newDiscount = await Soldes.create(args);
        return newDiscount;
      } catch (e) {
        console.log("Failed to add discount", e.message);
      }
    },
  },
};
