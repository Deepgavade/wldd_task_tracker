import mongoose, { Schema, Document } from "mongoose";

export interface ITask extends Document {
  title: string;
  description?: string;
  status: "pending" | "completed";
  dueDate?: Date;
  owner: mongoose.Types.ObjectId;
  createdAt: Date;
}

const TaskSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String
    },
    status: {
      type: String,
      enum: ["pending", "completed"],
      default: "pending"
    },
    dueDate: {
      type: Date
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
  },
  {
    timestamps: { createdAt: true, updatedAt: false }
  }
);

/* Required indexing for assignment */
TaskSchema.index({ owner: 1, status: 1 });

export default mongoose.model<ITask>("Task", TaskSchema);