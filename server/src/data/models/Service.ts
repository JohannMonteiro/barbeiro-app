import mongoose from "mongoose";

type ServiceType = "hair" | "beard" | "hairAndBeard";

type ServiceModel = {
  type: ServiceType;
  date: string;
  hoursIds: number[];
  barberId: string;
  clientId: string;
};

const userSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
      enum: ["hair", "beard", "hairAndBeard"],
    },
    date: { type: String, required: true },
    hoursIds: { type: [Number], required: true },
    barberId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    clientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Service = mongoose.model<ServiceModel>("Service", userSchema);

export default Service;
