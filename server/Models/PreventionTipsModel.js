import mongoose from "mongoose";


const PreventionTipSchema = mongoose.Schema(
  {
    preventionTip: {
      type: String,
      required: true,
    },
    whyItIsImportant: {
      type: String,
      required: true,
    },
    howToApply: {
      type: String,
      required: true,
    },
    whoCanHelp: {
      type: String, 
      required: true,
    },
    likes: {
      count: { type: Number, default: 0 },
      users: { type: [String], default: [] }
    },
   },
  
  {
    timestamps: true, 
  }
);



const PreventionTipsModel = mongoose.model("tips", PreventionTipSchema);

export default PreventionTipsModel;
