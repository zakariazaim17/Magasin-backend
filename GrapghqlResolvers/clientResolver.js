import clientModel from "../MongoModels/user.js";

export default {
  Query: {
    GetClientById: async (parent, args) => {
      try {
        return await clientModel.findById(args.id);
      } catch (e) {
        console.log("Failed to get Client by id", e.message);
      }
    },

    GetAllClients: async (parent, args) => {
      try {
        return await clientModel.find();
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

    UpdateClient: async (parent, args) => {
      try {
        const update = {
          Username: args.Username,
          Email: args.Email,
          Pass: args.Pass,
          ClientLevel: args.ClientLevel,
          Verified: args.Verified,
          Totalproducts: args.Totalproducts,
        };
        return await clientModel.findByIdAndUpdate(args.id, args, {
          new: true,
        });
      } catch (e) {
        console.log("Update user Failed", e);
      }
    },
  },
};
