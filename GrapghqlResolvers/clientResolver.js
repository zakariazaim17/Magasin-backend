import clientModel from "../MongoModels/user.js";

export default {
  Query: {
    GetClientById: async (parent, args) => {
      try {
        return await clientModel.findById(args.id);
      } catch (e) {
        console.log(e.message);
      }
    },
  },

  Mutation: {
    AddClient: async (parent, args) => {
      try {
        const newClient = await new clientModel({
          ...args,
          Joined: new Date(),
          ClientLevel: 1,
          Verified: false,
          Totalproducts: 0,
        });

        return newClient.save();
      } catch (e) {
        console.log(e - mressage);
      }
    },
  },
};
