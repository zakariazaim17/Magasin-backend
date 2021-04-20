import Bidings from "../MongoModels/biding.js";

export default {
  Query: {
    GetBidings: async (parent, args) => {
      try {
        const Biding = await Bidings.find().populate([{ path: "Owner" }]);
        return Biding;
      } catch (e) {
        console.log("Failed to  get Bidings (resolver)", e.message);
      }
    },
  },
  Mutation: {
    AddBiding: async (parent, args) => {
      try {
        const newBidings = await Bidings.create(args);
        const finalBiding = await newBidings.save();
        return finalBiding.populate([{ path: "Owner" }]);
      } catch (e) {
        console.log("Failed to Add biding (Resolver)", e.message);
      }
    },

    DeleteBiding: async (parent, args) => {
      try {
        const deletedbiding = await Bidings.findOneAndDelete({ _id: args.id });
        return deletedbiding;
      } catch (e) {
        console.log("Failed to Delete biding (Resolver)", e.message);
      }
    },
  },
};
