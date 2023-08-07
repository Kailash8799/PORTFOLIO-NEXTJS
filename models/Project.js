import mongoose from "mongoose";

const ProjectSchema = mongoose.Schema({
    projectname:{type:String}
}, { timestamps: true });

export default mongoose.model.Project ||
  mongoose.model("Project", ProjectSchema);
