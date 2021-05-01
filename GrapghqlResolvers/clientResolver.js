import clientModel from "../MongoModels/user.js";
import apollopackage from "apollo-server-express";
const { AuthenticationError } = apollopackage;
import authpackage from "../passport/authenticate.js";
const { login } = authpackage;
import bcrypt from "bcrypt";

export default {
  Query: {
    GetClientById: async (parent, args, { user }) => {
      if (!user) {
        throw new AuthenticationError("You are not authenticated");
      } else {
        try {
          return await clientModel.findById(args.id);
        } catch (e) {
          console.log("Failed to get Client by id", e.message);
        }
      }
    },

    GetAllClients: async (parent, args, { user }) => {
      console.log("userResolver", user);
      if (!user) {
        throw new AuthenticationError("You are not authenticated");
      } else {
        try {
          return await clientModel.find();
        } catch (e) {
          console.log(e.message);
        }
      }
    },

    login: async (parent, args, { req, res }) => {
      console.log(args);
      req.body = args;

      try {
        const authResponse = await login(req, res);
        console.log("authresponse", authResponse);
        return {
          id: authResponse.user._id,
          ...authResponse.user,
          token: authResponse.token,
        };
      } catch (e) {
        throw new AuthenticationError("invalid credentials");
      }
    },
  },

  Mutation: {
    AddClient: async (parent, args) => {
      try {
        const hashpassword = await bcrypt.hash(args.password, 12);

        const newClient = await new clientModel({
          username: args.username,
          Email: args.Email,
          password: hashpassword,
          Joined: new Date(),
          ClientLevel: 1,
          Verified: false,
          Totalproducts: 0,
        });

        return newClient.save();
      } catch (e) {
        console.log(e.mressage);
      }
    },

    UpdateClient: async (parent, args, { user }) => {
      console.log("userResolver", user);
      if (!user) {
        throw new AuthenticationError("You are not authenticated");
      }
      //const hashedpass = await bcrypt.hash(args.password, 11);
      try {
        /*  const update = {
          username: args.username,
          Email: args.Email,
          password: hashedpass,
          ClientLevel: args.ClientLevel,
          Verified: args.Verified,
          Totalproducts: args.Totalproducts,
        };
        */
        const updatedClient = await clientModel.findByIdAndUpdate(
          args.id,
          args,
          {
            new: true,
          }
        );
        return updatedClient.save();
      } catch (e) {
        console.log("Update user Failed", e.message);
      }
    },
  },
};
