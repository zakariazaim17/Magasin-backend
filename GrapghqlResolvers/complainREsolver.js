import Complains from "../MongoModels/complaint.js";

export default {
  Query: {
    GetComplains: async (parent, args) => {
      try {
        const AllComplains = await Complains.find().populate([
          { path: "From" },
          { path: "To" },
        ]);
        return AllComplains;
      } catch (e) {
        console.log("Failed to get all Complains", e.message);
      }
    },
  },

  Mutation: {
    AddComplain: async (parent, args) => {
      try {
        const newComplain = await Complains.create({
          ...args,
          Status: "pending",
        });
        const finalnewComplain = await newComplain.save();
        return finalnewComplain;
      } catch (e) {
        console.log("Failed to get all Complains", e.message);
      }
    },

    DeleteComplain: async (parent, args) => {
      try {
        const deletedComplain = await Complains.findOneAndDelete({
          _id: args.id,
        });

        return deletedComplain.populate([{ path: "From" }, { path: "To" }]);
      } catch (e) {
        console.log("Failed to Delete Complain", e.message);
      }
    },

    UpdateComplain: async (parent, args) => {
      try {
        const updatedComplain = await Complains.findByIdAndUpdate(
          args.id,
          args,
          { new: true }
        );
        const finalupdatedComplain = await updatedComplain.save();
        return finalupdatedComplain.populate([
          { path: "From" },
          { path: "To" },
        ]);
      } catch (e) {
        console.log("Failed to Update Complain (REsolver)", e.message);
      }
    },
  },
};
