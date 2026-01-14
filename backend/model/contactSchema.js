import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 80,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Invalid email address"],
      index: true,
    },

    company: {
      type: String,
      trim: true,
      maxlength: 120,
    },

    service: {
      type: String,
      required: true,
      enum: [
        "Web Development",
        "SaaS Development",
        "AI Automation",
        "Website Management",
        "Mobile App Development",
      ],
    },

    message: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 2000,
    },

    source: {
      type: String,
      default: "Website Contact Form",
    },

    status: {
      type: String,
      enum: ["new", "contacted", "qualified", "closed"],
      default: "new",
    },

    ipAddress: String,
    userAgent: String,
  },
  {
    timestamps: true, // createdAt + updatedAt
  }
);

export default mongoose.model("Contact", ContactSchema);
