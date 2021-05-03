import Images from "../MongoModels/image.js";

export default {
  Query: {
    GetImages: async (parent, args, { user }) => {
      if (!user) {
        throw new AuthenticationError("You are not authenticated");
      }
      try {
        const images = await Images.find();
        return images;
      } catch (e) {
        console.log("Failed to Get Images", e.message);
      }
    },
  },

  Mutation: {
    DeleteImage: async (parent, args, { user }) => {
      if (!user) {
        throw new AuthenticationError("You are not authenticated");
      }
      try {
        const deletedImage = await Images.findOneAndDelete({
          photo: args.photo,
        });
        return deletedImage;
      } catch (e) {
        console.log("Failed to delete Image", e.message);
      }
    },
  },
};
